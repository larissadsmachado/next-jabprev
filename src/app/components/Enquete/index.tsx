"use client";

import { useState } from "react";
import { CheckCircle, Loader2, XCircle, ThumbsDown, Meh, ThumbsUp, Star } from "lucide-react";

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
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 border">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Avalie nosso serviço</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          {notas.map(({ label, icon }) => (
            <button
              key={label}
              type="button"
              onClick={() => setNota(label)}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border w-full text-center transition-all ${
                nota === label ? "bg-blue-500 text-white border-blue-500" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all flex items-center justify-center"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin mr-2" size={20} /> : "Enviar Avaliação"}
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-lg font-semibold flex items-center justify-center gap-2">
          {message.includes("sucesso") ? <CheckCircle className="text-green-500" size={20} /> : "❌"} {message}
        </p>
      )}
    </div>
  );
};

export default FeedbackForm;
