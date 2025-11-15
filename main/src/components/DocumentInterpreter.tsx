import React, { useState } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle2, Loader2, File } from 'lucide-react';
import BedrockService, { type DocumentSummary, type BedrockConfig } from '../services/bedrockService';

const DocumentInterpreter: React.FC = () => {
  const [documentContent, setDocumentContent] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<DocumentSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setError(null);

    // Handle different file types
    if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setDocumentContent(content);
      };
      reader.readAsText(file);
    } else if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
      // For now, show message about PDF support - can be enhanced with PDF parsing library
      setError('PDF support kommer snart. Upload venligst en tekstfil eller kopier teksten manuelt.');
    } else if (file.type.startsWith('text/') || 
               file.name.endsWith('.eml') || 
               file.name.endsWith('.msg')) {
      // Handle email files and other text-based files
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setDocumentContent(content);
      };
      reader.readAsText(file);
    } else {
      setError('Understøttede filtyper: .txt, .pdf (kommer snart), .eml, eller kopier teksten direkte');
    }
  };

  const analyzeDocument = async () => {
    if (!documentContent.trim()) {
      setError('Indtast eller upload venligst dit pensionsdokument');
      return;
    }

    const config: BedrockConfig = {
      region: import.meta.env.VITE_AWS_REGION || 'eu-west-1',
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
      modelId: import.meta.env.VITE_BEDROCK_MODEL_ID || 'anthropic.claude-3-sonnet-20240229-v1:0',
    };

    if (!config.accessKeyId || !config.secretAccessKey) {
      setError('AWS konfiguration mangler. Kontakt support.');
      return;
    }

    try {
      setIsAnalyzing(true);
      setError(null);
      
      const bedrockService = new BedrockService(config);
      const result = await bedrockService.interpretPensionDocument(documentContent, fileName);
      
      setAnalysis(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Der opstod en fejl ved analysen');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearDocument = () => {
    setDocumentContent('');
    setFileName('');
    setAnalysis(null);
    setError(null);
  };

  return (
    <div className="letter-interpreter">
      <div className="interpreter-header">
        <File className="header-icon" />
        <h2>Pensionsdokument</h2>
        <p>Upload eller indsæt dit pensionsdokument, og vores AI vil forklare det i almindelige ord</p>
        <p className="file-types">Understøtter: Pensionsbreve, årsopgørelser, policer, e-mails og mere</p>
      </div>

      <div className="input-section">
        <div className="upload-area">
          <label htmlFor="file-upload" className="upload-button">
            <Upload size={20} />
            Upload dokument
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".txt,.pdf,.eml,.msg,text/*"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          {fileName && (
            <div className="uploaded-file">
              <FileText size={16} />
              <span>{fileName}</span>
              <button onClick={clearDocument} className="clear-button">×</button>
            </div>
          )}
        </div>

        <div className="text-input-area">
          <label htmlFor="document-text">Eller indsæt teksten her:</label>
          <textarea
            id="document-text"
            value={documentContent}
            onChange={(e) => setDocumentContent(e.target.value)}
            placeholder="Indsæt teksten fra dit pensionsdokument her... (pensionsbrev, årsopgørelse, e-mail, etc.)"
            rows={8}
          />
        </div>

        <button 
          onClick={analyzeDocument}
          disabled={isAnalyzing || !documentContent.trim()}
          className="analyze-button"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="spinning" size={20} />
              Analyserer dokument...
            </>
          ) : (
            'Analyser pensionsdokument'
          )}
        </button>
      </div>

      {error && (
        <div className="error-message">
          <AlertCircle size={20} />
          <span>{error}</span>
        </div>
      )}

      {analysis && (
        <div className="analysis-results">
          <div className="result-header">
            <CheckCircle2 className="success-icon" />
            <h3>Analyse Resultater</h3>
            {analysis.documentType && (
              <span className="document-type-badge">{analysis.documentType}</span>
            )}
          </div>

          <div className="summary-section">
            <h4>Sammendrag</h4>
            <p>{analysis.summary}</p>
          </div>

          {analysis.keyPoints.length > 0 && (
            <div className="key-points-section">
              <h4>Vigtige punkter</h4>
              <ul>
                {analysis.keyPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {analysis.actionItems.length > 0 && (
            <div className="action-items-section">
              <h4>Hvad skal du gøre?</h4>
              <ul className="action-list">
                {analysis.actionItems.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </div>
          )}

          {(analysis.pensionAmount || analysis.paymentDate) && (
            <div className="important-details">
              <h4>Vigtige Detaljer</h4>
              {analysis.pensionAmount && (
                <div className="detail-item">
                  <strong>Pensionsbeløb:</strong> {analysis.pensionAmount}
                </div>
              )}
              {analysis.paymentDate && (
                <div className="detail-item">
                  <strong>Udbetalingsdato:</strong> {analysis.paymentDate}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentInterpreter;