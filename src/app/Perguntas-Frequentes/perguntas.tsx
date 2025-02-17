"use client";

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
  <div className="bg-gradient-to-b from-[#fffffe] via-[#f5e9c3] to-[#aadcee]">
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

        <img
          src="/images/Perguntas/calculo.png"
          alt="Prêmio 1"
          className="pt-12"
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
  <div className="bg-gradient-to-b from-[#aadcee] to-[#ffffff]">
    <div className="max-w-6xl mx-auto h-auto p-6">
      <div>
        <h1 className="text-3xl font-bold mb-4 uppercase text-blue-900 leading-tight border-b-4 border-blue-900 inline-block">
          Aposentadorias Especiais
        </h1>

        <h2 className="text-xl font-bold mb-4 uppercase text-blue-900 leading-tight pt-5">
          Aposentadoria por incapacidade (Art. 8º da Lei Complementar nº
          40/2021)
        </h2>
      </div>

      <div>
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

      <div>
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

    </div>
  </div>
);

const Perguntas = () => {
  return (
    <div className="flex flex-col">
      <Servicos />
      <Aposentadorias />
      <AposentadoriasEspeciais />
    </div>
  );
};

export default Perguntas;
