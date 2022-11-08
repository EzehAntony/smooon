import Layout from "../../components/Layout";
import style from "../../styles/profile.module.css";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";

function Profile({ data }) {
    const router = useRouter();
    return (
        <Layout>
            <div className={style.profile}>
                <div className={style.userImg}>
                    <img src={data.picture} alt="" />
                    <img src={data.picture} alt="" />
                </div>

                <div className={style.action}>
                    <div className={style.image}>
                        <img src="/settings.svg" alt="" />
                    </div>

                    <button
                        onClick={() => {
                            router.push("/dash/profilesetup");
                        }}
                    >
                        <img src="/edit.svg" alt="" />
                        <p>edit info</p>
                    </button>
                </div>

                <div className={style.info}>
                    <h4>@{data.username}</h4>
                    <p>
                        <img src="/badge.svg" alt="" /> {data.firstname} {data.lastname}
                    </p>
                    <p>
                        <img src="/pin.svg" alt="" />
                        {data.state}
                    </p>

                    <div className={style.likes}>
                        <img src="/rheart.svg" alt="" />
                        {data.liked?.length < 100 ? `Liked users: ${data.liked.length}` : `Likes: 100+`}
                    </div>

                    <div className={style.event}>
                        <img src="/event.svg" alt="" />
                        {data.interest !== "" && data.interest.split(" ").map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                </div>

                <div className={style.bio}>
                    <span>about</span>
                    {data.bio}
                </div>

                <div className={style.gender}>
                    Gender <span>{data.gender}</span>
                </div>
            </div>
        </Layout>
    );
}
export default Profile;

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
