import React from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/minite.module.css";

function Minite() {
  return (
    <Layout>
      <div className={styles.minite}>
        <h1>
          Bingo!! <span>Your smooon found</span>{" "}
        </h1>
        <div className={styles.circle_1}>
          <img src="/henessy.jpg" className={styles.userImg} alt="" />
          <img src="/girl.jpg" className={styles.miniteImg} alt="" />
          <div className={styles.circle_2}>
            <div className={styles.circle_3}></div>
          </div>
        </div>
        <div className={styles.skip}>
          <img src="/message_active.svg" alt="" />
          <p>skip</p>
        </div>
      </div>
    </Layout>
  );
}

export default Minite;
