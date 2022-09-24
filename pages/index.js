import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smoon</title>
        <meta name="description" content="Find me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
