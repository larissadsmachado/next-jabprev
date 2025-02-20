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



const FeedbackForm = () => {
  const [nota, setNota] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const notas = [
    { label: "Péssimo", icon: <XCircle className="w-5 h-5 text-red-500" /> },
    { label: "Ruim", icon: <ThumbsDown className="w-5 h-5 text-orange-500" /> },
    { label: "Regular", icon: <Meh className="w-5 h-5 text-yellow-500" /> },
    { label: "Bom", icon: <ThumbsUp className="w-5 h-5 text-green-500" /> },
    { label: "Excelente", icon: <Star className="w-5 h-5 text-blue-500" /> },
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
    <div className="flex justify-center items-center bg-gradient-to-b from-[#003470] via-[#9ccef0] to-[#003470] py-36">
      <div className="">
        <h2 className="text-4xl font-bold text-center mb-4 text-white uppercase pb-3">
          Avalie nosso serviço
        </h2>

        <div className="max-w-md mx-auto bg-white border-2 border-gray-300 shadow-lg rounded-2xl p-6 ">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {notas.map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setNota(label)}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border w-full text-center transition-all ${
                    nota === label
                      ? "bg-blue-800 text-white border-2 border-blue-300"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200 border-2 border-gray-400"
                  }`}
                >
                  {icon} {label}
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 transition-all flex items-center justify-center"
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
