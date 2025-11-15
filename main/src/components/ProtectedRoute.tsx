import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Lock, Shield } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <Shield className="spinner" size={32} />
          <p>Kontrollerer adgang...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="access-denied">
        <div className="access-denied-content">
          <Lock size={48} className="access-denied-icon" />
          <h2>Adgang nægtet</h2>
          <p>Du skal være logget ind for at få adgang til Sandboks.</p>
          <p>Log ind i toppen af siden for at fortsætte.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
