"use client"
import { useState } from "react";

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [results, setResults] = useState<{ [key: string]: number }>({
    Excelente: 57,
    Bom: 13,
    Regular: 8,
    Ruim: 20,
  });
  const [submitted, setSubmitted] = useState(false);
  const totalVotes = Object.values(results).reduce((a, b) => a + b, 0);

  const options: Array<"Excelente" | "Bom" | "Regular" | "Ruim"> = ["Excelente", "Bom", "Regular", "Ruim"];
  const colors: { [key in "Excelente" | "Bom" | "Regular" | "Ruim"]: string } = {
    Excelente: "bg-yellow-400",
    Bom: "bg-teal-300",
    Regular: "bg-red-400",
    Ruim: "bg-gray-200",
  };

  const handleSubmit = () => {
    if (!selectedOption) return;

    setResults((prev) => ({
      ...prev,
      [selectedOption]: prev[selectedOption] + 1,
    }));

    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-blue-600 text-white shadow-lg rounded-lg h-auto min-h-[300px]">
      {submitted ? (
        <>
          <div className="bg-green-600 text-white p-2 rounded mb-2 text-center">
            <strong>✅ Obrigado pelo seu VOTO!</strong>
          </div>
          <h2 className="text-lg text-center font-semibold mb-4">
            Como você avalia os serviços do JaboatãoPrev?
          </h2>
          {options.map((option) => {
            const percentage = ((results[option] / totalVotes) * 100).toFixed(2);
            return (
              <div key={option} className="mb-2">
                <div className="flex justify-between text-sm">
                  <span>{option}</span>
                  <span>{percentage}%</span>
                </div>
                <div className="w-full bg-gray-300 rounded h-2">
                  <div
                    className={`${colors[option]} h-2 rounded`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h2 className="text-lg font-semibold text-center mb-4">
            Como você avalia este serviço?
          </h2>
          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="poll"
                  value={option}
                  className="w-4 h-4"
                  onChange={() => setSelectedOption(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 w-full bg-white text-blue-600 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            Enviar
          </button>
        </>
      )}
    </div>
  );
};

export default Poll;

