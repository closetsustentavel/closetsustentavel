//import Image from "next/image";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
    </div>
  );
}
