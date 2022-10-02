import styles from "../../styles/signup.module.css";

const signup = () => {
  return (
    <div className={styles.main}>
      <img src="/logo.png" alt="" className={styles.logo} />

      <div className={styles.loginModal}>
        <h2>Sign up</h2>
        <h3>Hi there! Create an acoount to see other smoooners!</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Lastname" />
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="State" />
          <input type="text" placeholder="gender M/F" />
          <input type="date" placeholder="DD/MM/YY" />
          <input type="password" name="" placeholder="Password" />
          <input type="password" name="" placeholder="Confirm password" />
          <button className={styles.submitBtn} type="submit">
            Sign up
          </button>
        </form>
      </div>
      <img src="/womanWithAHeart.svg" className={styles.woman} alt="" />
    </div>
  );
};

export default signup;
