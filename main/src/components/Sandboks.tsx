import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import DocumentInterpreter from "./DocumentInterpreter";
import "../App.css";

type SolutionType = "dokumentfortolker" | null;

const Sandboks: React.FC = () => {
  const [selectedSolution, setSelectedSolution] =
    useState<SolutionType>("dokumentfortolker");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const solutions = [
    {
      id: "dokumentfortolker" as const,
      name: "Dokumentfortolker",
      description: "AI-drevet fortolkning af pensionsdokumenter",
    },
  ];

  const handleSolutionChange = (solutionId: SolutionType) => {
    setSelectedSolution(solutionId);
    setIsDropdownOpen(false);
  };

  const renderSelectedSolution = () => {
    switch (selectedSolution) {
      case "dokumentfortolker":
        return <DocumentInterpreter />;
      default:
        return (
          <div className="no-solution-selected">
            <h3>Vælg en løsning fra dropdown menuen ovenfor</h3>
            <p>
              Brug dropdown menuen til at vælge hvilken AI-løsning du vil teste.
            </p>
          </div>
        );
    }
  };

  const selectedSolutionData = solutions.find((s) => s.id === selectedSolution);

  return (
    <main className="main-content sandboks-page">
      <section className="sandbox-controls">
        <div className="container">
          <div className="solution-selector">
            <label htmlFor="solution-dropdown">Vælg løsning:</label>
            <div className="custom-dropdown">
              <button
                className="dropdown-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
              >
                <span>{selectedSolutionData?.name || "Vælg løsning"}</span>
                <ChevronDown
                  size={20}
                  className={`dropdown-icon ${isDropdownOpen ? "rotated" : ""}`}
                />
              </button>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  {solutions.map((solution) => (
                    <button
                      key={solution.id}
                      className={`dropdown-item ${
                        selectedSolution === solution.id ? "selected" : ""
                      }`}
                      onClick={() => handleSolutionChange(solution.id)}
                    >
                      <div className="solution-info">
                        <span className="solution-name">{solution.name}</span>
                        <span className="solution-desc">
                          {solution.description}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="sandbox-content">
        <div className="container">{renderSelectedSolution()}</div>
      </section>
    </main>
  );
};

export default Sandboks;
