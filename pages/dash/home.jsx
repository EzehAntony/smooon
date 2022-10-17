import React, { useEffect } from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import style from "../../styles/home.module.css";
import Image from "next/image";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Home({ data }) {
    const Router = useRouter();
    const session = useSession();
    console.log(session);

    return (
        <Layout>
            <div className={style.homePage}>
                <header>
                    <input type="text" placeholder="Search for Tiner" />
                    <Image width={25} height={25} src="/filter.svg" alt="" />
                </header>

                {/* div that holds the cards */}
                <div className={style.main}>
                    {data.reverse().map((d, k) => (
                        <Card key={k} id={d.id} name={d.username} state={d.state} age={d.dob} styles={d.styles} />
                    ))}
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/user", {
        method: "GET",
        withCredentials: true,
        headers: {
            "content-type": "application/json",
        },
    });

    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}

export default Home;
