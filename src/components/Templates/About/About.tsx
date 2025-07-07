"use client";
import Shop from "@/assets/window_shop_closet.svg";
import Image from "next/image";
export function About() {
  return (
    <div className="flex flex-row ml-[355px] mt-50 w-[700px] h-full gap-5 ">
      <div className="flex flex-col">
        <h3 className="text-[52px] mb-[15px]">Quem somos</h3>
        <div className="">
          <p className="pb-5">
            O Closet Sustentável é um brechó com consultoria de imagem
            especializada, oferecendo uma curadoria contemporânea e atemporal.
          </p>
          <p className="pb-5">
            O atendimento é consultivo e personalizado, realizado por Ju
            Rezende, Consultora de Imagem.
          </p>
          <p className="">
            Além de encontrar peças de qualidade selecionadas com cuidado, você
            também pode contar com os serviços de consultoria de imagem,
            investindo em autoconhecimento para aprender a consumir de forma
            mais consciente, sustentável e alinhada ao seu estilo pessoal.
          </p>
        </div>
      </div>
      <div className="h-full w-[800px] flex mt-auto">
        <Image src={Shop} alt="Fachada Loja" />
      </div>
    </div>
  );
}
