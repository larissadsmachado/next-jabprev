import React, { useState } from "react";
import Link from "next/link";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Sobre', href: '#sobre', current: false },
    { name: 'Eventos', href: '#eventos', current: false },
    { name: 'Galeria', href: '#galeria', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

const Data = () => {

  return (
    <div className="rounded-md max-w-sm w-full">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-purple' : 'text-white hover:bg-gray-700 text-center hover:text-purple',
                  'block py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
