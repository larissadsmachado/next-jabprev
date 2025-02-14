"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { useInView } from "react-intersection-observer";
import DivisorDeForma from "../DivisorDeForma/divisor";

// Novo URL do Web App no Google Apps Script
const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzyWtPhUlaGqges0C2nLVBGifYNEMcRRQzFbbebPC2rKwiyv_qsViPJ7EXyCBFEccdO/exec";

const Poll = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [results, setResults] = useState<{ [key: string]: number }>({
    Excelente: 0,
    Bom: 0,
    Regular: 0,
    Ruim: 0,
  });
  const [submitted, setSubmitted] = useState(false);

  const options: Array<"Excelente" | "Bom" | "Regular" | "Ruim"> = [
    "Excelente",
    "Bom",
    "Regular",
    "Ruim",
  ];

  const colors: { [key in "Excelente" | "Bom" | "Regular" | "Ruim"]: string } =
    {
      Excelente: "#FFD700",
      Bom: "#20B2AA",
      Regular: "#FF6347",
      Ruim: "#D3D3D3",
    };

  // Carregar os resultados quando a página for carregada
  useEffect(() => {
    fetch(SHEET_URL + "?action=getResults")
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((error) =>
        console.error("Erro ao buscar dados da planilha:", error)
      );
  }, []);

  const handleSubmit = () => {
    if (!selectedOption) return;

    const newResults = {
      ...results,
      [selectedOption]: (results[selectedOption] || 0) + 1,
    };

    // Log para verificar se o evento está sendo disparado
    console.log("Enviando dados para o Google Sheets:", newResults);

    // Envia os dados para o Google Sheets
    fetch(SHEET_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        excelente: newResults["Excelente"] || 0,
        bom: newResults["Bom"] || 0,
        regular: newResults["Regular"] || 0,
        ruim: newResults["Ruim"] || 0,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setResults(newResults); // Atualiza os resultados localmente após enviar
        setSubmitted(true); // Marca a pesquisa como enviada
      })
      .catch((error) => console.error("Erro ao enviar dados:", error));
  };

  // Transformar os resultados em formato adequado para o gráfico
  const chartData = options.map((option) => ({
    name: option,
    value: results[option] || 0,
  }));

  const { ref, inView } = useInView({
    triggerOnce: true, // Vai ativar a animação uma vez que o componente aparecer
    threshold: 0.1, // 10% do componente precisa estar visível para disparar
  });

  return (
    <div className="bg-gradient-to-b from-[#f0e3b7] via-[#9ccef0] to-[#003470]">
      <DivisorDeForma />

      <div className="flex justify-center items-center py-44 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          ref={ref} // Aplica o ref aqui
          className="w-4/12 p-6 pb-10 bg-[#e4f8fd] text-cyan-900 border-4 border-emerald-900 shadow-lg rounded-3xl h-auto min-h-[360px] flex flex-col"
        >
          {submitted ? (
            <>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="bg-green-600 text-white p-2 rounded mb-4 text-center"
              >
                <strong>✅ Obrigado pelo seu VOTO!</strong>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="flex justify-center"
              >
                <PieChart width={220} height={220}>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {chartData.map((entry) => (
                      <Cell key={entry.name} fill={colors[entry.name]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </motion.div>
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-xl font-semibold text-center mb-10 pt-2 uppercase"
              >
                Como Você Avalia Este Serviço?
              </motion.h2>
              <div className="space-y-2 flex-grow">
                {options.map((option) => (
                  <motion.label
                    key={option}
                    className="flex items-center space-x-2 cursor-pointer text-lg ml-11"
                    initial={{ opacity: 0, x: -30 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                    }
                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                  >
                    <input
                      type="radio"
                      name="poll"
                      value={option}
                      className="w-4 h-4"
                      onChange={() => setSelectedOption(option)}
                    />
                    <span>{option}</span>
                  </motion.label>
                ))}
              </div>
            </>
          )}

          {!submitted && (
            <motion.button
              onClick={handleSubmit}
              className="w-3/4 bg-white text-cyan-900 py-2 rounded-xl font-bold text-center mx-auto mt-4 border-2 border-cyan-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Enviar
            </motion.button>
          )}
        </motion.div>
      </div>

    </div>
  );
};

export default Poll;
