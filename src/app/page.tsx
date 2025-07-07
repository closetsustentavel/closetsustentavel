//import Image from "next/image";
import { Header } from "@/components/Templates/Header/Header";
import { Hero } from "@/components/Templates/Hero/Hero";
import { About } from "@/components/Templates/About/About";
import { Products } from "@/components/Templates/Products/Products";
import { Feedbacks } from "@/components/Templates/Feedbacks/Feedbacks";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Products/>
      <Feedbacks/>
    </div>
  );
}
