import Head from "next/head";
import Image from "next/image";
import styles from "../styles/start.module.css";
import { ClapSpinner } from "react-spinners-kit";
import { useEffect } from "react";
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/home");
    }, 3000);
  }, []);
  return (
    <div className={styles.container}>
      <img src="/logo.png" alt="" />
      <ClapSpinner size={25} frontColor={"white"} />
    </div>
  );
}
