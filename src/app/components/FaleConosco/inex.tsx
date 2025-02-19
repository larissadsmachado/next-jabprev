"use client";
import { useState } from "react";
import DivisorDeForma from "../DivisorDeForma/divisor";

const FaleConosco = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form[0] as HTMLInputElement).value,
      email: (form[1] as HTMLInputElement).value,
      message: (form[2] as HTMLTextAreaElement).value,
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
      } else {
        const data = await response.json();
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      alert("Ocorreu um erro ao enviar a mensagem.");
    }
    
    setLoading(false);
  };

  return (
    <div>
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
        <DivisorDeForma />
        <div className="relative z-10 min-h-screen text-white p-8 flex items-center justify-center bg-opacity-30">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-7xl w-full">
            <div className="w-full md:w-1/2 h-[670px] rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.5114253262363!2d-34.925620124244986!3d-8.151115381647537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aae1dc7561cffd%3A0xe6fbfb0ef7cd1451!2sCentro%20Administrativo%20de%20Jaboat%C3%A3o%20dos%20Guararapes!5e0!3m2!1spt-BR!2sbr!4v1726165314278!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2 bg-[#00000088] p-6 rounded-lg shadow-md flex flex-col justify-between overflow-hidden">
              <h2 className="text-[40px] font-semibold">Fale Conosco</h2>
              <br />
              <p>
                Instituto de Previdência dos Servidores do Município Jaboatão dos Guararapes.
                <br/><br />
                Celular: (81) 9 9756-0292
                <br/><br />
                E-mails Institucionais:
                <br/><br />
                <ul className="list-disc">
                  <li>presidencia@jaboataoprev.jaboatao.pe.gov.br
                  </li>
                  <li>investimentos@jaboataoprev.jaboatao.pe.gov.br
                  </li>
                  <li>jurídico@jaboataoprev.jaboatao.pe.gov.br
                  </li>
                  <li>admfinanceiro@jaboataoprev.jaboatao.pe.gov.br
                  </li>
                  <li>beneficios@jaboataoprev.jaboatao.pe.gov.br
                  </li>
                </ul>
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full pt-8 pb-2">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="p-2 rounded-[10px] bg-[#ffffff00] border-white border-[1px] text-white outline-none focus:ring-2 focus:ring-[#5872a3] w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Seu E-mail"
                  className="p-2 rounded-[10px] bg-[#ffffff00] border-white border-[1px] text-white outline-none focus:ring-2 focus:ring-[#5872a3] w-full"
                  required
                />
                <textarea
                  placeholder="Mensagem"
                  className="p-2 rounded-[10px] bg-[#ffffff00] border-white border-[1px] text-white outline-none focus:ring-2 focus:ring-[#5872a3] w-full"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#003476] hover:bg-[#2864b2] rounded text-white font-semibold transition w-full"
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