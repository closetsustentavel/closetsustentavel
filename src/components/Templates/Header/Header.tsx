"use client";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import columnRight from "@/assets/columnRight.svg";
import Link from "next/link";
import { useState } from "react";
import Menu from "@/assets/hamburguer.png";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuHamburguer = () => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }
  };
  return (
    <header className="flex items-center ml-0 lg:ml-[80px]">
      <div className="flex justify-between items-center sm:w-screen">
        <div className="mr-25 sm:mr-0">
          <Image
            src={Logo}
            className="h-10 md:h-15 lg:h-20"
            alt="logoClosetSustentavel"
          />
        </div>
        <div className="nav_buttons hidden sm:flex">
          <nav className="">
            <ul className="flex gap-[30px] mr-[31px]">
              <li>
                <Link
                  href=""
                  className="3xl:text-3xl hover:text-[#DC5812] underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="3xl:text-3xl hover:text-[#DC5812]"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  className="3xl:text-3xl hover:text-[#DC5812]"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="3xl:text-3xl hover:text-[#DC5812]"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sm:hidden">
        <div onClick={menuHamburguer} className="block sm:hidden">
          <Image src={Menu} alt="menu" height={40} className=""></Image>
        </div>

        <div
          className={`absolute z-999 ${
            isOpen
              ? "absolute right-0 top-0 bg-[#6D3252] h-screen w-[90%] transition-opacity linear duration-1000 opacity-100"
              : "opacity-0"
          }`}
        >
          <nav>
            <ul
              className={`${isOpen ? "flex flex-col gap-5 p-10 text-[#f3f1e0]" : "hidden"}`}
            >
              <span onClick={menuHamburguer}>X</span>
              <li>
                <Link href="" onClick={menuHamburguer}>
                  Home
                </Link>
              </li>
              <hr />
              <li>
                <Link href="#about" onClick={menuHamburguer}>
                  Sobre
                </Link>
              </li>
              <hr />

              <li>
                <Link href="#products" onClick={menuHamburguer}>
                  Produtos
                </Link>
              </li>
              <hr />

              <li>
                <Link href="#contact" onClick={menuHamburguer}>
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative size-24 md:size-26 lg:size-32">
        <Image
          src={columnRight}
          alt="assetColumn"
          className="hidden top-0 right-0 sm:absolute sm:block"
        />
      </div>
    </header>
  );
}
