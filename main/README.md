# PPP (Plug & Play Pension) - Danish Pension Sector AI Platform

A modern React + Vite + TypeScript web application for the Danish pension sector that provides plug-and-play AI agent solutions. The platform integrates with AWS Bedrock to make complex pension documents understandable through intelligent AI interpretation.

## 🚀 Features

- **Document Interpreter AI**: Upload or paste pension documents (letters, annual statements, emails, etc.) and get clear, understandable summaries in Danish
- **Multi-format Support**: Handles various document types including pension letters, annual reports, policy documents, and emails
- **AWS Bedrock Integration**: Powered by Claude AI for accurate pension document analysis
- **Modern UI/UX**: Clean, responsive design optimized for Danish users
- **TypeScript**: Full type safety and excellent developer experience
- **Plug-and-Play**: Easy to extend with additional AI agent solutions

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **AI Service**: AWS Bedrock with Claude models
- **Styling**: Modern CSS with CSS custom properties
- **Icons**: Lucide React for consistent iconography

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- AWS account with Bedrock access
- AWS credentials with appropriate permissions for Bedrock

## ⚙️ Setup & Installation

1. **Clone and install dependencies**:

   ```bash
   git clone <repository-url>
   cd ppp-danish-pension-platform
   npm install
   ```

2. **Configure AWS Bedrock**:

   - Copy `.env.example` to `.env`
   - Fill in your AWS credentials:

   ```bash
   cp .env.example .env
   ```

   Update `.env` with your values:

   ```
   VITE_AWS_REGION=eu-west-1
   VITE_AWS_ACCESS_KEY_ID=your_aws_access_key_id
   VITE_AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
   VITE_BEDROCK_MODEL_ID=anthropic.claude-3-sonnet-20240229-v1:0
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

## 🎯 Usage

### Document Interpreter

1. Navigate to the AI Solutions section
2. Either upload a supported document file (.txt, .eml, .msg) or paste your pension document content
3. Click "Analyser pensionsdokument" to get an AI-powered analysis
4. View the summarized results in plain Danish

**Supported Document Types:**

- Pension letters (pensionsbreve)
- Annual statements (årsopgørelser)
- Policy documents (policer)
- Email correspondence (e-mails)
- General text files (.txt)
- PDF support coming soon

The AI will provide:

- **Summary**: Clear explanation in everyday language
- **Key Points**: Important information extracted from the document
- **Action Items**: What you need to do next
- **Important Details**: Pension amounts and payment dates (if mentioned)
- **Document Type**: Automatic identification of document category

## 🏗️ Architecture

```
src/
├── components/
│   ├── Header.tsx             # Main navigation and branding
│   └── DocumentInterpreter.tsx # AI document analysis component
├── services/
│   └── bedrockService.ts      # AWS Bedrock integration
├── App.tsx                    # Main application component
├── App.css                    # Global styles and component styling
└── main.tsx                  # Application entry point
```

## 🔒 Security Considerations

- Environment variables are used for AWS credentials
- Client-side AWS SDK implementation (consider server-side proxy for production)
- Input validation for uploaded files and document types
- Error handling for API failures
- File type validation to prevent malicious uploads

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔮 Future AI Solutions (Coming Soon)

- **PDF Document Support**: Full PDF parsing and analysis
- **Pensionsberegner AI**: Calculate future pension payouts with AI
- **Investeringsrådgiver AI**: Personalized investment advice based on pension profile
- **Dokument Sammenligner**: Compare multiple pension documents
- **Pensionsplanlægger**: AI-powered retirement planning

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Follow TypeScript and React best practices
4. Ensure Danish language support where applicable
5. Submit a pull request

## 📝 Environment Variables

| Variable                     | Description              | Required |
| ---------------------------- | ------------------------ | -------- |
| `VITE_AWS_REGION`            | AWS region for Bedrock   | Yes      |
| `VITE_AWS_ACCESS_KEY_ID`     | AWS access key           | Yes      |
| `VITE_AWS_SECRET_ACCESS_KEY` | AWS secret key           | Yes      |
| `VITE_BEDROCK_MODEL_ID`      | Bedrock model identifier | Yes      |

## 🐛 Troubleshooting

### Common Issues

1. **AWS Credentials Error**

   - Verify your AWS credentials in `.env`
   - Ensure your AWS account has Bedrock access
   - Check if the specified region supports Bedrock

2. **File Upload Issues**

   - Supported formats: `.txt`, `.eml`, `.msg`, and other text-based files
   - PDF support coming soon
   - Ensure file content is valid text
   - Check file size limits

3. **Build Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check Node.js version (18+ required)

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support with PPP (Plug & Play Pension), please contact our development team or create an issue in the repository.

---

**Built with ❤️ for the Danish pension sector**
