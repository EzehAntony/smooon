import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/minite.module.css";

function Minite({ data }) {
  //All smoon users
    const [allUsers, setAllUsers] = useState(null);

    //logged-in user liked array
    const likedUsers = data.liked;

    const FetchSmoonUsers = async () => {
        await axios({
            url: "http://localhost:3000/api/homeusers",
            method: "GET",
            withCredentials: true,
        })
            .then((res) => {
                setAllUsers(res.data.users);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        FetchSmoonUsers();
    }, []);

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
                    <img src="/heart.svg" alt="" />
                    <p>skip</p>
                </div>
            </div>
        </Layout>
    );
}

export default Minite;

export async function getServerSideProps({ req }) {
    const res = await fetch(`http://localhost:3000/api/profile`, {
        method: "GET",
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
