import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaSearch } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Sobre", href: "#sobre", current: false },
  { name: "Eventos", href: "#eventos", current: false },
  { name: "Galeria", href: "#galeria", current: false },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolled ? "bg-[#8558a7c7] shadow-md" : "bg-[#8558a7]"
      }`}
    >
      <div className="relative mx-auto max-w-7xl p-2 md:p-3 lg:px-8">
        <div className="relative flex h-8 sm:h-12 items-center justify-between">
          {/* Fundo branco atrás da logo */}
          <div className="relative flex items-center justify-center px-[30px] h-[100px] bg-white rounded-b-2xl shadow-md z-0">
            <div className="pt-2">
              {/* LOGO */}
              <Link href="/" className="relative z-10">
                <Image
                  className="block lg:hidden"
                  src="/images/Logo/logo-principal.png"
                  alt="Logo"
                  height={20}
                  width={180}
                />
              </Link>
              <Link href="/" className="relative z-10">
                <Image
                  className="hidden lg:block"
                  src="/images/Logo/logo-principal.png"
                  alt="Logo"
                  height={32}
                  width={250}
                />
              </Link>
            </div>
          </div>

          {/* LINKS */}
          <div className="hidden lg:flex items-center">
            <div className="flex space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900"
                      : "navlinks hover-underline after:bg-white",
                    "px-3 py-18 rounded-md text-lg font-normal"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <span className="text-white ">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* SEARCH ICON */}
          <div className="hidden lg:flex items-center relative">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-white text-xl focus:outline-none"
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

          {/* DRAWER FOR MOBILE VIEW */}
          <div className="block lg:hidden">
            <Bars3Icon
              className="h-6 w-6 text-white cursor-pointer"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* DRAWER LINKS DATA */}
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
          </Drawer>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
