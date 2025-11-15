import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

export interface BedrockConfig {
  region: string;
  accessKeyId: string;
  secretAccessKey: string;
  modelId: string;
}

export interface DocumentSummary {
  summary: string;
  keyPoints: string[];
  actionItems: string[];
  pensionAmount?: string;
  paymentDate?: string;
  documentType?: string;
}

class BedrockService {
  private client: BedrockRuntimeClient;
  private modelId: string;

  constructor(config: BedrockConfig) {
    this.client = new BedrockRuntimeClient({
      region: config.region,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });
    this.modelId = config.modelId;
  }

  async interpretPensionDocument(
    documentContent: string,
    fileName?: string
  ): Promise<DocumentSummary> {
    try {
      const prompt = `Du er en dansk pensionsekspert. Analyser følgende pensionsdokument og giv et klart, forståeligt sammendrag på dansk. Dette kan være et pensionsbrev, årsopgørelse, policedokument, eller anden pensionsrelateret dokumentation.

${fileName ? `Filnavn: ${fileName}` : ""}

Pensionsdokument:
${documentContent}

Giv venligst et svar i følgende JSON format:
{
  "summary": "Et kort sammendrag af dokumentet på dansk i almindelige ord",
  "keyPoints": ["Vigtige punkter fra dokumentet"],
  "actionItems": ["Handlinger som pensionisten skal tage"],
  "pensionAmount": "Pensionsbeløb hvis nævnt",
  "paymentDate": "Udbetalingsdato hvis nævnt",
  "documentType": "Type af dokument (f.eks. 'Pensionsbrev', 'Årsopgørelse', 'Police', 'E-mail')"
}

Svar kun med JSON uden ekstra tekst.`;

      const command = new InvokeModelCommand({
        modelId: this.modelId,
        body: JSON.stringify({
          anthropic_version: "bedrock-2023-05-31",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
        contentType: "application/json",
        accept: "application/json",
      });

      const response = await this.client.send(command);
      const responseBody = JSON.parse(new TextDecoder().decode(response.body));

      // Extract the JSON response from Claude's response
      const aiResponse = responseBody.content[0].text;

      try {
        return JSON.parse(aiResponse);
      } catch (parseError) {
        // Fallback if JSON parsing fails
        return {
          summary: aiResponse,
          keyPoints: [],
          actionItems: [],
        };
      }
    } catch (error) {
      console.error("Fejl ved AI-analyse:", error);
      throw new Error(
        "Kunne ikke analysere pensionsdokumentet. Prøv igen senere."
      );
    }
  }

  // Keep the old method for backward compatibility
  async interpretPensionLetter(
    letterContent: string
  ): Promise<DocumentSummary> {
    return this.interpretPensionDocument(letterContent);
  }
}

export default BedrockService;
