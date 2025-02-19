"use client";
import { useEffect, useState } from "react";
import DivisorDeForma from "../DivisorDeForma/divisor";
import { motion } from "framer-motion";
import { FaStar, FaRegSmile, FaRegMeh, FaRegFrown, FaRegSadTear, FaRegGrinStars } from "react-icons/fa";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbzyWtPhUlaGqges0C2nLVBGifYNEMcRRQzFbbebPC2rKwiyv_qsViPJ7EXyCBFEccdO/exec";

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(
    () => Number(localStorage.getItem("selectedOption")) || null
  );
  const [submitted, setSubmitted] = useState<boolean>(() => Boolean(localStorage.getItem("submitted")));
  const [results, setResults] = useState<{ [key: string]: number }>({ "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 });

  useEffect(() => {
    fetch(SHEET_URL + "?action=getResults")
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.error("Erro ao buscar dados da planilha:", error));
  }, []);

  const handleSubmit = () => {
    if (selectedOption === null || submitted) return;
    const newResults = { ...results, [selectedOption]: (results[selectedOption] || 0) + 1 };

    fetch(SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newResults),
    })
      .then((response) => response.json())
      .then(() => {
        setResults(newResults);
        setSubmitted(true);
        localStorage.setItem("submitted", "true");
      })
      .catch((error) => console.error("Erro ao enviar dados:", error));
  };

  const handleSelection = (value: number) => {
    if (!submitted) {
      setSelectedOption(value);
      localStorage.setItem("selectedOption", value.toString());
    }
  };

  const faces = [
    { value: 1, icon: <FaRegSadTear className="text-red-600" size={40} />, color: "text-red-500" },
    { value: 2, icon: <FaRegFrown className="text-orange-600" size={40} />, color: "text-orange-500" },
    { value: 3, icon: <FaRegMeh className="text-yellow-600" size={40} />, color: "text-yellow-500" },
    { value: 4, icon: <FaRegSmile className="text-green-600" size={40} />, color: "text-green-500" },
    { value: 5, icon: <FaRegGrinStars className="text-green-800" size={40} />, color: "text-green-700" },
  ];

  return (
    <div id="enquete" 
    className="bg-gradient-to-b from-[#f0e3b7] via-[#9ccef0] to-[#003470]">

    <DivisorDeForma />

    <div 
    className="flex justify-center items-center p-6 py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl border-4 border-green-700"
      >
        {submitted ? (
          <div className="text-center text-green-600 font-bold text-lg mb-4">✅ Obrigado pelo seu voto!</div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center mb-9 text-green-900">Como Você Avalia Este Serviço?</h2>
            <div className="flex flex-col space-y-3 items-center">
              {faces.map(({ value, icon, color }) => (
                <div
                  key={value}
                  className={`flex items-center space-x-4 cursor-pointer ${selectedOption === value ? "scale-125" : ""}`}
                  onClick={() => handleSelection(value)}
                >
                  {icon}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={24}
                        className={i < value ? color : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleSubmit}
              className={`mt-4 w-full py-2 rounded-lg font-bold ${submitted ? "cursor-not-allowed" : "bg-green-700 text-white hover:bg-green-900"} mt-11`}
              disabled={submitted}
            >
              Enviar
            </button>
          </>
        )}
      </motion.div>
    </div>

    </div>
  );
};

export default Poll;