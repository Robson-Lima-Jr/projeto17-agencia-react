"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Topo from "@/components/Topo/page";
import Banner from "@/components/Banner/page";
import SecaoExperiencia from "@/components/SecaoExperiencia/page";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function mudarFundo() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <main>
      <Topo mudarTema={mudarFundo} darkMode={isDarkMode}/>

      <Banner />

      <SecaoExperiencia darkMode={isDarkMode}/>
    </main>
  );
}
