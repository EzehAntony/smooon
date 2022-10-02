import styles from "../../styles/login.module.css";
import Snowfall from "react-snowfall";

const index = () => {
  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <div className={styles.main}>
      <img src="/logo.png" alt="" className={styles.logo} />
      <div className={styles.loginModal}>
        <h2>Login</h2>
        <h3>Enter your details to get signed in to your account</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Enter Email/ Phone Num" />
          <input type="password" name="" placeholder="********" />
          <button>Having trouble signing in?</button>
          <br />
          <button className={styles.submitBtn} type="submit">
            Sign in
          </button>
        </form>
      </div>

      <img src="/womanWithAHeart.svg" className={styles.woman} alt="" />
      <Snowfall color="#F62355" />
    </div>
  );
};

export default index;
