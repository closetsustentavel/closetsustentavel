import Brecho from "@/assets/brecho.png";
import Analysis from "@/assets/color_analysis.png";
import MakeLook from "@/assets/make_look.png";
import Detox from "@/assets/detox.png";
import Luggage from "@/assets/luggage.svg";
import PersonalShopper from "@/assets/personal_shopper.png";
import { StaticImageData } from "next/image";
export type productType = {
  image: StaticImageData;
  title: string;
  description: string;
};

export const productData: productType[] = [
  {
    image: Brecho,
    title: "Brechó",
    description: "Curadoria atemporal contemporânea",
  },
  {
    image: Analysis,
    title: "Análise da Coloração",
    description: "Descubra as cores que realçam a sua beleza natural",
  },
  {
    image: MakeLook,
    title: "Montagem de Looks",
    description: "Descubra novos looks com o que você já tem no armário",
  },
  {
    image: Detox,
    title: "Detox de Armario",
    description: "Seu armário com peças funcionais para sua rotina",
  },
  {
    image: Luggage,
    title: "Mala Planejada",
    description:
      "Praticidade com looks definidos e mais espaço pra lembranças de viagem",
  },
  {
    image: PersonalShopper,
    title: "Personal Shopper ou Brechó",
    description: "Economize tempo e dinheiro fazendo compras assertivas",
  },
];
