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
      className="mb-5 justify-center items-center rounded-b-[50px] mx-20 my-4"
    >
      <div className="pt-20 pb-14 ">
        <h1 className="relative flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-semibold text-[#1E3A8A] uppercase">
          <span className="px-4 text-center">
            Avalie Nosso <br /> Serviço
          </span>
          <div className="absolute top-1/2 left-0 w-full flex items-center">
            {/* Gradiente da esquerda indo do verde até o branco e continuando branco */}
            <div
              className="flex-1 border-t-4"
              style={{
                borderImage:
                  "linear-gradient(to right, white, white,  #1E3A8A) 1",
                borderImageSlice: 1,
              }}
            ></div>

            <div className="w-1/4 sm:w-2/12 md:w-4/12 lg:w-4/12 xl:w-3/12"></div>

            {/* Gradiente da direita indo do branco até o verde e começando branco */}
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

      <div className="max-w-2xl mx-auto w-full pb-28">
        <div className="bg-white border-4 border-[#1E3A8A] shadow-lg rounded-3xl px-8 py-9 md:mx-0 mx-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-3">
              {notas.map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setNota(label)}
                  className={`flex items-center justify-center gap-3 p-4 rounded-2xl border w-full text-center transition-all duration-200 transform Montserrat-Medium 
            ${
              nota === label
                ? "bg-green-700 text-slate-100 border-2 border-blue-900"
                : "bg-gray-100 text-gray-800 hover:bg-gray-300 border-2 border-blue-900"
            } 
            hover:scale-105`}
                >
                  {icon} {label}
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-900 border border-slate-400 text-white text-xl py-3 rounded-xl transition-all duration-200 transform flex items-center justify-center hover:scale-105"
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
