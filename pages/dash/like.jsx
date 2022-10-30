import Layout from "../../components/Layout";
import LikerProfile from "../../components/LikerProfile";

function Like({ data }) {
    return (
        <Layout>
            <div>
                {data.map((d) => (
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
