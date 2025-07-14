"use client";
import Image from "next/image";
import columnBottom from "@/assets/columnBottom.svg";
import Logo from "@/assets/Logo.svg";
import Instagram from "@/assets/instagram_logo.svg";
import Whatsapp from "@/assets/whatsapp.svg";
import Link from "next/link";
export function Footer() {
  return (
    <div id="contact" className="mt-30">
      <div className="flex flex-col justify-center items-center w-screen gap-5">
        <div className="flex flex-col justify-center items-center gap-3">
          <Image alt="logo" src={Logo} className="h-15 md:h-full"></Image>
          <p>
            <strong className="text-1xl md:text-3xl">Substitua consumo</strong>
             por autoestima!
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <Link href="" className="pr-5 underline">
            Home
          </Link>
          <Link href="#about" className="pr-5">
            Sobre
          </Link>
          <Link href="#products" className="pr-5">
            Produtos
          </Link>
          <Link href="#contact" className="">
            Contato
          </Link>
        </div>
        <div className="pt-5 text-center sm:w-1/2 lg:w-full">
          <address>
            Shopping do Farol - R. Carlos Drumond de Andrade, 166 - 1° andar,
            sala 123 - Itapuã, Salvador - BA, 41610-031
          </address>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>siga-nos</p>
          <Link href="https://www.instagram.com/closetssa_" target="_blank">
            {" "}
            <Image alt="instagramLogo" src={Instagram}></Image>
          </Link>
        </div>
        <div className="text-center flex flex-col justify-center">
          <div className="h-[1px] bg-[#ccc] w-[90vw]"></div>
          <span className="text-center text-1xl p-5">
            Desenvolvido por Davi Belo
          </span>
        </div>
      </div>
      <div className="relative hidden md:block ">
        <Image
          alt="columnBottom"
          src={columnBottom}
          className="absolute left-0 bottom-0"
          height={450}
        ></Image>
      </div>
      <div className="relative ">
        <Link
          target="_blank"
          href="https://wa.me/5571982302442?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20ter%20algumas%20informa%C3%A7%C3%B5es."
        >
          <Image
            alt="Whatsapp"
            src={Whatsapp}
            className=" fixed right-0 bottom-10"
            height={50}
          ></Image>
        </Link>
      </div>
    </div>
  );
}
