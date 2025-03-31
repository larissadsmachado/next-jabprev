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
    { label: "Péssimo", icon: <XCircle className="w-7 h-7 text-red-600" /> },
    { label: "Ruim", icon: <ThumbsDown className="w-7 h-7 text-orange-600" /> },
    { label: "Regular", icon: <Meh className="w-7 h-7 text-yellow-600" /> },
    { label: "Bom", icon: <ThumbsUp className="w-7 h-7 text-green-600" /> },
    { label: "Excelente", icon: <Star className="w-7 h-7 text-blue-600" /> },
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
    <div id="enquete" className="justify-center items-center rounded-b-[50px] px-4 sm:px-8 md:px-20 my-10">
      <div className="pt-10 pb-10">
      <h1 className="relative flex justify-center text-3xl sm:text-xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-[#1E3A8A] uppercase">
          <span className="px-4 text-center">
            Avalie Nosso <br /> Serviço
          </span>
          <div className="absolute top-1/2 left-0 w-full flex items-center">
            <div
              className="flex-1 border-t-4"
              style={{
                borderImage:
                  "linear-gradient(to right, white, white,  #1E3A8A) 1",
                borderImageSlice: 1,
              }}
            ></div>

            <div className="w-1/4 sm:w-2/12 md:w-4/12 lg:w-4/12 xl:w-3/12"></div>

            <div
              className="flex-1 border-t-4"
              style={{
                borderImage:
                  "linear-gradient(to left, white, white,  #1E3A8A) 1",
                borderImageSlice: 1,
              }}
            ></div>
          </div>
        </h1>
      </div>

      <div className="max-w-2xl mx-auto w-full pb-20">
        <div className="bg-white border-4 border-[#1E3A8A] shadow-lg rounded-3xl px-6 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {notas.map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setNota(label)}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border w-full text-center transition-all duration-200 transform
            ${
              nota === label
                ? "bg-slate-400 text-bold border-blue-900"
                : "bg-gray-100 text-gray-800 hover:bg-gray-300 border-blue-900"
            } hover:scale-105`}
                >
                  {icon}
                  <span className="text-sm sm:text-base">{label}</span>
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 border border-slate-400 text-white text-lg py-3 rounded-xl transition-all duration-200 transform flex items-center justify-center hover:scale-105"
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
                <CheckCircle className="text-blue-500" size={20} />
              ) : (
                "❌"
              )} {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
