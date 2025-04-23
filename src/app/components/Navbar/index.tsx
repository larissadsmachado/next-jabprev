"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { usePathname } from "next/navigation";

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
      { name: "O que é o JaboatãoPrev", href: "/institucional" },
      { name: "Missão, visão e valores", href: "/institucional/#missao" },
      { name: "A equipe JaboatãoPREV", href: "/institucional/#organograma" },
      {
        name: "Certificações Profissional",
        href: "/Pdf/menu/CERTIFICACOES-GERAIS.pdf",
      },
      { name: "Perguntas Frequentes", href: "/perguntas-frequentes" },
      { name: "Legislação", href: "/legislacao" },
      {
        name: "Cartilha Previdenciária",
        href: "/Pdf/menu/CARTILHA.pdf",
      },
      { name: "Informativos Previdenciários", href: "/informativos-previdenciarios" },
      { name: "Controle Interno", href: "/controle-interno" },
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
            href: "/atas-do-conselho-deliberativo",
          },
          { name: "Atas do Conselho Fiscal", href: "/atas-do-conselho-fiscal" },
          {
            name: "Atas do Comitê de Investimentos",
            href: "/atas-do-comite-de-investimentos",
          },
        ],
      },
      
      {
        name: "Calendários",
        href: "#",
        submenu: [
          {
            name: "Calendário de Pagamento",
            href: "/Pdf/menu/2.2_CALENDARIO_DE_PAGAMENTO_2025.pdf",
          }, 
          {
            name: "Calendários de Reuniões",
            href: "#",
            submenu: [
              {
                name: "Reuniões do Conselho Fiscal",
                href: "/Pdf/menu/Calendario-de-Reunioes-do-Conselho-Fiscal-2025.pdf",
              },

              {
                name: "Reuniões do Conselho Deliberativo",
                href: "/Pdf/menu/Calendario-de-Reunioes-do-Conselho-Deliberativo-2025.pdf",
              },

              {
                name: "Reuniões do Comitê de Investimentos",
                href: "/Pdf/menu/Calendario-de-Reunioes-investimentos-2025.pdf",
              },

              {
                name: "Reuniões da diretoria Executiva",
                href: "/Pdf/menu/Calendario-de-Reunioes-gerenciais-2025-1.pdf",
              },

              {
                name: "Reuniões setoriais",
                href: "/Pdf/menu/Calendario-de-Reunioes-Setoriais-2025.pdf",
              },

              {
                name: "Reuniões da comissão de revisão de benefícios",
                href: "/Pdf/menu/CALENDARIO-DE-REUNIOES-Comissao-2025.pdf",
              },
            ],
          },

          {
            name: "Calendário de obrigações",
            href: "/Pdf/menu/Calendario-de-Envio-de-Informacoes-2025.pdf",
          },

          {
            name: "Calendários de Eventos",
            href: "#",
            submenu: [
              {
                name: " Dia de acolhimento e boas vindas",
                href: "/Pdf/menu/Calendario-cafe-da-manha-2025-1.pdf",
              },
            ],
          },
          
          {
            name: "Calendário de Reuniões Ordinárias Conselho Deliberativo",
            href: "/Pdf/menu/2.3_Calendario_de_Reunioes_do_Conselho_Deliberativo___2025.pdf",
          },
          {
            name: "Calendário de Reuniões Ordinárias Comitê de Investimento",
            href: "/Pdf/menu/2.3_Calendario_de_Reunioes_do_Comite_de_Investimentos___2025.pdf",
          },
        ],
      },

      { name: "Concessões de benefícios", href: "/Pdf/menu/2.6_CONCESSOES_DE_BENEFICIOS___MARCO.2025.pdf" },


      { name: "Contratos", href: "contratos" },

      {
        name: "Educação previdenciária e financeira",
        href: "/Pdf/menu/Cronograma-de-Educacao-Previdenciaria-2024.pdf",
      },

      { name: "folha de pagamento", href: "/folha-de-pagamento" },

      { name: "cronograma de capacitação", href: "/cronograma-de-capacitacao" },

      { name: "plano de ação", href: "/plano-de-acao" },
      {
        name: "programa 5S",
        href: "/programa-5s", 
      },
      { name: "relatório anual de gestão", href: "/relatorio-anual-de-gestao" },
      { name: "obrigações fiscais", href: "/obrigacoes-fiscais" },
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
      { name: "despesas adminstrativas", href: "/despesas-administrativas" },
      { name: "demonstrativos contábeis", href: "/demonstrativos-contabeis" },
      { name: "prestações de contas", href: "/prestacoes-de-contas" },
      {
        name: "mapeamento",
        href: "/Pdf/menu/FINANCEIRO-2.pdf",
      },
    ],
  },
  {
    name: "Investimentos",
    href: "#",
    submenu: [
      {
        name: "Apr-autorização de aplicação e resgate",
        href: "/apr-autorizacao-de-aplicacao-e-resgate",
      },
      { name: "credenciamentos", href: "/credenciamentos" },
      { name: "política de investimentos", href: "/politica-de-investimentos" },
      {
        name: "Relatório anual de investimentos",
        href: "/Pdf/menu/13.-RELATORIO-ANUAL-2023.pdf",
      },
      {
        name: "regime interno",
        href: "/Pdf/menu/REGIMENTO-INTERNO-COMITE-DE-INVESTIMENTOS.pdf",
      },
      { name: "relatório mensais", href: "/relatorio-mensais" },
      {
        name: "relatório de inteligência de dados(bi)",
        href: "/relatorio-de-inteligencia-de-dados-bi",
      },
      { name: "Estudo de alm", href: "/estudo-de-alm" },
      {
        name: "mapeamento",
        href: "/Pdf/menu/MAPEAMENTO-SETOR-DE-INVESTIMENTOS.pdf",
      },
    ],
  },
  {
    name: "previdência",
    href: "#",
    submenu: [
      { name: "previdência complementar", href: "/previdencia-complementar" },
      { name: "provisões matemáticas", href: "/provisoes-matematicas" },
      {
        name: "relatório gestão atual",
        href: "/Pdf/menu/Jaboatao-dos-Guararapes-PE-Relatorio-Pro-Gestao-2023-Nivel-II.pdf",
      },
      {
        name: "relatórios atuariais ",
        href: "#",
        submenu: [
          {
            name: "Avaliação Atuarial 2025",
            href: "/Pdf/menu/Jaboatao_dos_GuararapesPE-Relatorio-Avaliacao-Atuarial-Segregacao-2025-N009_V1.pdf",
          },
          {
            name: "Avaliação Atuarial 2024",
            href: "/Pdf/menu/Jaboatao-dos-Guararapes-PE-Relatorio-Avaliacao-Atuarial-2024-N021_V1-1.pdf",
          },
          {
            name: "Avaliação Atuarial 2023",
            href: "/Pdf/menu/Avalicao-atuarial-2023.pdf",
          },
          {
            name: "Avaliação Atuarial 2022",
            href: "/Pdf/menu/Jaboatao-dos-Guararapes-PE-Relatorio-Avaliacao-Atuarial-2022-N043V1-Com-Segregacao-1.pdf",
          },
          {
            name: "Avaliação Atuarial 2021",
            href: "#",
            submenu: [
              {
                name: "Captalizado",
                href: "/Pdf/menu/RelatorioAA-Prev-2021-JABOATAO.pdf",
              },
              {
                name: "Financeiro",
                href: "/Pdf/menu/RelatorioAA-FINANC-2021-JABOATAO.pdf",
              },
            ],
          },
          {
            name: "Avaliação Atuarial 2020",
            href: "#",
            submenu: [
              {
                name: "Captalizado",
                href: "/Pdf/menu/RelatorioAA-Prev-MAR-2020-JABOATÃO-mesclado.pdf",
              },
              {
                name: "Financeiro",
                href: "/Pdf/menu/RelatorioAA-FINANC-MAR-2020-JABOATÃO-mesclado.pdf",
              },
            ],
          },
          {
            name: "Avaliação Atuarial 2019",
            href: "/Pdf/menu/Avaliação-Atuarial-2019.pdf",
          },
          {
            name: "Avaliação Atuarial 2018",
            href: "/Pdf/menu/Avaliação-Atuarial-2018.pdf",
          },
          {
            name: "Avaliação Atuarial 2017",
            href: "/Pdf/menu/Avaliação-Atuarial-2017.pdf",
          },
        ],
      },
      {
        name: "contribuições previdenciária",
        href: "/Pdf/menu/Lei-complementar-40-reorganiza-o-RPPS.pdf",
      },
      {
        name: "mapeamento",
        href: "/Pdf/menu/PREVIDENCIA.pdf",
      },
    ],
  },
  {
    name: "Cad prev",
    href: "#",
    submenu: [
      {
        name: "DIPR - Demonstrativo De Informações Previdenciárias E Repasses",
        href: "/dipr-demonstrativo-de-informacoes-previdenciarias-e-repasses",
      },
      {
        name: "DAIR - Demonstrativo das aplicações e investimentos dos recursos",
        href: "/dair-demonstrativo-das-aplicacoes-e-investimentos-dos-recursos",
      },
      {
        name: "DPIN - demonstrativo de políticas de investimento",
        href: "/dpin-demonstrativo-de-politicas-de-investimento",
      },
      {
        name: "AP - Acordo de parcelamento",
        href: "/ap-acordo-de-parcelamento",
      },
      {
        name: "CRP - Certidão de regularidade previdenciária",
        href: "/crp-certidao-de-regularidade-previdenciaria",
      },
    ],
  },
  {
    name: "Carta de Serviço",
    href: "/Pdf/menu/carta.pdf",
  },
  {
    name: "Sites Relacionados",
    href: "#",
    submenu: [
      { name: "site Oficial", href: "https://jaboatao.pe.gov.br/" },
      {
        name: "diário oficial",
        href: "https://diariooficial.jaboatao.pe.gov.br/",
      },
      {
        name: "portal da transparência",
        href: "https://portaldatransparencia.jaboatao.pe.gov.br/",
      },
      { name: "ouvidoria", href: "https://ouvidoria.jaboatao.pe.gov.br/" },
      {
        name: "portal do contribuinte",
        href: "https://www.tinus.com.br/csp/JABOATAO/portal/index.csp",
      },
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
        className="w-[180px] h-auto sm:w-[200px] sm:h-auto md:w-[200px] md:h-auto lg:w-[210px] lg:h-auto xl:w-[230px] xl:h-auto"
      />
    </Link>
  </div>
);


const NavLinks: React.FC = () => {
  const pathname = usePathname() ?? ""; // garante que não será null

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeSubSubMenu, setActiveSubSubMenu] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="hidden lg:flex  relative uppercase">
      {isLoading && <LoadingScreen />}
      {navigation.map((item) => {
        const isActive =
          pathname.startsWith(item.href) ||
          item.submenu?.some(
            (sub) =>
              pathname.startsWith(sub.href) ||
              sub.submenu?.some((subSub) => pathname.startsWith(subSub.href))
          );
        return (
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
              className={`text-[#0037C1] text-[15px] font-semibold flex p-3 hover:bg-[#224276] hover:text-[#ffffff] hover:underline decoration-[#13AFF0] ${
                isActive
                  ? "bg-[#224276] underline decoration-[#13AFF0] text-[#ffffff]"
                  : ""
              }`}
              onClick={(e) => {
                setActiveMenu(null);
                setActiveSubMenu(null);
                setActiveSubSubMenu(null);
                const isHashLink = item.href.startsWith("/#");
                if (isHashLink) {
                  const id = item.href.split("#")[1];
                  if (pathname === "/") {
                    e.preventDefault();
                    const element = document.getElementById(id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                } else {
                  handleClick();
                }
              }}
            >
              {item.name}
              {item.submenu && <MdKeyboardArrowDown className="ml-2" />}
            </Link>

            {activeMenu === item.name && item.submenu && (
              <div className="absolute left-0 bg-[#2b73d0f5] shadow-lg w-60 border border-slate-300 z-50 flex flex-col">
                {item.submenu.map((subItem) => {
                  const isSubActive =
                    pathname.startsWith(subItem.href) ||
                    subItem.submenu?.some((subSub) =>
                      pathname.startsWith(subSub.href)
                    );
                  return (
                    <div
                      key={subItem.name}
                      className="relative group"
                      onMouseEnter={() => setActiveSubMenu(subItem.name)}
                      onMouseLeave={() => setActiveSubMenu(null)}
                    >
                      <Link
                        href={subItem.href}
                        className={`px-4 py-3 text-white text-[15px] flex items-center hover:bg-[#fdfdfd] hover:text-[#2b63ab] ${
                          isSubActive ? "bg-[#224276] text-[#ffffff]" : ""
                        }`}
                        onClick={(e) => {
                          setActiveMenu(null);
                          setActiveSubMenu(null);
                          setActiveSubSubMenu(null);
                          const isHashLink = subItem.href.startsWith("/#");
                          if (isHashLink) {
                            const id = subItem.href.split("#")[1];
                            if (pathname === "/") {
                              e.preventDefault();
                              const element = document.getElementById(id);
                              if (element) {
                                element.scrollIntoView({ behavior: "smooth" });
                              }
                            }
                          } else {
                            handleClick();
                          }
                        }}
                      >
                        {subItem.name}
                        {subItem.submenu && (
                          <MdKeyboardArrowRight className="ml-2 text-white" />
                        )}
                      </Link>

                      {activeSubMenu === subItem.name && subItem.submenu && (
                        <div className="absolute left-full top-0 bg-[#2b73d0f5] shadow-lg w-56 border border-slate-300 z-50 flex flex-col">
                          {subItem.submenu.map((subSubItem) => {
                            const isSubSubActive = pathname.startsWith(
                              subSubItem.href
                            );
                            return (
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
                                  className={`px-4 py-2 text-white text-base flex items-center hover:bg-[#fdfdfd] hover:text-[#2b63ab] ${
                                    isSubSubActive
                                      ? "bg-[#224276] text-[#ffffff]"
                                      : ""
                                  }`}
                                  onClick={(e) => {
                                    setActiveMenu(null);
                                    setActiveSubMenu(null);
                                    setActiveSubSubMenu(null);
                                    const isHashLink =
                                      subSubItem.href.startsWith("/#");
                                    if (isHashLink) {
                                      const id = subSubItem.href.split("#")[1];
                                      if (pathname === "/") {
                                        e.preventDefault();
                                        const element =
                                          document.getElementById(id);
                                        if (element) {
                                          element.scrollIntoView({
                                            behavior: "smooth",
                                          });
                                        }
                                      }
                                    } else {
                                      handleClick();
                                    }
                                  }}
                                >
                                  {subSubItem.name}
                                  {subSubItem.submenu && (
                                    <MdKeyboardArrowRight className="ml-2 text-white" />
                                  )}
                                </Link>

                                {activeSubSubMenu === subSubItem.name &&
                                  subSubItem.submenu && (
                                    <div className="absolute left-full top-0 bg-[#2b73d0f5] shadow-lg w-56 border border-slate-300 z-50 flex flex-col">
                                      {subSubItem.submenu.map(
                                        (subSubSubItem) => {
                                          const isSubSubSubActive =
                                            pathname.startsWith(
                                              subSubSubItem.href
                                            );
                                          return (
                                            <Link
                                              key={subSubSubItem.name}
                                              href={subSubSubItem.href}
                                              className={`block px-4 py-2 text-white hover:bg-[#fdfdfd] hover:text-[#2b63ab] text-base ${
                                                isSubSubSubActive
                                                  ? "bg-[#224276] text-[#ffffff]"
                                                  : ""
                                              }`}
                                              onClick={(e) => {
                                                setActiveMenu(null);
                                                setActiveSubMenu(null);
                                                setActiveSubSubMenu(null);
                                                const isHashLink =
                                                  subSubSubItem.href.startsWith(
                                                    "/#"
                                                  );
                                                if (isHashLink) {
                                                  const id =
                                                    subSubSubItem.href.split(
                                                      "#"
                                                    )[1];
                                                  if (pathname === "/") {
                                                    e.preventDefault();
                                                    const element =
                                                      document.getElementById(
                                                        id
                                                      );
                                                    if (element) {
                                                      element.scrollIntoView({
                                                        behavior: "smooth",
                                                      });
                                                    }
                                                  }
                                                } else {
                                                  handleClick();
                                                }
                                              }}
                                            >
                                              {subSubSubItem.name}
                                            </Link>
                                          );
                                        }
                                      )}
                                    </div>
                                  )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};



interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      closeMenu();
    }, 500);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchInput = inputRef.current?.value;
      if (searchInput) {
        setIsLoading(true);
        router.push(`/search/${encodeURIComponent(searchInput)}`);
        setTimeout(() => {
          setIsLoading(false);
          handleClose(); // Fechar o menu ao pesquisar
        }, 2000); // Esse tempo deve ser o suficiente para a animação de carregamento
      }
    }
  };

  const renderSubMenu = (items: NavItem[], level = 1) => (
    <div className={`pl-${level * 4} mt-2 text-center`}>
      {items.map((item) => (
        <div key={item.name} className="mb-2">
          {item.submenu ? (
            <div className="flex items-center justify-center w-full">
              <Link
                href={item.href}
                className="text-[#0037C1] text-lg font-normal hover:underline p-2 flex items-center gap-2"
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                    toggleMenu(item.name);
                  } else {
                    handleClose();
                  }
                }}
              >
                {item.name}
                {openMenus[item.name] ? (
                  <ChevronUpIcon className="h-5 w-5" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" />
                )}
              </Link>
            </div>
          ) : (
            <Link
              href={item.href}
              className="block w-full text-[#0037C1] text-lg font-normal hover:underline p-2 text-center"
              onClick={handleClose}
            >
              {item.name}
            </Link>
          )}
          {item.submenu &&
            openMenus[item.name] &&
            renderSubMenu(item.submenu, level + 1)}
        </div>
      ))}
    </div>
  );

  return (
    <>
      {isLoading && <LoadingScreen />}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        />
      )}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-yellow-400 shadow-lg flex flex-col"
        initial={{ y: "-100%" }}
        animate={{ y: isClosing ? "-100%" : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 50 }}
      >
        <div className="py-5 px-5 flex flex-col border-b border-gray-200">
          <div className="flex justify-between items-center">
            <Logo />
            <button onClick={handleClose} className="p-2 text-black text-2xl">
              ✕
            </button>
          </div>
        </div>
        <div className="p-4 flex-1 overflow-auto text-center">
          {renderSubMenu(navigation, 1)}
        </div>
        <div className="p-4 flex justify-center border-t border-gray-200">
          <div className="relative w-full max-w-md flex items-center bg-white px-4 py-2 rounded-full shadow-md">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Buscar"
              className="flex-1 px-2 text-gray-700 focus:outline-none"
              ref={inputRef}
              onKeyDown={handleSearch}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

interface SearchBarProps {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  hideIcon?: boolean;
}

const SearchBar = ({ setIsLoading, hideIcon = false }: SearchBarProps) => {
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const searchInput = inputRef.current?.value;
      if (searchInput) {
        setIsLoading(true);
        router.push(`/search/${encodeURIComponent(searchInput)}`);
        setTimeout(() => {
          setIsLoading(false);
          setIsSearching(false);
        }, 2000);
      }
    }
  };

  return (
    <>
      {!hideIcon && (
        <button
          onClick={() => setIsSearching(true)}
          className="text-[#0037C1] text-xl focus:outline-none"
          aria-label="Abrir busca"
        >
          <FaSearch />
        </button>
      )}

      {isSearching && (
        <div className="fixed inset-0 bg-[#010306c0] backdrop-blur-sm flex items-center justify-center z-50">
          <button
            className="fixed top-4 right-4 text-white text-4xl p-4 hover:text-gray-300 transition-colors duration-200"
            onClick={() => setIsSearching(false)}
          >
            &times;
          </button>

          <div className="relative w-full max-w-xl">
            <input
              type="text"
              name="search"
              placeholder="BUSCAR"
              className="bg-transparent text-white text-[20px] mt-20 text-center px-4 py-2 w-full border-b-2 border-gray-300 rounded-lg placeholder-white focus:outline-none focus:border-slate-300 focus:ring-0 focus:shadow-none"
              ref={inputRef}
              autoFocus
              onKeyDown={handleKeyPress}
            />
          </div>
        </div>
      )}
    </>
  );
};

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#FDC300] flex flex-col items-center justify-center z-50">
      <Image
        src="/images/Logo/logotop.png"
        alt="Carregando"
        width={150}
        height={110}
        className="animate-pulse"
      />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full transition-all duration-300 z-50 px-[50px] ${
        scrolled ? "bg-[#fdc200d1] shadow-md" : "bg-[#FDC300]"
      }`}
    >
      <div className="relative mx-auto py-3">
        <div className="relative flex h-14 items-center justify-between">
          <Logo />
          <div className="hidden 2xl:flex">
            <NavLinks />
          </div>
          <div className="hidden 2xl:flex">
            <SearchBar setIsLoading={setIsLoading} />{" "}
            {/* Passando setIsLoading */}
          </div>
          <div className="2xl:hidden">
            <Bars3Icon
              className="h-6 w-6 text-[#0037C1] cursor-pointer"
              aria-hidden="true"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        {isOpen && <MobileMenu closeMenu={closeMenu} />}
      </div>

      {/* Tela de carregamento exibida aqui enquanto isLoading for true */}
      {isLoading && <LoadingScreen />}
    </Disclosure>
  );
};

export default Navbar;
