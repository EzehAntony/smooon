import Layout from "../../components/Layout";
import styles from "../../styles/like.module.css";
import LikerProfile from "../../components/LikerProfile";

function Like({ data }) {
    return (
        <Layout>
            <div className={styles.like}>
                {data.map((d) => (
                    <LikerProfile data={d[0]} />
                ))}
            </div>
        </Layout>
    );
}

export default Like;
export async function getServerSideProps({ req }) {
    const res = await fetch("http://localhost:3000/api/likes", {
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
