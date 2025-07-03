"use client";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
import columnRight from "@/assets/columnRight.svg";
export function Header() {
  return (
    <div className="flex items-center ">
      <div className="flex justify-between items-center w-screen">
        <div className="logo ml-[100px]">
          <Image src={Logo} alt="logoClosetSustentavel"/>
        </div>
        <div className="nav_buttons ">
          <nav className="">
            <ul className="flex gap-[30px] mr-[31px]">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Produtos</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="relative size-32">
        <Image
          src={columnRight}
          alt="assetColumn"
          className="absolute top-0 right-0 "
        />
      </div>
    </div>
  );
}
