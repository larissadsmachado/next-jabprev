"use client";

import React from "react";
import Image from "next/image";

const Servicos = () => (
  <div className="mx-auto max-w-6xl p-6 h-auto py-20">
    <div>
      <h1 className="text-3xl font-bold mb-4 uppercase text-blue-900 leading-tight">
        Quais os serviços que o Instituto de Previdência dos Servidores Públicos
        do Município do Jaboatão dos Guararapes oferece?
      </h1>
      <ul className="list-disc pl-5 text-[#122162] text-xl">
        <li className="py-2">
          Aposentadoria por idade e tempo de contribuição;
        </li>
        <li className="pb-2">Aposentadoria compulsória;</li>
        <li className="pb-2">Aposentadoria por incapacidade permanente;</li>
        <li className="pb-2">
          Aposentadoria especial por exposição a agente insalubre;
        </li>
        <li className="pb-2">Aposentadoria especial do magistério;</li>
        <li className="pb-2">Aposentadoria do deficiente físico;</li>
        <li>Pensão por morte.</li>
      </ul>
    </div>
  </div>
);

const Aposentadorias = () => (
  <div>
    <div className="max-w-6xl mx-auto h-auto p-6">
      <div>
        <h1 className="text-3xl font-bold mb-4 uppercase text-blue-900 leading-tight border-b-4 border-blue-900 inline-block">
          Aposentadorias Comuns
        </h1>

        <h2 className="text-xl font-bold mb-4 uppercase text-blue-900 leading-tight pt-5">
          Aposentadoria por incapacidade (Art. 8º da Lei Complementar nº
          40/2021)
        </h2>

        <p className="text-[#122162] text-justify text-lg">
          O benefício de aposentadoria por incapacidade permanente deve ser
          mantido enquanto subsistir a situação de invalidez que lhe deu causa,
          devendo o segurado menor de 65 (sessenta e cinco) anos, sob pena de
          suspensão do benefício, submeter-se à avaliação periódica a cada 05
          (cinco) anos ou a critério do JABOATÃO-PREV para aferição da
          permanência da condição de incapaz para o exercício do cargo.
        </p>

        <h3 className="text-[#122162] font-bold mt-6 text-xl">
          Proventos calculados conforme abaixo:
        </h3>

        <ul className="list-none text-[#122162] space-y-2 text-lg">
          <li>
            – Incapacidade decorrentes de Acidente de trabalho/ doença
            profissional ou do trabalho/ doença grave
          </li>
          <li className="pl-4">
            – Proventos – 100% da média aritmética das 90% maiores
            contribuições, definida na forma prevista no caput e no §1º. (Art.
            14, §5º §6º);
          </li>
          <li>– Outras incapacidades – regra geral</li>
          <li className="pl-4">
            – Proventos: 60% +2% para cada ano que exceder o tempo de
            contribuição de 20 – da média aritmética das 90% maiores
            contribuições, definida na forma prevista no caput e no §1º. (Art.
            14, §5º §6º);
          </li>
        </ul>

        <p className="text-[#122162] italic text-center mt-6 font-semibold text-xl py-10">
          SEM PARIDADE
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 uppercase text-blue-900 leading-tight pt-5">
          Aposentadoria compulsória (Art. 9º da Lei Complementar nº 40/2021)
        </h2>
        <p className="text-[#122162] text-justify text-lg">
          Homem ou mulher – 75 (setenta e cinco) anos de idade.
          <br />
          <br />
          Proventos calculados pela média aritmética + 2% por ano que exceder 20
          anos de contribuição multiplicado pelo resultado da divisão do tempo
          de contribuição por 20 – (art. 14 §7º)
        </p>
        <p className="text-[#122162] italic text-center mt-6 font-semibold text-xl py-10">
          SEM PARIDADE
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 uppercase text-blue-900 leading-tight pt-5">
          Aposentadoria voluntária por idade e tempo de contribuição (Art. 10º
          da Lei Complementar nº 40/2021)
        </h2>
        <p className="text-[#122162] text-justify text-lg pb-9">
          Requisitos a preencher:
        </p>

        <table className="w-full">
          <thead>
            <tr>
              <th
                colSpan={2}
                className="text-center py-2 text-black bg-[#b8cce4] border border-black"
              >
                <b>REGRA PERMANENTE</b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center py-2 bg-[#b8cce4] border border-black">
                HOMEM
              </td>
              <td className="text-center py-2 bg-[#e5b8b7] border border-black">
                MULHER
              </td>
            </tr>
            <tr>
              <td className="text-center py-2 bg-[#b8cce4] border border-black">
                64 anos de idade
              </td>
              <td className="text-center py-2 bg-[#e5b8b7] border border-black">
                61 anos de idade
              </td>
            </tr>
            <tr>
              <td
                className="text-center py-2 bg-[#fbd4b4] border border-black"
                colSpan={2}
              >
                25 anos de contribuição
              </td>
            </tr>
            <tr>
              <td
                className="text-center py-2 bg-[#fbd4b4] border border-black"
                colSpan={2}
              >
                10 anos de serviço público
              </td>
            </tr>
            <tr>
              <td
                className="text-center py-2 bg-[#fbd4b4] border border-black"
                colSpan={2}
              >
                5 anos no cargo
              </td>
            </tr>
          </tbody>
        </table>

        <Image
  src="/images/Perguntas/calculo.png"
  alt="Prêmio 1"
  className="pt-12"
   width={500}  // Largura relativa, ajuste conforme necessário
  height={333} // Altura relativa, ajuste conforme necessário
/>

        <p className="text-[#122162] text-lg mt-4">
          Proventos: 60% +2% para cada ano que exceder o tempo de contribuição
          de 20 – da média aritmética das 90% maiores contribuições, definida na
          forma prevista no caput e no §1º. (Art. 14, §5º §6º);
        </p>
        <p className="text-[#122162] italic text-center mt-6 font-semibold text-xl py-10">
          SEM PARIDADE
        </p>
      </div>
    </div>
  </div>
);

const AposentadoriasEspeciais = () => (
  <div>
    <div className="max-w-6xl mx-auto h-auto p-6">
      <div>
        <h1 className="text-3xl font-bold mb-4 uppercase text-blue-900 leading-tight border-b-4 border-blue-900 inline-block">
          Aposentadorias Especiais
        </h1>

        <h2 className="text-xl font-bold mb-4 uppercase text-blue-900 leading-tight pt-5">
          Aposentadoria por incapacidade (Art. 8º da Lei Complementar nº
          40/2021)
        </h2>

        <span className="text-xl font-bold text-blue-900">
          Requisitos a preencher:
        </span>
        <table className="table-auto w-full border-collapse border border-black">
          <thead>
            <tr className="text-center">
              <th className="bg-blue-200 py-2 border border-black">HOMEM</th>
              <th className="bg-red-200 py-2 border border-black">MULHER</th>
              <th className="bg-yellow-200 py-2 border border-black">
                TIPO DE DEFICIÊNCIA
              </th>
              <th className="bg-yellow-200 py-2 border border-black">
                PROVENTOS
              </th>
            </tr>
          </thead>

          <tbody className="bg-gray-50">
            <tr className="text-center">
              <td className="border py-4">25 anos de contribuição</td>
              <td className="border py-4">20 anos de contribuição</td>
              <td className="border py-4">Grave</td>
              <td rowSpan={3} className="border py-4 px-10">
                100% da média aritmética das 90% maiores contribuições, definida
                na forma prevista no caput e no §1º. (Art. 14, §5º §6º){" "}
              </td>
            </tr>
            <tr className="text-center">
              <td className="border py-4">29 anos de contribuição</td>
              <td className="border py-4">24 anos de contribuição</td>
              <td className="border py-4">Moderada</td>
            </tr>
            <tr className="text-center">
              <td className="border py-4">33 anos de contribuição</td>
              <td className="border py-4">28 anos de contribuição</td>
              <td className="border py-4">Leve</td>
            </tr>
            <tr className="text-center">
              <td className="border py-4">60 idade</td>
              <td className="border py-4">55 idade</td>
              <td className="border py-4 px-10">
                Independentemente do grau de deficiência, mas tendo cumprido o
                tempo mínimo de 15 anos de contribuição.
              </td>
              <td className="border py-4 px-10">
                70% + 2% para cada ano que exceder o tempo de contribuição de 20
                – da média aritmética das 90% maiores contribuições, definida na
                forma prevista no caput e no §1º. (Art. 14, §5º §6º);{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="py-12">
        <h2 className="text-xl font-bold text-blue-900 pt-10">
          Aposentadoria por insalubridade (Art. 12 da Lei Complementar nº
          40/2021)
        </h2>
        <p className="text-justify leading-normal pt-3">
          O servidor cujas atividades sejam exercidas com efetiva exposição a
          agentes nocivos químicos, físicos e biológicos prejudiciais à saúde,
          ou a associação desses agentes, vedada a caracterização por categoria
          profissional ou ocupação, será aposentado voluntariamente, desde que
          observados, cumulativamente, os seguintes requisitos:
        </p>
        <table className="table-auto w-full border-collapse border border-black">
          <thead>
            <tr>
              <th className="bg-blue-200 py-2 border border-black text-center text-black font-bold">
                HOMEM
              </th>
              <th className="bg-red-200 py-2 border border-black text-center text-black font-bold">
                MULHER
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-yellow-200 py-4 border text-center" colSpan={2}>
                60 anos de idade
              </td>
            </tr>
            <tr>
              <td className="bg-yellow-200 py-4 border text-center" colSpan={2}>
                25 anos de contribuição e de efetiva exposição
              </td>
            </tr>
            <tr>
              <td className="bg-yellow-200 py-4 border text-center" colSpan={2}>
                10 anos de efetivo serviço público
              </td>
            </tr>
            <tr>
              <td className="bg-yellow-200 py-4 border text-center" colSpan={2}>
                05 anos no cargo efetivo para concessão da aposentadoria
              </td>
            </tr>
          </tbody>
        </table>

        <p className="text-[#122162] text-lg mt-4">
          Proventos: 60% +2% para cada ano que exceder o tempo de contribuição
          de 20 – da média aritmética das 90% maiores contribuições, definida na
          forma prevista no caput e no §1º. (Art. 14, §5º §6º);
        </p>
        <p className="text-[#122162] italic text-center mt-6 font-semibold text-xl">
          SEM PARIDADE
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 text-blue-900">
          Aposentadoria Especial de Professor (Art. nº 13 da Lei Complementar nº
          40/2021)
        </h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 bg-blue-300 p-2 text-center">
                HOMEM
              </th>
              <th className="border border-gray-400 bg-red-300 p-2 text-center">
                MULHER
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 bg-blue-300 p-2 text-center">
                59 anos de idade
              </td>
              <td className="border border-gray-400 bg-red-300 p-2 text-center">
                56 anos de idade
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="border border-gray-400 bg-orange-200 p-2 text-center"
              >
                25 anos de contribuição exclusivamente em efetivo exercício das
                funções de magistério, na educação infantil, no ensino
                fundamental ou médio
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="border border-gray-400 bg-orange-200 p-2 text-center"
              >
                10 anos de efetivo exercício de serviço público
              </td>
            </tr>
            <tr>
              <td
                colSpan={2}
                className="border border-gray-400 bg-orange-200 p-2 text-center"
              >
                05 anos no cargo efetivo em que for concedida a aposentadoria
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-lg font-semibold text-blue-900">
          Proventos:{" "}
          <span className="font-normal">
            60% + 2% para cada ano que exceder o tempo de contribuição de 20 -
            da média aritmética das 90% maiores contribuições.
          </span>
        </p>
        <p className="text-[#122162] italic text-center mt-6 font-semibold text-xl py-10">
          SEM PARIDADE
        </p>
      </div>
    </div>
  </div>
);

const Regras = () => (
  <div>
    <div className="max-w-6xl mx-auto h-auto p-6">
      <h1 className="text-3xl font-bold mb-4 uppercase text-blue-900 leading-tight border-b-4 border-blue-900 inline-block">
        Regras de transição
      </h1>

      <h2 className="text-xl font-bold mb-4 uppercase text-blue-900 leading-tight pt-5">
        I - Por pontos (Art. 17 da Lei Complementar nº 40/2021)
      </h2>

      <h3 className="text-lg text-blue-900 font-semibold">Requisitos:</h3>

      <ul className="mt-2 text-justify space-y-2 text-lg text-blue-900">
        <li>
          ➤ Ter ingressado no Serviço Público antes de 17/08/2021 e antes de
          31/12/2003 para ter direito à paridade;
        </li>
        <li>
          ➤ 35 anos de Tempo de Contribuição para homem e 30 anos para mulher
          (redução de 5 anos para professor);
        </li>
        <li>
          ➤ Idade mínima de 61 anos para homem e 56 anos para mulher (a partir
          de 01/01/2022 – 62 anos para homem e 57 anos para mulher - redução de
          5 anos para professor);
        </li>
        <li>➤ 20 anos de serviço público;</li>
        <li>➤ 5 anos no cargo;</li>
        <li>➤ Pontuação mínima conforme tabela.</li>
      </ul>

      {/* Tabela de pontuação Homem */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full border border-collapse border-gray-500">
          <tbody>
            {/* Linha 1 */}
            <tr className="bg-blue-200 text-blue-900">
              <td
                colSpan={7}
                className="border border-gray-500 px-4 py-2 text-center font-bold"
              >
                PONTUAÇÃO HOMEM
              </td>
            </tr>

            {/* Linha 2 */}
            <tr className="bg-blue-200 text-blue-900">
              <td className="border border-gray-500 px-4 py-2"></td>
              <td
                colSpan={3}
                className="border border-gray-500 px-4 py-2 text-center"
              >
                HOMEM
              </td>
              <td
                colSpan={3}
                className="border border-gray-500 px-4 py-2 text-center"
              >
                PROFESSOR
              </td>
            </tr>

            {/* Linha 3 */}
            <tr className="bg-blue-200 text-blue-900">
              <td className="border border-gray-500 px-4 py-2">ANO</td>
              <td className="border border-gray-500 px-4 py-2">
                TEMPO DE CONTRIBUIÇÃO MÍNIMO
              </td>
              <td className="border border-gray-500 px-4 py-2">IDADE MÍNIMA</td>
              <td className="border border-gray-500 px-4 py-2">
                SOMATÓRIO DE PONTOS
              </td>
              <td className="border border-gray-500 px-4 py-2">
                TEMPO DE CONTRIBUIÇÃO MÍNIMO
              </td>
              <td className="border border-gray-500 px-4 py-2">IDADE MÍNIMA</td>
              <td className="border border-gray-500 px-4 py-2">
                SOMATÓRIO DE PONTOS
              </td>
            </tr>

            {/* Dados da tabela */}
            <tr className="text-center bg-blue-100">
              <td className="border border-gray-500 px-4 py-2">2021</td>
              <td rowSpan={10} className="border border-gray-500 px-4 py-2">
                35
              </td>
              <td className="border border-gray-500 px-4 py-2">61</td>
              <td className="border border-gray-500 px-4 py-2">96</td>
              <td rowSpan={10} className="border border-gray-500 px-4 py-2">
                30
              </td>
              <td className="border border-gray-500 px-4 py-2">56</td>
              <td className="border border-gray-500 px-4 py-2">91</td>
            </tr>
            {[
              {
                ano: 2022,
                idadeHomem: 62,
                pontosHomem: 97,
                idadeProf: 57,
                pontosProf: 92,
              },
              { ano: 2023, pontosHomem: 98, pontosProf: 93 },
              { ano: 2024, pontosHomem: 99, pontosProf: 94 },
              { ano: 2025, pontosHomem: 100, pontosProf: 95 },
              { ano: 2026, pontosHomem: 101, pontosProf: 96 },
              { ano: 2027, pontosHomem: 102, pontosProf: 97 },
              { ano: 2028, pontosHomem: 103, pontosProf: 98 },
              { ano: 2029, pontosHomem: 104, pontosProf: 99 },
              { ano: 2030, pontosHomem: 105, pontosProf: 100 },
            ].map(({ ano, idadeHomem, pontosHomem, idadeProf, pontosProf }) => (
              <tr key={ano} className="text-center bg-blue-100">
                <td className="border border-gray-500 px-4 py-2">{ano}</td>
                <td className="border border-gray-500 px-4 py-2">
                  {idadeHomem ?? ""}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {pontosHomem}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {idadeProf ?? ""}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {pontosProf}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-xl text-blue-900 py-10">
          Obs: Para ter paridade tem que ter no mínimo 64 anos e se professor 59
          anos.
        </p>
      </div>

      {/* Tabela de pontuação Mulher */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full border border-collapse border-gray-500">
          <tbody>
            {/* Linha 1 */}
            <tr className="bg-[#E5B8B7] text-red-950">
              <td
                colSpan={7}
                className="border border-gray-500 px-4 py-2 text-center font-bold"
              >
                PONTUAÇÃO MULHER
              </td>
            </tr>

            {/* Linha 2 */}
            <tr className="bg-[#E5B8B7] text-red-950">
              <td className="border border-gray-500 px-4 py-2">ANO</td>
              <td className="border border-gray-500 px-4 py-2">
                TEMPO DE CONTRIBUIÇÃO MÍNIMO
              </td>
              <td className="border border-gray-500 px-4 py-2">IDADE MÍNIMA</td>
              <td className="border border-gray-500 px-4 py-2">
                SOMATÓRIO DE PONTOS
              </td>
              <td className="border border-gray-500 px-4 py-2">
                TEMPO DE CONTRIBUIÇÃO MÍNIMO
              </td>
              <td className="border border-gray-500 px-4 py-2">IDADE MÍNIMA</td>
              <td className="border border-gray-500 px-4 py-2">
                SOMATÓRIO DE PONTOS
              </td>
            </tr>

            {/* Dados da tabela */}
            {[
              {
                ano: 2021,
                idadeMulher: 56,
                pontosMulher: 86,
                idadeProf: 51,
                pontosProf: 81,
              },
              {
                ano: 2022,
                idadeMulher: 57,
                pontosMulher: 87,
                idadeProf: 52,
                pontosProf: 82,
              },
              { ano: 2023, pontosMulher: 88, pontosProf: 83 },
              { ano: 2024, pontosMulher: 89, pontosProf: 84 },
              { ano: 2025, pontosMulher: 90, pontosProf: 85 },
              { ano: 2026, pontosMulher: 91, pontosProf: 86 },
              { ano: 2027, pontosMulher: 92, pontosProf: 87 },
              { ano: 2028, pontosMulher: 93, pontosProf: 88 },
              { ano: 2029, pontosMulher: 94, pontosProf: 89 },
              { ano: 2030, pontosMulher: 95, pontosProf: 90 },
              { ano: 2031, pontosMulher: 96, pontosProf: 91 },
              { ano: 2032, pontosMulher: 97, pontosProf: 92 },
              { ano: 2033, pontosMulher: 98, pontosProf: 92 },
              { ano: 2034, pontosMulher: 99, pontosProf: 92 },
              { ano: 2035, pontosMulher: 100, pontosProf: 92 },
            ].map(
              (
                { ano, idadeMulher, pontosMulher, idadeProf, pontosProf },
                index
              ) => (
                <tr key={ano} className="text-center bg-[#E5B8B7] text-red-950">
                  <td className="border border-gray-500 px-4 py-2">{ano}</td>
                  {index === 0 && (
                    <td
                      rowSpan={15}
                      className="border border-gray-500 px-4 py-2"
                    >
                      30
                    </td>
                  )}
                  <td className="border border-gray-500 px-4 py-2">
                    {idadeMulher ?? ""}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {pontosMulher}
                  </td>
                  {index === 0 && (
                    <td
                      rowSpan={15}
                      className="border border-gray-500 px-4 py-2"
                    >
                      25
                    </td>
                  )}
                  <td className="border border-gray-500 px-4 py-2">
                    {idadeProf ?? ""}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">
                    {pontosProf}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <p className="text-xl text-red-900 py-10">
          Obs: Para ter paridade tem que ter no mínimo 64 anos e se professor 59
          anos.
        </p>
      </div>

      {/* II – Com pedágio */}
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800">
          II – Com pedágio (Art. 18 da Lei Complementar nº 40 da Lei
          Complementar nº 40/2021)
        </h2>

        <h3 className="text-lg font-semibold text-gray-700 mt-4">
          Requisitos:
        </h3>

        <ul className="list-disc list-inside text-gray-700">
          <li>
            Ter ingressado no Serviço Público antes de 17/08/2021 e antes de
            31/12/2003 para ter direito à paridade;
          </li>
          <li>
            35 de TC para homem e 30 de TC se mulher (redução de 05 anos para
            professor);
          </li>
          <li>
            Idade mínima de 60 para homem e 55 se mulher (redução de 05 anos
            para professor);
          </li>
          <li>20 anos de serviço público;</li>
          <li>05 anos no cargo;</li>
          <li>
            Pedágio de 100% do tempo que faltava para completar TC mínimo em
            17/08/2021;
          </li>
        </ul>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-collapse border-gray-500">
            <tbody>
              {/* Cabeçalho */}
              <tr className="bg-gray-200 text-gray-800 font-bold text-center">
                <td className="border border-gray-500 px-4 py-2">HOMEM</td>
                <td className="border border-gray-500 px-4 py-2">MULHER</td>
                <td className="border border-gray-500 px-4 py-2">PROFESSOR</td>
                <td className="border border-gray-500 px-4 py-2">PROFESSORA</td>
              </tr>

              {/* Idade */}
              <tr className="text-center bg-blue-100 text-gray-800">
                <td className="border border-gray-500 px-4 py-2">60 anos</td>
                <td className="border border-gray-500 px-4 py-2 bg-red-100">
                  57 anos
                </td>
                <td className="border border-gray-500 px-4 py-2">55 anos</td>
                <td className="border border-gray-500 px-4 py-2 bg-red-100">
                  52 anos
                </td>
              </tr>

              {/* Tempo de Contribuição */}
              <tr className="text-center bg-blue-100 text-gray-800">
                <td className="border border-gray-500 px-4 py-2">35 anos</td>
                <td className="border border-gray-500 px-4 py-2 bg-red-100">
                  30 anos
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  30 anos de efetivo exercício do magistério
                </td>
                <td className="border border-gray-500 px-4 py-2 bg-red-100">
                  25 anos de efetivo exercício do magistério
                </td>
              </tr>

              {/* Pedágio */}
              <tr className="text-center bg-blue-100 text-gray-800">
                <td className="border border-gray-500 px-4 py-2">
                  100% do tempo que faltava para atingir os 35 anos (Na data da
                  publicação da lei)
                </td>
                <td className="border border-gray-500 px-4 py-2 bg-red-100">
                  100% do tempo que faltava para atingir os 30 anos (Na data da
                  publicação da lei)
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  100% do tempo que faltava para atingir os 30 anos (Na data da
                  publicação da lei)
                </td>
                <td className="border border-gray-500 px-4 py-2 bg-red-100">
                  100% do tempo que faltava para atingir os 25 anos (Na data da
                  publicação da lei)
                </td>
              </tr>

              {/* Tempo de serviço público */}
              <tr className="text-center bg-orange-100 text-gray-800">
                <td colSpan={4} className="border border-gray-500 px-4 py-2">
                  20 anos
                </td>
              </tr>

              {/* Exercício no cargo */}
              <tr className="text-center bg-orange-100 text-gray-800">
                <td colSpan={4} className="border border-gray-500 px-4 py-2">
                  05 anos
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* III – Por insalubridade */}
      <div className="mt-20">
        <h2 className="text-xl font-bold text-gray-800">
          III – Por insalubridade (Art. 19 da Lei Complementar nº 40 da Lei
          Complementar nº 40/2021)
        </h2>

        <p className="text-gray-700 mt-4">
          O servidor que tenha ingressado no serviço público, com vinculação ao
          RPPS, até a data da entrada em vigor desta Lei Complementar, cujas
          atividades tenham sido exercidas com efetiva exposição a agentes
          nocivos químicos, físicos e biológicos prejudiciais à saúde, ou a
          associação desses agentes, vedada a caracterização por categoria
          profissional ou ocupação, poderá aposentar-se desde que observados,
          cumulativamente, os seguintes requisitos:
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full border border-collapse border-gray-500">
            <thead>
              <tr className="bg-gray-300 text-gray-800 font-bold text-center">
                <th className="border border-gray-500 px-4 py-2 w-1/2">
                  HOMEM
                </th>
                <th className="border border-gray-500 px-4 py-2 w-1/2">
                  MULHER
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-orange-200 text-gray-800">
                <td
                  colSpan={2}
                  className="border border-gray-500 px-4 py-2 text-center"
                >
                  Somatório da idade e do tempo de contribuição equivalente a 86
                  anos
                </td>
              </tr>
              <tr className="bg-orange-200 text-gray-800">
                <td
                  colSpan={2}
                  className="border border-gray-500 px-4 py-2 text-center"
                >
                  25 anos de contribuição e de efetiva exposição
                </td>
              </tr>
              <tr className="bg-orange-200 text-gray-800">
                <td
                  colSpan={2}
                  className="border border-gray-500 px-4 py-2 text-center"
                >
                  20 anos de efetivo exercício no serviço público
                </td>
              </tr>
              <tr className="bg-orange-200 text-gray-800">
                <td
                  colSpan={2}
                  className="border border-gray-500 px-4 py-2 text-center"
                >
                  05 anos no cargo efetivo em que for concedida a aposentadoria
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-gray-700 font-semibold mt-4">
          <span className="font-bold">Proventos:</span> 60% da Média aritmética
          + 2% por ano que exceder 20 anos de contribuição
        </p>

        <h3 className="text-xl font-semibold text-sky-600 mt-6">
          Quem tem direito a aposentadoria por incapacidade permanente?
        </h3>

        <p className="text-gray-700 mt-2 text-xl">
          Tem direito à aposentadoria por invalidez o servidor que cumprir as
          seguintes exigências constitucionais:
        </p>

        <div className="grid grid-cols-2 gap-28 mt-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-600">
              Ingressou no serviço público
            </h2>
            <br />
            <h2 className="text-lg font-semibold text-gray-500">
              ATÉ 31/12/2003
            </h2>
            <br />
            <p className="text-lg text-gray-700">
              Regra: Art. 40, § 1º, I da CF com os benefícios do art. 6° – A da
              EC nº 41/03. <br />
              <br />
              Proventos: regra geral – proporcionais à última remuneração.{" "}
              <br /> <br />
              Exceção: acidente de trabalho, moléstia profissional e doença
              grave constante do rol do § 6º, do art. 18, da Lei 108/2001 –
              proventos integrais da última remuneração.
              <br /> <br />
              Reajuste: paridade
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-600">
              Ingressou no serviço público a partir
            </h2>
            <br />
            <h2 className="text-lg font-semibold text-gray-500">
              DE 01/01/2004
            </h2>
            <br />
            <p className="text-lg text-gray-700">
              Regra: Art. 40§ 1º, I da CF
              <br />
              <br />
              Proventos: regra gral – proporcionais à média aritmética. <br />{" "}
              <br />
              Exceção: acidente de trabalho, moléstia profissional e doença
              grave constante do rol do § 6º, do art. 18, da Lei 108/2001 –
              proventos integrais da média aritmética.
              <br /> <br />
              Reajuste: RGPS
            </p>
          </div>
        </div>

        <p className="text-sky-600 mt-10 text-xl font-semibold">
          Quem tem direito a aposentadoria especial do magistério?
        </p>

        <p className="text-gray-700 mt-2 text-xl">
          Tem direito a aposentadoria especial do magistério o servidor que
          cumprir as seguintes exigências constitucionais:
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 text-center my-14">
          (Art. 40, §5º da CF ) – Regra permanente
        </h2>

        <div className="grid grid-cols-2 gap-28 mt-10">
          <div>
            <br />
            <h2 className="text-2xl font-semibold text-gray-500">Se mulher</h2>
            <br />
            <p className="text-lg text-gray-700">
              Tempo de contribuição*: 25 anos <br /> <br />
              Tempo mínimo de carreira: 10 anos <br /> <br />
              Idade: 50 anos <br /> <br />
              Tempo mínimo no cargo: 5 anos <br /> <br />
              Proventos: integralidade da média + RGPS <br /> <br />
            </p>
          </div>

          <div>
            <br />
            <h2 className="text-2xl font-semibold text-gray-500">Se homem</h2>
            <br />
            <p className="text-lg text-gray-700">
              Tempo de contribuição*: 30 anos
              <br /> <br />
              Tempo mínimo de carreira: 10 anos <br /> <br />
              Idade: 55 anos
              <br /> <br />
              Tempo mínimo no cargo: 5 anos <br /> <br />
              Proventos: integralidade da média + RGPS <br /> <br />
            </p>
          </div>
        </div>

        <p className="text-gray-600 mt-2 text-xl">
          *O tempo de contribuição deve ser comprovadamente na função de
          professor, gestor escolar (diretor), coordenador ou assessor escolar
          (esses últimos, desde que estejam lotados em unidade escolar)
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 text-center my-14">
          (Art. 6º, incisos I a IV, da EC nº. 41/03) – Regra transitória – quem
          ingressou no serviço público até 31/12/2003
        </h2>

        <div className="grid grid-cols-2 gap-28 mt-10">
          <div>
            <br />
            <h2 className="text-2xl font-semibold text-gray-500">Se mulher</h2>
            <br />
            <p className="text-lg text-gray-700">
              Tempo de contribuição no magistério: 25 anos <br />
              <br />
              Idade: 50 anos
              <br />
              <br />
              Tempo mínimo de serviço publico: 20 anos
              <br />
              <br />
              Tempo mínimo de carreira: 10 anos
              <br />
              <br />
              Tempo mínimo no cargo: 5 anos
              <br />
              <br />
              Proventos: integrais + paridade
            </p>
          </div>

          <div>
            <br />
            <h2 className="text-2xl font-semibold text-gray-500">Se homem</h2>
            <br />
            <p className="text-lg text-gray-700">
              Tempo de contribuição no magistério: 30 anos <br />
              <br />
              Idade: 55 anos
              <br />
              <br />
              Tempo mínimo de serviço publico: 20 anos
              <br />
              <br />
              Tempo mínimo de carreira: 15 anos
              <br />
              <br />
              Tempo mínimo no cargo: 10 anos
              <br />
              <br />
              Proventos: integrais + paridade
            </p>
          </div>
        </div>

        <p className="text-sky-600 mt-10 text-xl font-semibold">
          Quem tem direito a aposentadoria especial do magistério?
        </p>

        <p className="text-gray-600 mt-2 text-xl">
          Tem direito à aposentadoria especial o servidor que laborou em
          exposição, de forma habitual e permanente, a agentes nocivos
          prejudiciais à saúde ou à integridade física, e desde que cumpram os
          requisitos estabelecidos no art. 57 da Lei Federal nº 8.213/91 c/c o
          Decreto Municipal nº 157/2015
        </p>

        <p className="text-sky-600 mt-10 text-xl font-semibold">
          Qual a documentação que deve ser apresentada para solicitar o
          benefício?
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-2 text-xl">
          <li>
            Cópia do Documento de Identidade; <strong>(OBRIGATÓRIO)</strong>
          </li>
          <li>Cópia do CPF;</li>
          <li>
            Cópia do Cartão ou papel timbrado do Banco Santander contendo
            agência e conta corrente ou salário. (mesmo que tenha portabilidade
            com outra instituição Bancária);
          </li>
          <li>Cópia do Último Contracheque;</li>
          <li>Cópia do Comprovante de Residência (em nome do requerente);</li>
          <li>Cópia da Certidão de Casamento / nascimento;</li>
          <li>
            Declaração de Nada Consta de Jaboatão. Solicitar na ouvidoria
            (contato: 3476.6066 / 08000818899. Atentar para validade deste
            documento que é de apenas 30 Dias.
          </li>
          <li>
            Declaração de Nada Consta do INSS. Solicitar no site MEU INSS ou
            pelo 135.
          </li>
          <li>
            Em caso de Filho Menor de 24 anos cópia da Certidão de Nascimento.
            (Informação para Imposto de Renda).
          </li>
          <li>
            CNIS (Cadastro Nacional de Informações Sociais) solicitar no site
            MEU INSS, ou pelo nº 135;
          </li>
          <li>
            Caso tenha tempo de contribuição anterior ao da Prefeitura, e deseje
            somar ao tempo de contribuição de Serviço Público, providenciar
            Certidão de Tempo de Contribuição (endereçada pelo INSS para o
            Jaboatão Prev)
          </li>
          <li>
            Para aposentadoria especial do magistério, precisa constar na CTC
          </li>
        </ul>

        <p className="text-gray-500 py-10 text-xl">
          Para aposentadoria especial do magistério, mulheres devem ter 25 anos
          em sala de aula e homens, 30 anos.
        </p>

        <p className="text-gray-500 py-2 text-xl">
          OBS Nº 1 – TRAZER CÓPIAS E ORIGINAIS DE TODOS OS DOCUMENTOS <br />
          OBS Nº 2 – TODAS AS CÓPIAS DEVEM ESTAR O MAIS LEGÍVEIS POSSÍVEIS,
          INTEIROS E SEM RASURAS. <br />
          OBS Nº 3 – NÃO TIRAMOS XÉROX DE NENHUM DOCUMENTO <br />
          OBS Nº 4 – SÓ REALIZAMOS ATENDIMENTOS COM A DOCUMENTAÇÃO COMPLETA.
        </p>

        <p className="text-gray-500 mt-10 text-xl">
          SE TIVER PENSÃO ALIMENTÍCIA <br />
          Documentos do BENEFICIÁRIO da pensão:
          <br />
          <br />
          CÓPIA DA Conta Corrente do beneficiário da pensão.
          <br />
          CÓPIA DO RG e CPF do beneficiário da pensão.
          <br />
          CÓPIA DO Processo Judicial da Pensão Alimentícia.
          <br />
          CÓPIA DO Comprovante de Residência do beneficiário da pensão.
        </p>

        <h2 className="text-2xl font-semibold text-gray-600 flex text-center items-center justify-center py-14">Aposentadoria compulsória (Art. 9º da Lei Complementar nº 40/2021)</h2>
      </div>
    </div>
  </div>
);

const Perguntas = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-[#d5e8ff]">
      <Servicos />
      <Aposentadorias />
      <AposentadoriasEspeciais />
      <Regras />
    </div>
  );
};

export default Perguntas;
