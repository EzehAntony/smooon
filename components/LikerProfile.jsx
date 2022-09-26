import style from "../styles/LikerProfile.module.css";
function LikerProfile() {
  return (
    <div className={style.likerProfile}>
      <div className={style.userImg}>
        <img src="/girl.jpg" alt="" />
      </div>

      <div className={style.info}>
        <h4>Mariana Avinci</h4>
        <p>Los Angeles</p>
        <img src="/female.svg" alt="female" />
      </div>

      <div className={style.bio}>
        <span>about</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, numquam
        asperiores odio odit optio repudiandae cum nemo excepturi nam, deleniti
        suscipit? Doloremque voluptatibus quae architecto, error deleniti
        similique unde sapiente ullam cupiditate dolore, rerum ut cum velit.
        Veritatis maiores impedit ullam unde nobis. Ipsa cupiditate dolorum
        rerum libero laudantium ratione.
      </div>
      <hr />
    </div>
  );
}

export default LikerProfile;
