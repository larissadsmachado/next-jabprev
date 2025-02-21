const data = {

  2025: {
    Janeiro: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/GERAL.pdf",
    "R$ 293.702,83": "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/GERAL.pdf",

    Fevereiro: "#",
    "Fevereiro - Câmara": "#",

    Março: "#",
    "Março - Câmara":"#",

    Abril:"#",
    "Abril – Câmara":"#",

    Maio:"#",
    "Maio – Câmara":"#",

    Junho:"#",
    "Junho – Câmara ":"#",

    Julho:"#",
    "Julho – Câmara ":"#",

    Agosto:"#",
    "Agosto – Câmara":"#",

    Setembro:"#",
    Outubro:"#",
    "Outubro – Câmara ":"#",

    Novembro:"#",
    "Novembro – Câmara":"#",

    Dezembro:"#",
    "Dezembro - Câmara":"#",

    "13º Salário":"#",
    "13º Salário – Câmara":"#",
  },



};

const Links = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-[#cee5ff] to-[#fff4be] p-10">
  {Object.entries(data)
    .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA)) // Ordena do maior para o menor
    .map(([year, links]) => (
      <div key={year} className="mb-10 max-w-6xl mx-auto">
        {/* 🔹 Título do ano */}
        <h1 className="text-4xl font-bold text-blue-900 mb-4 py-4">{year}</h1>
        
        {/* 🔹 Lista contínua de links */}
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(links).map(([title, link]) => (
            <a
              key={title}
              href={link}
              target="_blank"
              className={`text-xl hover:underline ${
                link === "#" ? "text-gray-500 cursor-default pointer-events-none" : "text-[#051f60]"
              }`}
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    ))}
</div>

  );
};

export default Links;
