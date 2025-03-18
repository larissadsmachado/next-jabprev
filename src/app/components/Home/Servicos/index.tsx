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
  link?: string;
  subtext: string;
  target?: string;
}) => {
  return (
    <div className="group relative p-6 bg-slate-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 min-h-72 flex items-center justify-center border-4 border-[#004619]">
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
    <div className="text-5xl text-[#004619] mb-4 flex justify-center">
      {icon}
    </div>

    <h5 className="text-xl font-medium text-[#004619] mb-4 uppercase">
      {title}
    </h5>

    <div className="absolute inset-0 bg-[#004619] bg-opacity-100 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center transition-opacity duration-300 px-20">
      <p className="text-lg whitespace-pre-line">{subtext}</p>
    </div>
  </>
);


export default function CardGrid() {
  return (
    <div
      id="servicos"
      className="flex flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#004619] text-center pb-36"
    >
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
            fill="#004619 "
          />
          <path
            opacity="0.66"
            d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
            fill="#004619 "
          />
          <path
            d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
            fill="#004619 "
          />
        </svg>
      </div>

      <h2 className="text-5xl font-semibold text-[#004619] mb-14 uppercase pt-20">
        Serviços
      </h2>

      <div className="2xl:w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-20 mx-auto text-center place-content-center">
        {[
          {
            title: "Contra-Cheque",
            icon: <MdOutlineAttachMoney />,
            link: "https://www.faciltecnologia.com.br/consigfacil/jaboatao/index_servidor.php",
            subtext:
              "Com apenas alguns cliques você aposentado ou pensionista pode emitir seu contra-cheque, simular consignação e muito mais. Acesse agora!",
            target: "_blank",
          },
          {
            title: "Carta de Serviço",
            icon: <FaPiggyBank />,
            link: "https://jaboatao.pe.gov.br/servicos-de-previdencia/",
            subtext: "Página com todas as cartas de serviços do JaboatãoPrev.",
            target: "_blank",
          },
          {
            title: "Certidão de Tempo de Contribuição",
            icon: <FaBookOpen />,
            link: "./Requerimento-ctc",
            subtext:
              "Solicite sua Certidão por Tempo de Contribuição, clicando aqui!",
            target: "_blank",
          },
          {
            title: "Nossos Telefones",
            icon: <FaPhoneAlt />,
            subtext:
              "Nossos telefones:\n\n Telefones fixos \n (81)3462-4855 \n (81) 3462-4619\n \n telefone celular \n (81)98743-2326",
            target: "_blank",
          },
          {
            title: "Prova de Vida",
            icon: <FaInfoCircle />,
            link: "https://jaboatao2024.provadevida.app.br/#/",
            subtext: "Faça aqui sua prova de vida.",
            target: "_blank",
          },
        ].map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            link={card.link}
            subtext={card.subtext}
            target={card.target}
          />
        ))}
      </div>
    </div>
  );
}
