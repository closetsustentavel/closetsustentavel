"use client";
import Image from "next/image";
import columnBottom from "@/assets/columnBottom.svg";
import Logo from "@/assets/Logo.svg";
import Instagram from "@/assets/instagram_logo.svg"
export function Footer() {
  return (
    <div className="mt-30">
      <div className="flex flex-col justify-center items-center w-screen gap-5">
        
        <div className="flex flex-col justify-center items-center gap-3">
          <Image alt="logo" src={Logo}></Image>
          <p>
            <strong className="text-3xl">Substitua consumo</strong> por autoestima!
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <a href="" className="pr-5 underline">Home</a>
          <a href="" className="pr-5">Sobre</a>
          <a href="" className="pr-5">Produtos</a>
          <a href="" className="">Contato</a>
        </div>
        <div className="pt-5">
            <address>Shopping do Farol - R. Carlos Drumond de Andrade, 166 - 1° andar, sala 123 - Itapuã, Salvador - BA, 41610-031</address>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p>siga-nos</p>
            <Image alt="instagramLogo" src={Instagram}></Image>
        </div>
        <div className="text-center flex flex-col justify-center">
            <div className="h-[1px] bg-[#ccc] w-[90vw]"></div>
                <span className="text-center text-1xl p-5">Desenvolvido por Davi Belo</span>
        </div>
      </div>
       <div className="relative ">
        <Image
          alt="columnBottom"
          src={columnBottom}
          className="absolute left-0 bottom-0"
          height={450}
        ></Image>
      </div>
       
    </div>
  );
}
