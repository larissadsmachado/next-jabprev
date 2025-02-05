import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import Image from "next/image";

interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
    return (
        <main
            className={
                "fixed inset-0 z-10 bg-black bg-opacity-50 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-y-0 "
                    : " transition-all delay-500 opacity-0 -translate-y-full ")
            }
        >
            <section
                className={
                    "w-full h-full mx-auto shadow-xl delay-400 duration-500 ease-in-out transition-all transform bg-[#8558a7c0] " +
                    (isOpen ? "translate-y-0" : "-translate-y-full")
                }
            >
                <article className="relative w-full h-full pb-10 flex flex-col space-y-6">
                    <header className="px-4 py-4 flex items-center justify-between bg-gray-800 text-white">
                        <div className="flex flex-shrink-0 items-center bg-white p-4 rounded-b-2xl">
                            <Image
                                className="block h-10"
                                src={'/images/Logo/logo-principal.png'}
                                alt="Logo"
                                width={180}
                                height={80}
                            />
                        </div>
                        <XMarkIcon 
                            className="block h-6 w-6 cursor-pointer"
                            onClick={() => setIsOpen(false)} 
                        />
                    </header>
                    <div className="flex-1 overflow-auto p-4" onClick={() => setIsOpen(false)}>{children}</div>
                </article>
            </section>
            <section
                className="absolute inset-0 w-screen h-screen cursor-pointer"
                onClick={() => setIsOpen(false)}
            ></section>
        </main>
    );
}

export default Drawer;
