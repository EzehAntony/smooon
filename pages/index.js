import Head from "next/head";
import Image from "next/image";
import styles from "../styles/start.module.css";
import { ClapSpinner } from "react-spinners-kit";

export default function Home() {
  return (
    <div className={styles.container}>
        <img src="/logo.png" alt="" />
        <ClapSpinner size={25} frontColor={"white"} />
    </div>
  );
}
