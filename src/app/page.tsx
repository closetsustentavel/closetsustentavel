//import Image from "next/image";
import { Header } from "@/components/Templates/Header/Header";
import { Hero } from "@/components/Templates/Hero/Hero";
import { About } from "@/components/Templates/About/About";
import { Products } from "@/components/Templates/Products/Products";
export default function Home() {
  return (
    <div className="ml-[100px]">
      <Header/>
      <Hero/>
      <About/>
      <Products/>
    </div>
  );
}
