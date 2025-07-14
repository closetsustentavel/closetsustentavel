//import Image from "next/image";
import { Header } from "@/components/Templates/Header/Header";
import { Hero } from "@/components/Templates/Hero/Hero";
import { About } from "@/components/Templates/About/About";
import { Products } from "@/components/Templates/Products/Products";
import { Feedbacks } from "@/components/Templates/Feedbacks/Feedbacks";
import { Faq } from "@/components/Templates/Faq/Faq";
import { Brands } from "@/components/Templates/Brands/Brands";
import { Footer } from "@/components/Templates/Footer/Footer";

export default function Home() {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Products />
      <Feedbacks />
      <Faq />
      <Brands />
      <Footer />
    </div>
  );
}
