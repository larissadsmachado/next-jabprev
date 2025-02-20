const data = {
  2014: {
    "Janeiro": "https://example.com/janeiro",
    "Janeiro - Geral": "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/GERAL.pdf",
    "Janeiro - Servidores": "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/COMISSIONADOS.pdf",
    "Janeiro - Câmara": "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/APOSENTADOS-E-PENSIONISTAS-F-FINANCEIRO-CAMARA.pdf",
    "Fevereiro": "https://example.com/fevereiro",
    "Fevereiro - Geral": "#",
    "Fevereiro - Servidores": "#",
    "Fevereiro - Câmara": "#",
  },
  2024: {
    "Janeiro": "#",
    "Janeiro - Geral": "#",
    "Janeiro - Servidores": "#",
    "Janeiro - Câmara": "#",
  },
};

const Links = () => {
  return (
    <div className="h-auto bg-gradient-to-b from-[#cee5ff] to-[#fff4be] p-10">
      {Object.entries(data).map(([year, links]) => (
        <div key={year} className="mb-10">
          {/* 🔹 Título do ano */}
          <h1 className="text-4xl font-bold text-blue-900 mb-4">{year}</h1>
          
          {/* 🔹 Lista contínua de links */}
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(links).map(([title, link]) => (
              <a
                key={title}
                href={link}
                target="_blank"
                className={`text-xl text-[#051f60] hover:underline ${
                  link === "#" ? "text-gray-500 cursor-default pointer-events-none" : ""
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
