"use client";
import { useEffect, useState } from "react";
import DivisorDeForma from "../components/DivisorDeForma/divisor";
import FaleConosco from "../components/Home/FaleConosco/inex";

const Sobre = () => (
  <div
    id="sobre"
    className="flex flex-col md:flex-row items-center mx-auto max-w-7xl p-6 h-auto lg:py-32 py-10"
  >
    <div className="flex-1 text-center md:text-left">
      <h1 className="lg:text-5xl text-4xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        O que é Jaboatãoprev?
      </h1>
      <p className="text-[#122162] text-xl">
        É uma Autarquia, criada pela Lei Municipal nº108/2001 e alterações
        posteriores, que tem por objetivo assegurar aos servidores do município
        do Jaboatão dos Guararapes, e seus dependentes, os benefícios de
        aposentadoria e pensão por morte.
      </p>
    </div>
    <div className="flex-1 flex justify-center mt-4 md:mt-0">
      <img
        src="/images/Instituicao/fachada.jpeg"
        alt="Jaboatãoprev"
        className="w-80 max-w-md rounded-lg shadow-md"
      />
    </div>
  </div>
);



const MissaoVisaoValores = () => (
  <div id="missao"
   className="flex flex-col items-center h-auto py-32 bg-gradient-to-b from-[#ffffff] via-[#9ccef0] to-[#003470]">
    <div className="mx-auto max-w-6xl bg-white p-20 rounded-lg">
      <div className="text-center mb-8 ">
        <h2 className="text-5xl font-bold text-blue-900 drop-shadow-[2px_2px_0px_#facc15]">
          Nossa Missão
        </h2>
        <p className="text-gray-700 mt-2 text-xl">
          Fazer um gerenciamento de excelência, para garantir o cumprimento das
          obrigações previdenciárias do JaboatãoPrev.
        </p>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-5xl font-bold text-blue-900 drop-shadow-[2px_2px_0px_#facc15]">
          Nossa Visão
        </h2>
        <p className="text-gray-700 mt-2 text-xl">
          Ser reconhecida como uma Instituição de excelência, equilibrada
          financeira e atuarialmente.
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-5xl font-bold text-blue-900 drop-shadow-[2px_2px_0px_#facc15]">
          Nossos Valores
        </h2>
        <p className="text-gray-700 mt-2 text-xl">
          Privilegiar os princípios da transparência, probidade, ética e
          eficiência, observando o arcabouço normativo que rege o sistema
          previdenciário e a gestão pública; contribuindo com os órgãos de
          controle, para oferecer um serviço público de qualidade e honesto.
        </p>
      </div>
    </div>
  </div>
);

const Equipe = () => (
  <div
    id="equipe"
    className="flex flex-col items-center bg-gradient-to-b from-[#cee5ff] to-[#ffffff] w-full h-auto pb-32"
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
          fill="#003470"
        />
        <path
          opacity="0.66"
          d="M1468 62.22C1377 62.22 1313.6 38.5644 1209.8 22.3522C1152.6 13.4813 909.2 12.0538 701.8 62.22C494.4 112.386 518.4 27.1445 403.4 62.22C231.4 114.222 0 34.18 0 34.18V-6.40161H2000V30.8152C2000 30.8152 1943.6 11.9519 1815.8 11.9519C1620.4 12.0538 1551.4 62.22 1468 62.22Z"
          fill="#003470"
        />
        <path
          d="M1532.2 23.0659C1132.2 -35.5633 1000.2 89.8522 742 42.9489C484 -4.56626 484 -0.895566 369.6 14.6029C256 30.1014 264.6 39.3801 179.8 47.1294C57.2 58.5493 0 -6.40161 0 -6.40161H2000C2000 -6.40161 1980.2 35.3016 1832.8 42.643C1685.4 49.9844 1659.2 41.5214 1532.2 23.0659Z"
          fill="#003470"
        />
      </svg>
    </div>
    <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-green-900 text-center mb-8 lg:py-32 pt-20">
      A EQUIPE DO JABOATÃOPREV
    </h1>

    {/* Grid responsivo para os itens da equipe */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-green-900 text-xl text-center gap-8 pb-32">
      <div>
        <p>
          <strong>Mayara Lima</strong>
          <br />
          Gerente Administrativa e Financeiro
        </p>
        <p>
          <strong>Edson Silva</strong>
          <br />
          Coordenador da Contabilidade
        </p>
        <p>
          <strong>Katia Cyntia</strong>
          <br />
          Coordenadora Administrativo Financeiro
        </p>
        <p>
          <strong>Manuela Araújo</strong>
          <br />
          Coordenadora da Folha de Pagamento
        </p>
      </div>
      <div>
        <p>
          <strong>Pierre Leon</strong>
          <br />
          Gerente de Investimentos
        </p>
        <p>
          <strong>Ícaro Santos</strong>
          <br />
          Assessor de Investimentos
        </p>
        <p>
          <strong>Rafaela Bezerra</strong>
          <br />
          Gerente Jurídica
        </p>
        <p>
          <strong>Taís Cavalcante</strong>
          <br />
          Assessora Jurídica
        </p>
        <p>
          <strong>Julyana Porto</strong>
          <br />
          Assessora Jurídica
        </p>
      </div>
      <div>
        <p>
          <strong>Karla Ramires</strong>
          <br />
          Gerente de Benefícios
        </p>
        <p>
          <strong>Ângela Maria</strong>
          <br />
          Coordenadora de Benefícios
        </p>
        <p>
          <strong>Izabeli Cynthia</strong>
          <br />
          Assessora da Presidente
        </p>
        <p>
          <strong>Mayara Mendes</strong>
          <br />
          Coordenadora de Planejamento, Monitoramento e Controle
        </p>
      </div>
    </div>

    {/* Seção com imagem e descrição */}
    <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-4xl mx-auto gap-8">
      <div className="flex justify-center w-full lg:w-1/2">
        <img
          src="/images/Instituicao/luci.jpeg"
          alt="Jaboatãoprev"
          className="w-80 max-w-md rounded-lg shadow-md"
        />
      </div>

      <div className="bg-white rounded-3xl p-10 w-full lg:w-1/2">
        <h2 className="text-2xl font-semibold text-cyan-400 uppercase text-center">
          Luci Lopes
        </h2>
        <h3 className="text-xl text-slate-700 text-center">
          Presidente do JaboatãoPrev
        </h3>
        <p className="text-lg text-slate-900 text-justify">
          Lucileide Ferreira Lopes, formada em Direito pela Universidade
          Paulista, em São Paulo, com MBA em Gestão de Ensino Superior pela
          Faculdade Maurício de Nassau. Iniciou vida pública em 2009, na
          Controladoria Geral do Estado de Pernambuco, onde atuou na área de
          orientação ao gestor público até o final de 2015; quando então, foi
          convidada a assumir a Presidência do RPPS de Gravatá, por ocasião da
          Intervenção Estadual. Em 2017 assumiu a Ouvidoria Geral do Município
          do Jaboatão dos Guararapes e em 2019, a Presidência do JaboataoPrev.
          Possui certificação de Dirigente de RPPS pelo Instituto TOTUM.
        </p>
      </div>
    </div>
  </div>
);



const pdfUrl = "/Pdf/Organograma-2025-Site.pdf";

const Organograma = () => (

  <div id="organograma"
  className="flex flex-col items-center h-auto py-32 bg-gradient-to-b from-[#ffffff] to-[#053D7D]">

    
    <div className="mx-auto max-w-6xl p-20 rounded-lg">

    <h2 className="text-2xl text-slate-500 text-center pb-10">
          O documento publicado. Caso não consiga abrir o
          arquivo,{" "}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            clique aqui para fazer o download do arquivo em PDF.
          </a>
        </h2>

    </div>
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
      <div className="flex justify-center">
        <img
          src="/images/Instituicao/ornograma.png"
          alt="Jaboatãoprev"
        />
      </div>
      </div>
  </div>
);

const Instituicao = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita renderizar no servidor e previne erros
  return (
    <div className="flex flex-col">
      <DivisorDeForma />
      <Sobre />
      <MissaoVisaoValores />
      <Equipe />
      <Organograma/> 
      <FaleConosco/> 
    </div>
  );
};

export default Instituicao;
