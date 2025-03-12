"use client";

import { useState } from "react";
import {
  CheckCircle,
  Loader2,
  XCircle,
  ThumbsDown,
  Meh,
  ThumbsUp,
  Star,
} from "lucide-react";
import React from "react";

const FeedbackForm = () => {
  const [nota, setNota] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const notas = [
    { label: "Péssimo", icon: <XCircle className="w-7 h-7 text-red-500" /> },
    { label: "Ruim", icon: <ThumbsDown className="w-7 h-7 text-orange-500" /> },
    { label: "Regular", icon: <Meh className="w-7 h-7 text-yellow-500" /> },
    { label: "Bom", icon: <ThumbsUp className="w-7 h-7 text-green-500" /> },
    { label: "Excelente", icon: <Star className="w-7 h-7 text-blue-500" /> },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nota) {
      setMessage("Selecione uma opção.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendFeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nota }),
      });

      const data = await response.json();
      if (data.status === "success") {
        setMessage("Avaliação enviada com sucesso!");
        setNota("");
      } else {
        setMessage("Erro ao enviar avaliação.");
      }
    } catch {
      setMessage("Erro ao conectar com o servidor.");
    }

    setLoading(false);
  };

  return (
    <div
      id="enquete"
      className=" justify-center items-center bg-gradient-to-b from-[#ffffff] to-[#053d7d]"
    >
      <div className="relative w-full">
        <svg
          width="100%"
          viewBox="0 0 2000 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.33"
            d="M946 62.22C538.2 152.254 419.8 27.5523 305.4 62.22C132 115.037 0 54.4708 0 54.4708V-6.40161H2000V54.4708C2000 54.4708 1875.8 81.0833 1810.2 84.3462C1744.6 87.711 1684.6 71.8046 1658.6 61.8122C1612 44.1724 1490.6 2.46924 1389.8 -1.60931C1289 -5.68786 984.8 53.757 946 62.22Z"
            fill="#003470"
          />
          <path
            opacity="0.66"
            d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
            fill="#003470"
          />
          <path
            d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
            fill="#003470"
          />
        </svg>
      </div>

      <div className="max-w-2xl mx-auto w-full py-32">
        <h2
          className="text-5xl text-center mb-10 uppercase pb-3 font-bold text-[#173B7C]">
          Avalie nosso serviço
        </h2>

        <div className="bg-white border-4 border-blue-900 shadow-lg rounded-3xl px-8 py-9">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4 mx-3">
              {notas.map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setNota(label)}
                  className={`flex items-center justify-center gap-3 p-4 rounded-2xl border w-full text-center transition-all duration-200 transform Montserrat-Medium ${
                    nota === label
                      ? "bg-[#17347f] text-white border-2 border-gray-300"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-300 border-2 border-blue-900"
                  } hover:scale-105`}
                >
                  {icon} {label}
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white text-xl py-3 rounded-xl transition-all duration-200 transform flex items-center justify-center hover:scale-105"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin mr-2" size={20} />
              ) : (
                "Enviar Avaliação"
              )}
            </button>
          </form>
          {message && (
            <p className="mt-4 text-center text-lg font-semibold flex items-center justify-center gap-2">
              {message.includes("sucesso") ? (
                <CheckCircle className="text-green-500" size={20} />
              ) : (
                "❌"
              )}{" "}
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
