import Image from "next/image";
import styles from "./page.module.css";
import "./../style/main.css"
import HomePage from "@/component/home/HomePage";
import WhyChooseUs from "@/component/home/WhyChooseUs";


export default function Home() {
  return (
    <>
      <HomePage />
      <WhyChooseUs />
    </>
  );
}
