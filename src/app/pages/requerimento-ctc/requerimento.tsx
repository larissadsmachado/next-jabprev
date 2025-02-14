const Acessibilidade = () => {
    return (
      <div className="text-blue-900">
        <div className="max-w-7xl mx-auto px-4 py-8 text-justify">
          <h1 className="text-2xl font-bold mb-4">INTRODUÇÃO</h1>
          <div className="border-t-4 border-blue-900 my-4 w-40" />
          <p className="text-lg mb-4">
            O site oficial da Prefeitura do Jaboatão dos Guararapes apresenta de
            forma simples e intuitiva um portal com suporte para pessoas
            deficientes, buscando seguir as Diretrizes de Acessibilidade de
            Conteúdo Web do W3C. Os principais meios de acessibilidade presentes
            no site são:
          </p>
          <ul className="list-disc list-inside text-lg space-y-2 mb-10">
            <li>Aumentar Texto</li>
            <li>Diminuir Texto</li>
            <li>Contraste</li>
            <li>Contraste Negativo</li>
            <li>Fundo Branco</li>
            <li>Destacar Links</li>
            <li>Fontes Legíveis</li>
            <li>Reset</li>
            <li>Teclas de Atalho</li>
          </ul>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-900">AUMENTAR TEXTO</h2>
              <div className="border-t-4 border-blue-900 my-4 w-40" />
              <p className="text-lg">
                Esse recurso serve para aumentar o tamanho de todos os textos
                existentes no site.
              </p>
            </div>
  
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-900">DIMINUIR TEXTO</h2>
              <div className="border-t-4 border-blue-900 my-4 w-40" />
              <p className="text-lg">
                Esse recurso serve para diminuir o tamanho de todos os textos
                existentes no site.
              </p>
            </div>
  
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-900">CONTRASTE</h2>
              <div className="border-t-4 border-blue-900 my-4 w-40" />
              <p className="text-lg">
                Com o objetivo de ajudar pessoas com problemas de visão, ativar o
                alto contraste melhora a legibilidade de texto em ambientes com
                muita luz.
              </p>
            </div>
  
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-900">
                CONTRASTE NEGATIVO
              </h2>
              <div className="border-t-4 border-blue-900 my-4 w-40" />
              <p className="text-lg">
              O recurso de "Contraste Negativo" serve para melhorar a legibilidade do conteúdo em ambientes com baixa luminosidade ou para pessoas com dificuldades visuais específicas.
              </p>
            </div>
  
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-900">FUNDO BRANCO</h2>
              <div className="border-t-4 border-blue-900 my-4 w-40" />
              <p className="text-lg">
                Esse recurso serve para tornar o fundo do site branco e todos os
                textos na cor preta.
              </p>
            </div>
  
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-900">DESTACAR LINKS</h2>
              <div className="border-t-4 border-blue-900 my-4 w-40" />
              <p className="text-lg">
              O recurso "Destacar Links" serve para facilitar a navegação no site para pessoas que utilizam o teclado ou tecnologias assistivas, como leitores de tela, em vez de um mouse.
              </p>
            </div>
  
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-900">
                FONTES LEGÍVEIS
              </h2>
              <div className="border-t-4 border-blue-900 my-4 w-40" />
              <p className="text-lg">
                Esse recurso serve para destacar todos os links existentes do
                site.
              </p>
            </div>
  
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-blue-900">RESET</h2>
              <div className="border-t-4 border-blue-900 my-4 w-40" />
              <p className="text-lg">
                Esse recurso serve para limpar todas as alterações feitas e voltar
                no modo padrão.
              </p>
            </div>
          </div>
          
            {/* Título */}
            <h1 className="text-2xl font-bold text-blue-900 mb-4">
              TECLAS DE ATALHO
            </h1>
            <div className="border-t-4 border-blue-900 my-4 w-40" />
  
            {/* Lista de atalhos */}
            <ul className="space-y-4 text-lg text-blue-900">
              <li>
                <strong>Alt + 1:</strong> Em qualquer página do portal, chega-se
                diretamente à <strong>HOMEPAGE</strong> do site.
              </li>
              <li>
                <strong>Alt + 2:</strong> Em qualquer página do portal, chega-se
                diretamente à <strong>ÁREA DE SERVIÇOS PARA O CIDADÃO</strong>.
              </li>
              <li>
                <strong>Alt + 3:</strong> Em qualquer página do portal, chega-se
                diretamente à <strong>ÁREA DE SERVIÇOS PARA A EMPRESA</strong>.
              </li>
              <li>
                <strong>Alt + 4:</strong> Em qualquer página do portal, chega-se
                diretamente à <strong>ÁREA DE SERVIÇOS PARA O TURISTA</strong>.
              </li>
              <li>
                <strong>Alt + 5:</strong> Em qualquer página do portal, chega-se
                diretamente à <strong>ÁREA DE SERVIÇOS PARA O SERVIDOR</strong>.
              </li>
              <li>
                <strong>Alt + t:</strong> Em qualquer página do portal, chega-se
                diretamente ao <strong>TOPO</strong> do site.
              </li>
              <li>
                <strong>Alt + a:</strong> Em qualquer página do portal, chega-se
                diretamente à página de <strong>ACESSIBILIDADE</strong>.
              </li>
              <li>
                <strong>Alt + m:</strong> Em qualquer página do portal, o usuário
                é remetido ao <strong>INÍCIO</strong> do conteúdo.
              </li>
            </ul>
  
          </div>
      </div>
    );
  };
  
  export default Acessibilidade;
  