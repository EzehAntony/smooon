import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import style from "../styles/home.module.css";
import Image from "next/image";

function Home() {
  return (
    <Layout>
      <div className={style.homePage}>
        <header>
          <input type="text" placeholder="Search for Tiner" />
          <Image width={25} height={25} src="/filter.svg" alt="" />
        </header>

        {/* Main div that holds the cards */}
        <div className={style.main}>
          <Card />
        </div>
      </div>
    </Layout>
  );
}

export default home;
