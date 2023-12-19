"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  // {
  //   title: "About",
  //   path: "/about",
  // },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="max-w-[1260px] mx-auto">
      <nav className="flex justify-between py-4 px-8  ">
        <div className="flex items-center gap-5">
          <h3 className="text-3xl md:text-4xl font-black">
            <Link href="/">impact.</Link>
          </h3>
        </div>

        <div className="mobile-menu block md:hidden">
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-slate-800 hover:border-slate-800"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-slate-800 hover:border-slate-800"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={"/"} alt="alt" />
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>

        {isOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    </header>
  );
}
