import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPiggyBank, FaBookOpen, FaPhoneAlt } from "react-icons/fa";

const Card = ({
  title,
  icon,
  link,
  subtext,
  target,
}: {
  title: string;
  icon: React.ReactNode;
  link?: string; // Agora link é opcional
  subtext: string;
  target?: string;
}) => {
  return (
    <div className="group relative p-6 bg-[#0f2a5b] rounded-lg shadow-lg transition-transform transform hover:scale-105 min-h-72 flex items-center justify-center border-2 border-yellow-500">
      {link ? (
        <a
          href={link}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="block text-center"
        >
          <CardContent title={title} icon={icon} subtext={subtext} />
        </a>
      ) : (
        <div className="block text-center">
          <CardContent title={title} icon={icon} subtext={subtext} />
        </div>
      )}
    </div>
  );
};

const CardContent = ({
  title,
  icon,
  subtext,
}: {
  title: string;
  icon: React.ReactNode;
  subtext: string;
}) => (
  <>
    <div className="text-5xl text-[#c68e00] mb-4 flex justify-center">
      {icon}
    </div>

    <h5 className="text-xl font-medium text-[#f0b82a] mb-4 uppercase">
      {title}
    </h5>

    <div className="absolute inset-0 bg-[#0d1a4a] bg-opacity-100 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center transition-opacity duration-300 px-20">
      <p className="text-lg whitespace-pre-line">{subtext}</p>
    </div>
  </>
);

export default function CardGrid() {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] to-[#003470] py-20 text-center">
      <h2 className="text-5xl font-semibold text-[#173b7c] mb-14 uppercase">
        Serviços
      </h2>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 px-20">
        <Card
          title="Contra-Cheque"
          icon={<MdOutlineAttachMoney />}
          link="https://www.faciltecnologia.com.br/consigfacil/jaboatao/index_servidor.php"
          target="_blank"
          subtext="Com apenas alguns cliques você aposentado ou pensionista pode emitir seu contra-cheque, simular consignação e muito mais. Acesse agora!"
        />

        <Card
          title="Carta de Serviço"
          icon={<FaPiggyBank />}
          link="https://jaboatao.pe.gov.br/servicos-de-previdencia/"
          target="_blank"
          subtext="Página com todas as cartas de serviços do JaboatãoPrev."
        />
        <Card
          title="Certidão de Tempo de Contribuição"
          icon={<FaBookOpen />}
          link="./Requerimento-ctc"
          target="_blank"
          subtext="Solicite sua Certidão por Tempo de Contribuição, clicando aqui!"
        />
        <Card
          title="Nossos Telefones"
          icon={<FaPhoneAlt />}
          subtext={
            "Nossos telefones:\n\n Telefones fixos \n (81)3462-4855 \n (81) 3462-4619\n \n telefone celular \n (81)98743-2326"
          }
        />

        <Card
          title="Prova de Vida"
          icon={<FaInfoCircle />}
          link="https://jaboatao2024.provadevida.app.br/#/"
          target="_blank"
          subtext="Faça aqui sua prova de vida."
        />
      </div>
    </div>
  );
}

