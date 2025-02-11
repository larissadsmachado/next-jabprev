'use client';
import { useState } from "react";
import { FaPlus, FaMinus, FaUndo, FaWheelchair, FaEye, FaAdjust, FaFont, FaUnderline } from "react-icons/fa";
import { motion } from "framer-motion";

const AccessibilityButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(1);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);
  const [isNegativeContrast, setIsNegativeContrast] = useState<boolean>(false);
  const [isWhiteBackground, setIsWhiteBackground] = useState<boolean>(false);
  const [isUnderlineLinks, setIsUnderlineLinks] = useState<boolean>(false);
  const [isLegibleFont, setIsLegibleFont] = useState<boolean>(false);

  // Funções de acessibilidade
  const increaseFontSize = () => setFontSize((prev) => prev + 0.1);
  const decreaseFontSize = () => setFontSize((prev) => (prev > 1 ? prev - 0.1 : prev));
  const toggleHighContrast = () => setIsHighContrast((prev) => !prev);
  const toggleNegativeContrast = () => setIsNegativeContrast((prev) => !prev);
  const toggleWhiteBackground = () => setIsWhiteBackground((prev) => !prev);
  const toggleUnderlineLinks = () => setIsUnderlineLinks((prev) => !prev);
  const toggleLegibleFont = () => setIsLegibleFont((prev) => !prev);
  const resetAccessibility = () => {
    setFontSize(1);
    setIsHighContrast(false);
    setIsNegativeContrast(false);
    setIsWhiteBackground(false);
    setIsUnderlineLinks(false);
    setIsLegibleFont(false);
  };

  return (
    <div
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
      style={{ position: "fixed", filter: "none" }}
    >
       <button
        className="bg-[#052C64] text-white p-2 rounded-md flex items-center justify-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FaWheelchair className="text-2xl" />
      </button>

      {isExpanded && (
        <motion.div
          className="bg-[#052C64] p-2 rounded-md mt-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-2 text-white text-sm">
            <button onClick={increaseFontSize} className="hover:bg-blue-600 p-2 rounded flex items-center">
              <FaPlus className="mr-2" /> Aumentar Texto
            </button>
            <button onClick={decreaseFontSize} className="hover:bg-blue-600 p-2 rounded flex items-center">
              <FaMinus className="mr-2" /> Diminuir Texto
            </button>
            <button onClick={toggleHighContrast} className="hover:bg-blue-600 p-2 rounded flex items-center">
              <FaEye className="mr-2" />
              {isHighContrast ? "Desativar" : "Ativar"} Alto Contraste
            </button>
            <button onClick={toggleNegativeContrast} className="hover:bg-blue-600 p-2 rounded flex items-center">
              <FaAdjust className="mr-2" />
              {isNegativeContrast ? "Desativar" : "Ativar"} Contraste Negativo
            </button>
            <button onClick={toggleWhiteBackground} className="hover:bg-blue-600 p-2 rounded flex items-center">
              <FaEye className="mr-2" />
              {isWhiteBackground ? "Desativar" : "Ativar"} Fundo Branco
            </button>
            <button onClick={toggleUnderlineLinks} className="hover:bg-blue-600 p-2 rounded flex items-center">
              <FaUnderline className="mr-2" />
              {isUnderlineLinks ? "Remover" : "Sublinhar"} Links
            </button>
            <button onClick={toggleLegibleFont} className="hover:bg-blue-600 p-2 rounded flex items-center">
              <FaFont className="mr-2" />
              {isLegibleFont ? "Remover" : "Ativar"} Fonte Legível
            </button>
            <button onClick={resetAccessibility} className="hover:bg-blue-600 p-2 rounded flex items-center">
              <FaUndo className="mr-2" /> Resetar
            </button>
          </div>
        </motion.div>
      )}

      {/* Aplicação das classes de acessibilidade */}
      <style jsx global>{`
        body {
          ${isHighContrast ? "filter: contrast(2);" : ""}
          ${isNegativeContrast ? "filter: invert(1);" : ""}
          ${isWhiteBackground ? "background-color: white; color: black;" : ""}
        }
        p, a, span, h1, h2, h3, .open-sans-custom, p.text-xs {
          font-size: ${fontSize}em;
        }
        a {
          text-decoration: ${isUnderlineLinks ? "underline" : "none"};
        }
        svg {
          fill: ${isWhiteBackground ? "black" : ""};
        }
      `}</style>
    </div>
  );
};

export default AccessibilityButton;
