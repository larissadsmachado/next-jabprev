"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

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
      { name: "O que é o JaboatãoPrev", href: "#" },
      { name: "Missão, visão e valores", href: "#" },
      { name: "A equipe JaboatãoPREV", href: "#" },
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
          { name: "Atas do Conselho Deliberativo", href: "#" },
          { name: "Atas do Conselho Fiscal", href: "#" },
        ],
      },
      { name: "Notícias", href: "#" },
    ],
  },
  { name: "Financeiro", href: "#", submenu: [{ name: "Fotos", href: "#" }] },
];

const Logo = () => (
  <div className="relative flex items-center justify-center px-[30px] h-[100px] bg-white rounded-b-2xl shadow-md z-0">
    <Link href="/">
      <Image
        src="/images/Logo/logo-longa.png"
        alt="Logo"
        height={20}
        width={220}
        className="hidden lg:block pt-2"
      />
    </Link>
  </div>
);

const NavLinks = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

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
          }}
        >
          <Link
            href={item.href}
            className="text-[#0037C1] text-base hover:underline font-semibold"
          >
            {item.name}
          </Link>

          {activeMenu === item.name && item.submenu && (
            <div className="absolute left-0 bg-[#0037C1] shadow-lg py-2 w-56 border border-white z-50">
              {item.submenu.map((subItem) => (
                <div
                  key={subItem.name}
                  className="relative group"
                  onMouseEnter={() => setActiveSubMenu(subItem.name)}
                  onMouseLeave={() => setActiveSubMenu(null)}
                >
                  <Link
                    href={subItem.href}
                    className="block px-4 py-2 text-[#ffffff] hover:bg-[#0055C1] text-base"
                  >
                    {subItem.name}
                  </Link>

                  {/* Submenu do submenu (lateral) */}
                  {activeSubMenu === subItem.name && subItem.submenu && (
                    <div className="absolute left-full top-0 bg-[#0037C1] shadow-lg py-2 w-56 border border-white z-50">
                      {subItem.submenu.map((subSubItem) => (
                        <Link
                          key={subSubItem.name}
                          href={subSubItem.href}
                          className="block px-4 py-2 text-[#ffffff] hover:bg-[#0055C1] text-base"
                        >
                          {subSubItem.name}
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
  );
};

const MobileMenu = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="lg:hidden p-4">
      {navigation.map((item) => (
        <div key={item.name} className="mb-2">
          <button
            onClick={() => toggleMenu(item.name)}
            className="w-full flex justify-between text-[#0037C1] text-lg font-normal hover:underline"
          >
            {item.name}
            {openMenus[item.name] ? (
              <ChevronUpIcon className="h-5 w-5" />
            ) : (
              <ChevronDownIcon className="h-5 w-5" />
            )}
          </button>
          {openMenus[item.name] && item.submenu && (
            <div className="pl-4 mt-2">
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  {subItem.name}
                </Link>
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
      <div className="relative mx-auto max-w-7xl p-2 md:p-3 lg:px-8">
        <div className="relative flex h-8 sm:h-12 items-center justify-between">
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
