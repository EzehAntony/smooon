import React from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import style from "../../styles/home.module.css";
import Image from "next/image";
import { useState } from "react";

function Home({ data }) {
    const user = data.main;
    const [input, setInput] = useState("");
    console.log(input);
    return (
        <Layout>
            <div className={style.homePage}>
                <header>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Search for Tiner"
                    />
                    <Image width={25} height={25} src="/filter.svg" alt="" />
                </header>

                <div className={style.main}>
                    {data.users
                        .filter((e) => {
                            if (input === "") {
                                return e;
                            } else if (e.username.includes(input)) {
                                return e;
                            }
                        })
                        .reverse()
                        .map((d, k) => (
                            <Card
                                key={k}
                                id={d._id}
                                bio={d.bio}
                                picture={d.picture}
                                interest={d.interest}
                                name={d.username}
                                state={d.state}
                                age={d.dob}
                                styles={d.styles}
                                gender={d.gender}
                                user={user._id}
                            />
                        ))}
                </div>
            </div>
        </Layout>
    );
}
export default Home;

export async function getServerSideProps({ req }) {
    const res = await fetch("http://localhost:3000/api/homeusers", {
        method: "GET",
        withCredentials: true,
        headers: {
            "content-type": "application/json",
            cookie: req.headers.cookie,
        },
    });

    const data = await res.json();

    return {
        props: {
            data: data,
        },
    };
}
