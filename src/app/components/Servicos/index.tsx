import React from "react";
import { FaInfoCircle } from "react-icons/fa"; 
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaPiggyBank, FaBookOpen, FaPhoneAlt } from "react-icons/fa";

const Card = ({ title, icon, link, subtext }: { title: string; icon: React.ReactNode; link: string; subtext: string }) => {
  return (
    <div className="group relative p-6 bg-[#173b7c] rounded-lg shadow-lg transition-transform transform hover:scale-105 min-h-60 flex items-center justify-center">
      <a href={link} className="block text-center">
        <div className="text-5xl text-[#c68e00] mb-4 flex justify-center">{icon}</div>
        
        <h5 className="text-xl font-medium text-[#f0b82a] mb-4 uppercase">{title}</h5>

        <div className="absolute inset-0 bg-[#02051bac] bg-opacity-75 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center transition-opacity duration-300 px-20">
          <p className="text-lg">{subtext}</p>
        </div>
      </a>
    </div>
  );
};

export default function CardGrid() {
  return (
    <div className="bg-gradient-to-b from-[#ffffff] to-[#123070] py-20 text-center">
        
      <h2 className="text-5xl font-semibold text-[#173b7c] mb-14 uppercase">Serviços</h2>
      
      <div className="mx-auto grid grid-cols-3 gap-10 px-36">
        <Card title="Contra-Cheque" icon={<MdOutlineAttachMoney />} link="#card1" subtext="Com apenas alguns cliques você aposentado ou pensionista pode emitir seu contra-cheque, simular consignação e muito mais. Acesse agora!" />
        <Card title="Carta de Serviço" icon={<FaPiggyBank />} link="#card2" subtext="Página com todas as cartas de serviços do JaboatãoPrev." />
        <Card title="Certidão de Tempo de Contribuição" icon={<FaBookOpen />} link="#card3" subtext="Solicite sua Certidão por Tempo de Contribuição, clicando aqui!" />
        <Card title="Nossos Telefones" icon={<FaPhoneAlt />} link="#card4" subtext="Este é um subtexto sobre nossos telefones." />
        <Card title="Prova de Vida" icon={<FaInfoCircle />} link="#card5" subtext="Faça aqui sua prova de vida." />
      </div>
    </div>
  );
}
