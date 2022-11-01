import axios from "axios";
import { useEffect } from "react";
import style from "../styles/LikerProfile.module.css";
function LikerProfile({ data }) {
    return (
        <div className={style.likerProfile}>
            <div className={style.userImg}>
                <img src="/girl.jpg" alt="" />
            </div>

            <div className={style.info}>
                <header>
                    <h4>
                        {data.firstname} {data.lastname}
                    </h4>
                    {data.gender === "m" ? <img src="/male.svg" alt="male" /> : <img src="/female.svg" alt="female" />}
                </header>
                <p>
                    <img src="/badge.svg" alt="" />
                    {data.username}
                </p>

                <p>
                    <img src="/edit.svg" alt="" />
                    {data.bio}
                </p>

                <p>
                    <img src="/pin.svg" alt="" />
                    {data.state}
                </p>

                <p>
                    <img src="/event.svg" alt="" />
                    {data.dob} ({2022 - data.dob.split("-")[0]})
                </p>
            </div>
        </div>
    );
}

export default LikerProfile;
