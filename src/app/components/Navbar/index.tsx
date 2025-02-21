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
      { name: "O que é o JaboatãoPrev", href: "./Institucional" },
      { name: "Missão, visão e valores", href: "./Institucional/#missao" },
      { name: "A equipe JaboatãoPREV", href: "./Institucional#organograma" },
      {
        name: "Certificações Profissional",
        href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/CERTIFICACOES-GERAIS-Atualizado.pdf",
      },
      { name: "Perguntas Frequentes", href: "./Perguntas-Frequentes" },
      { name: "Legislação", href: "Legislacao" },
      { name: "Cartilha Previdenciária", href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/09/CARTILHA-JABOATAOPREV-NEW.pdf" },
      { name: "Boletins Informativos", href: "Boletins-Informativos" },
      { name: "Controle Interno", href: "Controle-Interno" },
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
            href: "Conselho-Administrativo",
          },
          { name: "Atas do Conselho Fiscal", href: "Atas-do-Conselho-Fiscal" },
          {
            name: "Atas do Comitê de Investimentos",
            href: "Atas-do-Conselho-de-Investimentos",
          },
        ],
      },
      {
        name: "Calendários",
        href: "#",
        submenu: [
          {
            name: "Calendário de Pagamento",
            href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/02/CALENDARIO-DE-PAGAMENTO-2024.pdf",
          },

          {
            name: "Calendários de Reuniões",
            href: "#",
            submenu: [
              { name: "Reuniões do Conselho Fiscal", href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Calendario-de-Reunioes-do-Conselho-Fiscal-2025.pdf" },

              { name: "Reuniões do Conselho Deliberativo", href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Calendario-de-Reunioes-do-Conselho-Deliberativo-2025.pdf" },

              { name: "Reuniões do Comitê de Investimentos", href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Calendario-de-Reunioes-gerenciais-2025.pdf" },

              { name: "Reuniões da diretoria Executiva", href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Calendario-de-Reunioes-gerenciais-2025-1.pdf" },

              { name: "Reuniões setoriais", href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Calendario-de-Reunioes-Setoriais-2025.pdf" },

              { name: "Reuniões do Monitoramento", href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Calendario-de-Reunioes-de-Monitoramento-2025.pdf" },

              {
                name: "Reuniões da comissão de revisão de benefícios",
                href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/CALENDARIO-DE-REUNIOES-Comissao-2025.pdf%22%20title=%22CALENDARIO%20DE%20REUNIOES%20-%20Comiss%C3%A3o%202025",
              },
            ],
          },
          
          {
            name: "Calendário de obrigações",
            href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Calendario-de-Envio-de-Informacoes-2025.pdf",
          },

          {
            name: "Calendários de Eventos",
            href: "#",
            submenu: [
              { name: " Dia de acolhimento e boas vindas", 
                href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Calendario-cafe-da-manha-2025-1.pdf" },

            ],
          },

        ],
      },

      { name: "Contratos", href: "Contratos" },

      { name: "Educação previdenciária e financeira",
        href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/Cronograma-de-Educacao-Previdenciaria-2024.pdf",
      },

      { name: "folha de pagamento", href: "Folha-de-Pagamento" },
      
      { name: "cronograma de capacitação", href: "Cronograma-de-Capacitacao" },
      
      { name: "plano de ação", href: "Plano-de-Acao" },
      { name: "programa 55", href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/01/Apresenta%C3%A7%C3%A3o%205s%20att.pptx" },
      { name: "relatório anual de gestão", href: "Relatorio-anual-de-gestao" },
      { name: "obrigações fiscais", href: "Obrigacoes-fiscais" },
    ],
  },


  {
    name: "Financeiro",
    href: "#",
    submenu: [
      { name: "receitas", href: "https://portaldatransparencia.jaboatao.pe.gov.br/receitas/" },
      { name: "despesas", href: "https://portaldatransparencia.jaboatao.pe.gov.br/despesas/" },
      { name: "despesas adminstrativas", href: "Despesas-Administrativas" },
      { name: "demonstrativos contábeis", href: "Demonstrativos-contabeis" },
      { name: "prestações de contas", href: "Prestacoes-de-Contas" },
      {
        name: "mapeamento",
        href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/FINANCEIRO-2.pdf",
      },
    ],
  },
  {
    name: "Investimentos",
    href: "#",
    submenu: [
      {
        name: "Apr-autorização de aplicação e resgate",
        href: "Apr-autorizacao-de-aplicacao-e-resgate",
      },
      { name: "certificação profissional", href: "Certificacao-profissional" },
      { name: "credenciamentos", href: "Credenciamentos" },
      { name: "política de investimentos", href: "Politica-de-Investimentos" },
      { name: "regime interno", href: "Regime-interno" },
      { name: "relatório mensais", href: "Relatorio-mensais" },
      {
        name: "relatório de inteligência de dados(bi)",
        href: "Relatorio-de-inteligencia-de-dados",
      },
      { name: "Estudo de alm", href: "Estudo-de-alm" },
      {
        name: "mapeamento",
        href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/MAPEAMENTO-SETOR-DE-INVESTIMENTOS.pdf",
      },
    ],
  },
  {
    name: "previdência",
    href: "#",
    submenu: [
      { name: "previdência complementar", href: "Previdencia-complementar" },
      {
        name: "dia de acolhimento e boas vindas",
        href: "Dia-de-acolhimento-e-boas-vindas",
      },
      { name: "provisões matemáticas", href: "Provisoes-matemáticas" },
      { name: "relatório gestão atuaial", href: "Relatorio-gestao-atual" },
      {
        name: "relatórios atuariais ",
        href: "#",
        submenu: [
          {
            name: "Avaliação Atuarial 2025",
            href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2025/02/Jaboatao_dos_GuararapesPE-Relatorio-Avaliacao-Atuarial-Segregacao-2025-N009_V1.pdf",
          },
          {
            name: "Avaliação Atuarial 2024",
            href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/Jaboatao-dos-Guararapes-PE-Relatorio-Avaliacao-Atuarial-2024-N021_V1-1.pdf",
          },
          {
            name: "Avaliação Atuarial 2023",
            href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2023/04/Avalicao-atuarial-2023.pdf",
          },
          {
            name: "Avaliação Atuarial 2022",
            href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2022/06/Jaboatao-dos-Guararapes-PE-Relatorio-Avaliacao-Atuarial-2022-N043V1-Com-Segregacao-1.pdf",
          },
          {
            name: "Avaliação Atuarial 2021",
            href: "#",
            submenu: [
              { name: "Captalizado", href: "#" },
              { name: "Financeiro", href: "#" },
            ],
          },
          {
            name: "Avaliação Atuarial 2020",
            href: "#",
            submenu: [
              { name: "Captalizado", href: "#" },
              { name: "Financeiro", href: "#" },
            ],
          },
          {
            name: "Avaliação Atuarial 2019",
            href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/Avalia%C3%A7%C3%A3o-Atuarial-2019.pdf",
          },
          {
            name: "Avaliação Atuarial 2018",
            href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/Avalia%C3%A7%C3%A3o-Atuarial-2018.pdf",
          },
          {
            name: "Avaliação Atuarial 2017",
            href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2020/04/Avalia%C3%A7%C3%A3o-Atuarial-2017.pdf",
          },
        ],
      },
      {
        name: "contribuições previdenciária",
        href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2021/10/Lei-complementar-40-reorganiza-o-RPPS.pdf",
      },
      {
        name: "mapeamento",
        href: "https://jaboataoprev.jaboatao.pe.gov.br/wp-content/uploads/2024/04/PREVIDENCIA.pdf",
      },
    ],
  },
  {
    name: "Cad prev",
    href: "#",
    submenu: [
      {
        name: "DIPR - Demonstrativo De Informações Previdenciárias E Repasses",
        href: "#",
      },
      {
        name: "DAIR - Demonstrativo das aplicações e investimentos dos recursos",
        href: "#",
      },
      { name: "DPIN - demonstrativo de políticas de investimento", href: "#" },
      { name: "AP - Acordo de parcelamento", href: "#" },
      { name: "CRP - Certidão de regularidade previdenciária", href: "#" },
    ],
  },
  {
    name: "Carta de Serviço",
    href: "#",
  },
  {
    name: "Sites Relacionados",
    href: "#",
    submenu: [
      { name: "site Oficial", href: "#" },
      { name: "diário oficial", href: "#" },
      { name: "portal da transparência", href: "#" },
      { name: "ouvidoria", href: "#" },
      { name: "portal do contribuinte", href: "#" },
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
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [openSubSubMenus, setOpenSubSubMenus] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const toggleSubMenu = (menu: string) => {
    setOpenSubMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const toggleSubSubMenu = (menu: string) => {
    setOpenSubSubMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="lg:hidden p-4 pt-10">
      {navigation.map((item) => (
        <div key={item.name} className="mb-2">
          <button
            onClick={() => toggleMenu(item.name)}
            className="w-full flex justify-between text-[#0037C1] text-lg font-normal hover:underline"
          >
            {item.name}
            {item.submenu &&
              (openMenus[item.name] ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              ))}
          </button>

          {openMenus[item.name] && item.submenu && (
            <div className="pl-4 mt-2">
              {item.submenu.map((subItem) => (
                <div key={subItem.name} className="mb-2">
                  <button
                    onClick={() => toggleSubMenu(subItem.name)}
                    className="w-full flex justify-between text-[#0037C1] text-lg font-normal hover:underline"
                  >
                    {subItem.name}
                    {subItem.submenu &&
                      (openSubMenus[subItem.name] ? (
                        <ChevronUpIcon className="h-5 w-5" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5" />
                      ))}
                  </button>

                  {openSubMenus[subItem.name] && subItem.submenu && (
                    <div className="pl-4 mt-2">
                      {subItem.submenu.map((subSubItem) => (
                        <div key={subSubItem.name} className="mb-2">
                          <button
                            onClick={() => toggleSubSubMenu(subSubItem.name)}
                            className="w-full flex justify-between text-[#0037C1] text-lg font-normal hover:underline"
                          >
                            {subSubItem.name}
                            {subSubItem.submenu &&
                              (openSubSubMenus[subSubItem.name] ? (
                                <ChevronUpIcon className="h-5 w-5" />
                              ) : (
                                <ChevronDownIcon className="h-5 w-5" />
                              ))}
                          </button>

                          {openSubSubMenus[subSubItem.name] &&
                            subSubItem.submenu && (
                              <div className="pl-4 mt-2">
                                {subSubItem.submenu.map((subSubSubItem) => (
                                  <Link
                                    key={subSubSubItem.name}
                                    href={subSubSubItem.href}
                                    className="block px-4 py-2 text-[#0037C1] hover:bg-gray-100"
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
