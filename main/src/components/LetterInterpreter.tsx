import React, { useState } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import BedrockService, { type LetterSummary, type BedrockConfig } from '../services/bedrockService';

const LetterInterpreter: React.FC = () => {
  const [letterContent, setLetterContent] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysis, setAnalysis] = useState<LetterSummary | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setLetterContent(content);
        setError(null);
      };
      reader.readAsText(file);
    } else {
      setError('Vælg venligst en tekstfil (.txt)');
    }
  };

  const analyzeLetter = async () => {
    if (!letterContent.trim()) {
      setError('Indtast eller upload venligst dit pensionsbrev');
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
      const result = await bedrockService.interpretPensionLetter(letterContent);
      
      setAnalysis(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Der opstod en fejl ved analysen');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="letter-interpreter">
      <div className="interpreter-header">
        <FileText className="header-icon" />
        <h2>Pensionsbrev Fortolker</h2>
        <p>Upload eller indsæt dit pensionsbrev, og vores AI vil forklare det i almindelige ord</p>
      </div>

      <div className="input-section">
        <div className="upload-area">
          <label htmlFor="file-upload" className="upload-button">
            <Upload size={20} />
            Upload Pensionsbrev (.txt)
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".txt"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
        </div>

        <div className="text-input-area">
          <label htmlFor="letter-text">Eller indsæt teksten her:</label>
          <textarea
            id="letter-text"
            value={letterContent}
            onChange={(e) => setLetterContent(e.target.value)}
            placeholder="Indsæt teksten fra dit pensionsbrev her..."
            rows={8}
          />
        </div>

        <button 
          onClick={analyzeLetter}
          disabled={isAnalyzing || !letterContent.trim()}
          className="analyze-button"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="spinning" size={20} />
              Analyserer...
            </>
          ) : (
            'Analyser Pensionsbrev'
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
          </div>

          <div className="summary-section">
            <h4>Sammendrag</h4>
            <p>{analysis.summary}</p>
          </div>

          {analysis.keyPoints.length > 0 && (
            <div className="key-points-section">
              <h4>Vigtige Punkter</h4>
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

export default LetterInterpreter;