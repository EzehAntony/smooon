import style from "../../styles/profileSetup.module.css";
import { useRouter } from "next/router";

function Profilesetup() {
    const router = useRouter();
    const profileImg = () => {
        window.getElementById("file").click();
    };

    return (
        <div className={style.profileSetup}>
            <header>
                <img
                    onClick={() => {
                        router.back();
                    }}
                    src="/back.svg"
                    alt=""
                />
            </header>

            <p>profile setup</p>

            <div className={style.image}>
                <input type="file" name="" id="file" />
                <img src="/henessy.jpg" alt="" />
                <img src="/add.svg" alt="" onClick={profileImg()} />
            </div>

            <div className={style.inputGroup}>
                <input type="text" autoComplete="false" required />
                <label className={style.label}>
                    <span className={style.name}>name</span>
                </label>
            </div>

            <div className={style.inputGroup}>
                <input type={"date"} autoComplete="false" required />
                <label className={style.label}>
                    <span className={style.name}>date of birth</span>
                </label>
            </div>

            <div className={style.gender}>
                <h1>Gender</h1>
                <main>
                    <div>
                        <p>Female</p>
                        <input type="radio" value={"Hello"} name="gender" required />
                    </div>
                    <div>
                        <p>Male</p> <input type="radio" name="gender" required />
                    </div>
                </main>

                <button className={style.continue}>Continue</button>
            </div>
        </div>
    );
}

export default Profilesetup;
