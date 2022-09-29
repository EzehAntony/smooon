import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import style from "../styles/home.module.css";
import Image from "next/image";

function Home() {
  const data = [
    { name: "Avinci Morgan", state: "Oklahoma", age: 24 },
    {
      name: "Chris Yager",
      state: "Lagos",
      age: 42,
    },
    { name: "Avinci Eren", state: "San Fransisco", age: 30 },
    { name: "Mariana Santos", state: "Peru", age: 22 },
    { name: "Jennifer Mage", state: "Manchester", age: 30 },
  ];
  return (
    <Layout>
      <div className={style.homePage}>
        <header>
          <input type="text" placeholder="Search for Tiner" />
          <Image width={25} height={25} src="/filter.svg" alt="" />
        </header>

        {/* Main div that holds the cards */}
        <div className={style.main}>
          {data.reverse().map((d, k) => (
            <Card
              key={k}
              name={d.name}
              state={d.state}
              age={d.age}
              styles={d.styles}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
