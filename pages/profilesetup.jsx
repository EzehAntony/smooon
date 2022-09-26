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
        <p>profile setup</p>
      </header>

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

      <select className={style.gender}>
        <option value="0">Gender</option>
        <option value="1">Male</option>
        <option value="2">Female</option>
      </select>
    </div>
  );
}

export default profilesetup;
