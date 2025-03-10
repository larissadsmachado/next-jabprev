"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

interface NavItem {
  name: string;
  href: string;
  submenu?: NavItem[];
}

const navigation: NavItem[] = [
  {
    name: "Institucional",
    href: "#",
    submenu: [
      { name: "O que é o JaboatãoPrev", href: "/Institucional" },
      { name: "Missão, visão e valores", href: "/Institucional/#missao" },
      { name: "A equipe JaboatãoPREV", href: "/Institucional#organograma" },
      {
        name: "Certificações Profissional",
        href: "/Pdf/CERTIFICACOES-GERAIS.pdf",
      },
      { name: "Perguntas Frequentes", href: "/Perguntas-Frequentes" },
      { name: "Legislação", href: "/Legislacao" },
      {
        name: "Cartilha Previdenciária",
        href: "/Pdf/CARTILHA.pdf",
      },
      { name: "Boletins Informativos", href: "/Boletins-Informativos" },
      { name: "Controle Interno", href: "/Controle-Interno" },
    ],
  },

  {
    name: "Administrativo",
    href: "#",
    submenu: [
      {
        name: "ATAS",
        href: "#",
        submenu: [
          {
            name: "Atas do Conselho Deliberativo",
            href: "/Conselho-Administrativo",
          },
          { name: "Atas do Conselho Fiscal", href: "/Atas-do-Conselho-Fiscal" },
          {
            name: "Atas do Comitê de Investimentos",
            href: "/Atas-do-Conselho-de-Investimentos",
          },
        ],
      },
      {
        name: "Calendários",
        href: "#",
        submenu: [
          {
            name: "Calendário de Pagamento",
            href: "/Pdf/CALENDARIO-DE-PAGAMENTO-2024.pdf",
          },

          {
            name: "Calendários de Reuniões",
            href: "#",
            submenu: [
              {
                name: "Reuniões do Conselho Fiscal",
                href: "/Pdf/Calendario-de-Reunioes-do-Conselho-Fiscal-2025.pdf",
              },

              {
                name: "Reuniões do Conselho Deliberativo",
                href: "/Pdf/Calendario-de-Reunioes-do-Conselho-Deliberativo-2025.pdf",
              },

              {
                name: "Reuniões do Comitê de Investimentos",
                href: "/Pdf/Calendario-de-Reunioes-gerenciais-2025.pdf",
              },

              {
                name: "Reuniões da diretoria Executiva",
                href: "/Pdf/Calendario-de-Reunioes-gerenciais-2025-1.pdf",
              },

              {
                name: "Reuniões setoriais",
                href: "/Pdf/Calendario-de-Reunioes-Setoriais-2025.pdf",
              },

              {
                name: "Reuniões do Monitoramento",
                href: "/Pdf/Calendario-de-Reunioes-de-Monitoramento-2025.pdf",
              },

              {
                name: "Reuniões da comissão de revisão de benefícios",
                href: "/Pdf/CALENDARIO-DE-REUNIOES-Comissao-2025.pdf",
              },
            ],
          },

          {
            name: "Calendário de obrigações",
            href: "/Pdf/Calendario-de-Envio-de-Informacoes-2025.pdf",
          },

          {
            name: "Calendários de Eventos",
            href: "#",
            submenu: [
              {
                name: " Dia de acolhimento e boas vindas",
                href: "/Pdf/Calendario-cafe-da-manha-2025-1.pdf",
              },
            ],
          },
        ],
      },

      { name: "Contratos", href: "Contratos" },

      {
        name: "Educação previdenciária e financeira",
        href: "/Pdf/Cronograma-de-Educacao-Previdenciaria-2024.pdf",
      },

      { name: "folha de pagamento", href: "/Folha-de-Pagamento" },

      { name: "cronograma de capacitação", href: "/Cronograma-de-Capacitacao" },

      { name: "plano de ação", href: "/Plano-de-Acao" },
      {
        name: "programa 5S",
        href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/01/Apresenta%C3%A7%C3%A3o%205s%20att.pptx",
      },
      { name: "relatório anual de gestão", href: "/Relatorio-anual-de-gestao" },
      { name: "obrigações fiscais", href: "/Obrigacoes-fiscais" },
    ],
  },

  {
    name: "Financeiro",
    href: "#",
    submenu: [
      {
        name: "receitas",
        href: "https://portaldatransparencia.jaboatao.pe.gov.br/receitas/",
      },
      {
        name: "despesas",
        href: "https://portaldatransparencia.jaboatao.pe.gov.br/despesas/",
      },
      { name: "despesas adminstrativas", href: "/Despesas-Administrativas" },
      { name: "demonstrativos contábeis", href: "/Demonstrativos-contabeis" },
      { name: "prestações de contas", href: "/Prestacoes-de-Contas" },
      {
        name: "mapeamento",
        href: "/Pdf/FINANCEIRO-2.pdf",
      },
    ],
  },
  {
    name: "Investimentos",
    href: "#",
    submenu: [
      {
        name: "Apr-autorização de aplicação e resgate",
        href: "/Apr-autorizacao-de-aplicacao-e-resgate",
      },
      { name: "credenciamentos", href: "/Credenciamentos" },
      { name: "política de investimentos", href: "/Politica-de-Investimentos" },
      {
        name: "Relatório anual de investimentos",
        href: "/Pdf/13.-RELATORIO-ANUAL-2023.pdf",
      },
      {
        name: "regime interno",
        href: "/Pdf/REGIMENTO-INTERNO-COMITE-DE-INVESTIMENTOS.pdf",
      },
      { name: "relatório mensais", href: "/Relatorio-mensais" },
      { name: "relatório de inteligência de dados(bi)", href: "/Relatorio-de-inteligencia-de-dados-bi" },
      { name: "Estudo de alm", href: "/Estudo-de-alm" },
      {
        name: "mapeamento",
        href: "/Pdf/MAPEAMENTO-SETOR-DE-INVESTIMENTOS.pdf",
      },
    ],
  },
  {
    name: "previdência",
    href: "#",
    submenu: [
      { name: "previdência complementar", href: "/Previdencia-complementar" },
      { name: "provisões matemáticas", href: "/Provisoes-matematicas" },
      { name: "relatório gestão atuaial", href: "/Pdf/Jaboatao-dos-Guararapes-PE-Relatorio-Pro-Gestao-2023-Nivel-II.pdf" },
      {
        name: "relatórios atuariais ",
        href: "#",
        submenu: [
          {
            name: "Avaliação Atuarial 2025",
            href: "/Pdf/Jaboatao_dos_GuararapesPE-Relatorio-Avaliacao-Atuarial-Segregacao-2025-N009_V1.pdf",
          },
          {
            name: "Avaliação Atuarial 2024",
            href: "/Pdf/Jaboatao-dos-Guararapes-PE-Relatorio-Avaliacao-Atuarial-2024-N021_V1-1.pdf",
          },
          {
            name: "Avaliação Atuarial 2023",
            href: "/Pdf/Avalicao-atuarial-2023.pdf",
          },
          {
            name: "Avaliação Atuarial 2022",
            href: "/Pdf/Jaboatao-dos-Guararapes-PE-Relatorio-Avaliacao-Atuarial-2022-N043V1-Com-Segregacao-1.pdf",
          },
          {
            name: "Avaliação Atuarial 2021",
            href: "#",
            submenu: [
              { name: "Captalizado", href: "/Pdf/RelatorioAA-Prev-2021-JABOATAO.pdf" },
              { name: "Financeiro", href: "/Pdf/RelatorioAA-FINANC-2021-JABOATAO.pdf" },
            ],
          },
          {
            name: "Avaliação Atuarial 2020",
            href: "#",
            submenu: [
              { name: "Captalizado", href: "/Pdf/RelatorioAA-Prev-MAR-2020-JABOATÃO-mesclado.pdf" },
              { name: "Financeiro", href: "/Pdf/RelatorioAA-FINANC-MAR-2020-JABOATÃO-mesclado.pdf" },
            ],
          },
          {
            name: "Avaliação Atuarial 2019",
            href: "/Pdf/Avaliação-Atuarial-2019.pdf",
          },
          {
            name: "Avaliação Atuarial 2018",
            href: "/Pdf/Avaliação-Atuarial-2018.pdf",
          },
          {
            name: "Avaliação Atuarial 2017",
            href: "/Pdf/Avaliação-Atuarial-2017.pdf",
          },
        ],
      },
      {
        name: "contribuições previdenciária",
        href: "/Pdf/Lei-complementar-40-reorganiza-o-RPPS.pdf",
      },
      {
        name: "mapeamento",
        href: "/Pdf/PREVIDENCIA.pdf",
      },
    ],
  },
  {
    name: "Cad prev",
    href: "#",
    submenu: [
      {
        name: "DIPR - Demonstrativo De Informações Previdenciárias E Repasses",
        href: "/Dipr-demonstrativo-de-informacoes-previdenciarias-e-repasses",
      },
      {
        name: "DAIR - Demonstrativo das aplicações e investimentos dos recursos",
        href: "/Dair-demonstrativo-das-aplicacoes-e-investimentos-dos-recursos",
      },
      { name: "DPIN - demonstrativo de políticas de investimento", href: "/Dpin-demonstrativo-de-politicas-de-investimento" },
      { name: "AP - Acordo de parcelamento", href: "/Ap-acordo-de-parcelamento" },
      { name: "CRP - Certidão de regularidade previdenciária", href: "/Crp-certidao-de-regularidade-previdenciaria" },
    ],
  },
  {
    name: "Carta de Serviço",
    href: "/Pdf/carta.pdf",
  },
  {
    name: "Sites Relacionados",
    href: "#",
    submenu: [
      { name: "site Oficial", href: "https://jaboatao.pe.gov.br/" },
      { name: "diário oficial", href: "https://diariooficial.jaboatao.pe.gov.br/" },
      { name: "portal da transparência", href: "https://portaldatransparencia.jaboatao.pe.gov.br/" },
      { name: "ouvidoria", href: "https://ouvidoria.jaboatao.pe.gov.br/" },
      { name: "portal do contribuinte", href: "https://www.tinus.com.br/csp/JABOATAO/portal/index.csp" },
    ],
  },
];

