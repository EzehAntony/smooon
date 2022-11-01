import Layout from "../../components/Layout";
import styles from "../../styles/like.module.css";
import LikerProfile from "../../components/LikerProfile";
import { useRouter } from "next/router";

function Like({ data }) {
    const router = useRouter();
    return (
        <Layout>
            <div className={styles.like}>
                {data.length === 0 && (
                    <div className={styles.prompt}>
                        You have not liked any user! <br />
                        <button onClick={(e) => {
                            e.preventDefault()
                            router.push("/dash/home")
                        }}>View Users</button>
                    </div>
                )}
                {data.reverse().map((d) => (
                    <LikerProfile data={d[0]} />
                ))}
            </div>
        </Layout>
    );
}

export default Like;
export async function getServerSideProps({ req }) {
    const res = await fetch("https://smooon.vercel.app/api/likes", {
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
