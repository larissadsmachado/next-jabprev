"use client";
import DivisorDeForma from "../components/DivisorDeForma/divisor";
import FaleConosco from "../components/FaleConosco/inex";
import { GlobalWorkerOptions } from 'pdfjs-dist';




const Sobre = () => (
  <div id="sobre" 
  className="flex flex-col md:flex-row items-center mx-auto max-w-7xl p-6 h-auto py-32">
    <div className="flex-1">
      <h1 className="text-5xl font-bold mb-4 uppercase text-blue-900 leading-tight">
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
  <div id="equipe"
   className="flex flex-col items-center bg-gradient-to-b from-[#cee5ff] to-[#ffffff] w-full h-auto pb-32">
    <DivisorDeForma />
    <h1 className="text-5xl font-bold text-green-900 text-center mb-8 py-32">
      A EQUIPE DO JABOATÃOPREV
    </h1>
    <div className="grid grid-cols-3 text-green-900 text-xl text-center pb-32">
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

    <div className="flex items-center justify-center w-full max-w-4xl mx-auto">
      <div className="flex justify-center">
        <img
          src="/images/Instituicao/luci.jpeg"
          alt="Jaboatãoprev"
          className="w-80 max-w-md rounded-lg shadow-md"
        />
      </div>

      <div className="bg-white rounded-3xl p-10">
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
  className="flex flex-col items-center h-auto py-32 bg-gradient-to-b from-[#ffffff] to-[#003470]">

    
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
  return (
    <div className="flex flex-col">
      <Sobre />
      <MissaoVisaoValores />
      <Equipe />
      <Organograma/> 
      <FaleConosco/> 
    </div>
  );
};

export default Instituicao;
