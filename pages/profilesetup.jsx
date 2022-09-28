import style from "../styles/profileSetup.module.css";
import { useRouter } from "next/router";

function profilesetup() {
  const router = useRouter();
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
        <img src="/henessy.jpg" alt="" />
        <img src="/add.svg" alt="" />
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
      </div>
    </div>
  );
}

export default profilesetup;
