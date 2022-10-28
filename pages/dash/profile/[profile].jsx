import Layout from "../../../components/Layout";
import style from "../../../styles/profile.module.css";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import axios from "axios";
import { NextResponse } from "next/server";

function Profile({ data }) {
    NextResponse.rewrite("http://localhost:3000/unauthenticated");
    const router = useRouter();
    return (
        <Layout>
            <div className={style.profile}>
                <div className={style.userImg}>
                    <img src="/girl.jpg" alt="" />
                </div>

                <div className={style.action}>
                    <div className={style.image}>
                        <img src="/settings.svg" alt="" />
                    </div>

                    <button
                        onClick={() => {
                            router.push("/profilesetup");
                        }}
                    >
                        <img src="/edit.svg" alt="" />
                        <p>edit info</p>
                    </button>
                </div>

                <div className={style.info}>
                    <h4>@{data?.username}</h4>
                    <p>
                        {data?.firstname} {data?.lastname}
                    </p>
                    <p>{data?.state}</p>

                    <div className={style.likes}>
                        <img src="/rheart.svg" alt="" />
                        {data?.interest?.length < 100 ? `Likes: ${data?.interest.length}` : `Likes: 100+`}
                    </div>
                    <div className={style.education}>
                        <img src="/education.svg" alt="" />
                        {data?.education !== "" ? data?.education : "Not Set"}
                    </div>
                    <div className={style.event}>
                        <img src="/event.svg" alt="" />
                        {data?.interest?.length < 1
                            ? "Not set"
                            : data?.interest?.map((i, index) => <p key={index}>{i}</p>)}
                    </div>
                </div>

                <div className={style.bio}>
                    <span>about</span>
                    {data?.bio}
                </div>

                <hr />
                <div className={style.gender}>
                    Gender <span>{data?.gender}</span>
                </div>
                <hr />
            </div>
        </Layout>
    );
}
export default Profile;

export async function getServerSideProps({ query, req }) {
    const { profile } = query;
    const res = await fetch(`http://localhost:3000/api/oneuser/${profile}`, {
        method: "GET",
        credentials: true,
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
