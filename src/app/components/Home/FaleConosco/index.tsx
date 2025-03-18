"use client";
import React from "react";
import { useState } from "react";

const emailDestinations: Record<string, string> = {
  financeiro: "admfinanceiro@jaboataoprev.jaboatao.pe.gov.br",
  juridico: "jurídico@jaboataoprev.jaboatao.pe.gov.br",
  beneficios: "beneficios@jaboataoprev.jaboatao.pe.gov.br",
  investimento: "investimentos@jaboataoprev.jaboatao.pe.gov.br",
  presidencia: "presidencia@jaboataoprev.jaboatao.pe.gov.br",
};

const FaleConosco = () => {
  const [loading, setLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>("financeiro");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const recipientEmail = emailDestinations[selectedSubject];

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      email:
        (form.elements.namedItem("email") as HTMLInputElement)?.value || "",
      message:
        (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ||
        "",
      subject: selectedSubject,
      recipientEmail,
    };

    try {
      const response = await fetch("/api/sendContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset();
        setSelectedSubject("financeiro");
      } else {
        const data = await response.json();
        alert(`Erro: ${data.message}`);
      }
    } catch {
      alert("Ocorreu um erro ao enviar a mensagem.");
    }

    setLoading(false);
  };
 
  return (
    <div id="fale-conosco">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">Enviando dados...</p>
          </div>
        </div>
      )}
      <div id="fale-conosco" className="min-h-screen relative">
        <div className="absolute inset-0 w-full h-full">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source
              src="https://estacaobemestar.jaboatao.pe.gov.br/wp-content/uploads/2018/05/Blue_Sky_and_Clouds_Timelapse_0892__Videvo.mov"
              type="video/mp4"
            />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

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
              fill="#004619"
            />
            <path
              opacity="0.66"
              d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
              fill="#004619"
            />
            <path
              d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
              fill="#004619"
            />
          </svg>
        </div>

        <div className="relative z-10 min-h-screen text-white p-8 flex items-center justify-center bg-opacity-30">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-7xl w-full py-12">
            <div className="w-full  md:w-1/2 2xl:h-[670px] lg:h-[680px] md:h-[740px] h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5114253262363!2d-34.925620124244986!3d-8.151115381647537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1dc7561cffd%3A0xe6fbfb0ef7cd1451!2sCentro%20Administrativo%20de%20Jaboat%C3%A3o%20dos%20Guararapes!5e0!3m2!1spt-BR!2sbr!4v1726165314278!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="w-full md:w-1/2 bg-[#00000088] p-4 rounded-lg shadow-md flex flex-col justify-between overflow-hidden">
              <h2 className="text-[40px] font-semibold">Fale Conosco</h2>

              <div>
                <p>
                  Instituto de Previdência dos Servidores do Município Jaboatão
                  dos Guararapes.
                  <br />
                  <br />
                  Celular: (81) 9 9756-0292
                  <br />
                  <br />
                  E-mails Institucionais:
                </p>
                <ul className="list-disc pl-4">
                  <li>presidencia@jaboataoprev.jaboatao.pe.gov.br</li>
                  <li>investimentos@jaboataoprev.jaboatao.pe.gov.br</li>
                  <li>jurídico@jaboataoprev.jaboatao.pe.gov.br</li>
                  <li>admfinanceiro@jaboataoprev.jaboatao.pe.gov.br</li>
                  <li>beneficios@jaboataoprev.jaboatao.pe.gov.br</li>
                </ul>
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full pt-8 pb-2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  className="p-2 rounded-[10px] bg-[#ffffff00] border-white border-[1px] text-white outline-none focus:ring-2 focus:ring-[#5872a3] w-full"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Seu E-mail"
                  className="p-2 rounded-[10px] bg-[#ffffff00] border-white border-[1px] text-white outline-none focus:ring-2 focus:ring-[#5872a3] w-full"
                  required
                />

                {/* Seleção do Assunto */}
                <div className="text-white">
                  <p className="text-lg font-semibold">Assunto:</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {Object.keys(emailDestinations).map((subject) => (
                      <label key={subject} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="subject"
                          value={subject}
                          checked={selectedSubject === subject}
                          onChange={() => setSelectedSubject(subject)}
                          className="accent-[#5872a3]"
                        />
                        {subject.charAt(0).toUpperCase() + subject.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Mensagem"
                  className="p-2 rounded-[10px] bg-[#ffffff00] border-white border-[1px] text-white outline-none focus:ring-2 focus:ring-[#5872a3] w-full"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#1e59a7] hover:bg-[#3279d6] rounded text-white font-semibold transition w-full"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
