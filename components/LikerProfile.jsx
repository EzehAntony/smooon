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
                <h4>
                    {data.firstname} {data.lastname}
                </h4>
                <p>{data.state} </p>
                <img src="/female.svg" alt="female" />
            </div>

            <div className={style.bio}>
                <span>about</span>
                {data.bio}
            </div>
            <hr />
        </div>
    );
}

export default LikerProfile;
