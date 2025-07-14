"use client";
import Shop from "@/assets/window_shop_closet.svg";
import Image from "next/image";
import rowColumn from "@/assets/columnFeedbacks.svg";

export function About() {
  return (
    <div
      id="about"
      className="flex flex-col mt-50 h-full sm:gap-5 justify-center m-auto md:p-5 xl:ml-56  sm:flex-row lg:w-[700px] 3xl:w-screen"
      data-aos="fade-right"
    >
      <div className="flex flex-col w-screen">
        <div
          className="w-screen mt-20 sm:hidden"
          style={{
            backgroundImage: `url(${rowColumn.src})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "cover",
            height: "50px",
          }}
          data-aos="fade-right"
        ></div>
        <h3 className="text-3xl mb-[15px] p-5 sm:p-0 md:text-5xl 3xl:text-[100px]">
          Quem somos
        </h3>
        <div className="lg:flex md:items-center m-auto md:p-5 md:text-wrap md:gap-5 lg:p-0 ">
          <div className="flex h-80 w-full m-auto justify-center sm:h-[80vh] lg:hidden">
            <Image src={Shop} alt="Fachada Loja" />
          </div>
          <div className="p-5 m-auto w-2/3 md:p-0 lg:w-full">
            <p className="pb-5 3xl:text-[30px]">
              O Closet Sustentável é um brechó com consultoria de imagem
              especializada, oferecendo uma curadoria contemporânea e atemporal.
            </p>
            <p className="pb-5 3xl:text-[30px]">
              O atendimento é consultivo e personalizado, realizado por Ju
              Rezende, Consultora de Imagem.
            </p>
            <p className="3xl:text-[30px]">
              Além de encontrar peças de qualidade selecionadas com cuidado,
              você também pode contar com os serviços de consultoria de imagem,
              investindo em autoconhecimento para aprender a consumir de forma
              mais consciente, sustentável e alinhada ao seu estilo pessoal.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden h-[80vh] w-screen m-auto lg:flex 2xl:h-[800px]">
        <Image src={Shop} alt="Fachada Loja" />
      </div>
    </div>
  );
}