const Logo = () => (
  <div className="relative flex items-center justify-center">
    <Link href="/">
      <Image
        src="/images/Logo/logo.png"
        alt="Logo"
        height={20}
        width={220}
        className="w-[180px] h-auto sm:w-[200px] sm:h-auto md:w-[200px] md:h-auto lg:w-[310px] lg:h-auto xl:w-[230px] xl:h-auto"
      />
    </Link>
  </div>
);

const NavLinks = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState<string | null>(null);

  return (
    <div className="hidden lg:flex items-center space-x-6 relative uppercase">
      {navigation.map((item) => (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() => setActiveMenu(item.name)}
          onMouseLeave={() => {
            setActiveMenu(null);
            setActiveSubMenu(null);
            setActiveSubSubMenu(null);
          }}
        >
          <Link
            href={item.href}
            className="text-[#0037C1] text-[15px] hover:underline font-semibold flex"
          >
            {item.name}
            {item.submenu && (
              <MdKeyboardArrowDown className="ml-2 text-[#0037C1]" />
            )}
          </Link>

          {activeMenu === item.name && item.submenu && (
            <div className="absolute left-0 bg-[#0037C1] shadow-lg w-60 border border-white z-50 flex flex-col py-2">
              {item.submenu.map((subItem) => (
                <div
                  key={subItem.name}
                  className="relative group"
                  onMouseEnter={() => setActiveSubMenu(subItem.name)}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  <Link
                    href={subItem.href}
                    className="px-4 py-2 text-white hover:bg-[#0055C1] text-[15px] flex items-center"
                  >
                    {subItem.name}
                    {subItem.submenu && (
                      <MdKeyboardArrowRight className="ml-2 text-white" />
                    )}
                  </Link>

                  {activeSubMenu === subItem.name && subItem.submenu && (
                    <div className="absolute left-full top-0 bg-[#0037C1] shadow-lg py-2 w-56 border border-white z-50 flex flex-col">
                      {subItem.submenu.map((subSubItem) => (
                        <div
                          key={subSubItem.name}
                          className="relative group"
                          onMouseEnter={() =>
                            setActiveSubSubMenu(subSubItem.name)
                          }
                          onMouseLeave={() => setActiveSubSubMenu(null)}
                        >
                          <Link
                            href={subSubItem.href}
                            className="px-4 py-2 text-white hover:bg-[#0055C1] text-base flex items-center"
                          >
                            {subSubItem.name}
                            {subSubItem.submenu && (
                              <MdKeyboardArrowRight className="ml-2 text-white" />
                            )}
                          </Link>

                          {activeSubSubMenu === subSubItem.name &&
                            subSubItem.submenu && (
                              <div className="absolute left-full top-0 bg-[#0037C1] shadow-lg py-2 w-56 border border-white z-50 flex flex-col">
                                {subSubItem.submenu.map((subSubSubItem) => (
                                  <Link
                                    key={subSubSubItem.name}
                                    href={subSubSubItem.href}
                                    className="block px-4 py-2 text-white hover:bg-[#0055C1] text-base"
                                  >
                                    {subSubSubItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const MobileMenu = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const renderSubMenu = (items: NavItem[], level = 1) => {
    return (
      <div className={`pl-${level * 4} mt-2`}> {/* Indentação dinâmica */}
        {items.map((item) => (
          <div key={item.name} className="mb-2">
            {item.submenu ? (
              <button
                onClick={() => toggleMenu(item.name)}
                className="w-full flex items-center text-center justify-between text-[#0037C1] text-lg font-normal hover:underline"
              >
                {item.name}
                {openMenus[item.name] ? (
                  <ChevronUpIcon className="h-5 w-5" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" />
                )}
              </button>
            ) : (
              <Link
                href={item.href}
                className="block w-full text-[#0037C1] text-lg font-normal hover:underline"
              >
                {item.name}
              </Link>
            )}
            {item.submenu && openMenus[item.name] && renderSubMenu(item.submenu, level + 1)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="lg:hidden p-4 pt-10">
      {renderSubMenu(navigation, 1)}
    </div>
  );
};

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="hidden lg:flex items-center relative">
      <button
        onClick={() => setShowSearch(!showSearch)}
        className="text-[#0037C1] text-xl focus:outline-none"
        aria-label="Toggle Search"
      >
        <FaSearch />
      </button>
      {showSearch && (
        <div className="absolute top-full mt-2 bg-white p-2 rounded shadow-lg w-64">
          <input
            type="text"
            placeholder="Search..."
            className="text-black placeholder-gray-500 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full"
          />
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-[#fdc200d1] shadow-md" : "bg-[#FDC300]"
      }`}
    >
      <div className="relative max-w-8xl mx-auto p-2 md:p-3 lg:px-32">
        <div className="relative flex h-14 items-center justify-between">
          <Logo />
          <NavLinks />
          <SearchBar />
          <div className="block lg:hidden">
            <Bars3Icon
              className="h-6 w-6 text-[#0037C1] cursor-pointer"
              aria-hidden="true"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        {isOpen && <MobileMenu />}
      </div>
    </Disclosure>
  );
};

export default Navbar;