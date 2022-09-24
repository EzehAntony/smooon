import React from "react";
import Card from "../components/Card";
import style from "../styles/home.module.css";

function home() {
  return (
    <div className={style.homePage}>
      <header>
        <input type="text" placeholder="Search for Tiner" />
        <img src="/filter.svg" alt="" />
      </header>

      {/* Main div that holds the cards */}
      <div className={style.main}>
        <Card />
      </div>
    </div>
  );
}

export default home;
