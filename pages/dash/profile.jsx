import Layout from "../../components/Layout";
import style from "../../styles/profile.module.css";
import { useRouter } from "next/router";

function Profile() {
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
          <h4>Mariana Avinci</h4>
          <p>Los Angeles</p>

          <div className={style.education}>
            <img src="/education.svg" alt="" />
            studied at guentag, germany
          </div>
          <div className={style.event}>
            <img src="/event.svg" alt="" />
            reading, eating and sleeing
          </div>
        </div>

        <div className={style.bio}>
          <span>about</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
          numquam asperiores odio odit optio repudiandae cum nemo excepturi nam,
          deleniti suscipit? Doloremque voluptatibus quae architecto, error
          deleniti similique unde sapiente ullam cupiditate dolore, rerum ut cum
          velit. Veritatis maiores impedit ullam unde nobis. Ipsa cupiditate
          dolorum rerum libero laudantium ratione.
        </div>

        <hr />
        <div className={style.gender}>
          Gender <span>Female</span>
        </div>
        <hr />
      </div>
    </Layout>
  );
}

export default Profile;
