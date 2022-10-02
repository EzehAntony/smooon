import styles from '../../styles/login.module.css'

const signup = () => {
  return (
    <div className={styles.main}>
    <div className={styles.loginModal}>
        <h2>Sign up for an Account</h2>
        <h3>Hello, enter your details let's get you signed up on Smooon</h3>
        <form onSubmit={e => handleSubmit(e)}>
            
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name'/>
            <input type="text" placeholder='User Name'/>

            <label htmlFor="">Password</label>
            <input type="password" name="" placeholder='********' />

            <label htmlFor="">Confirm Password</label>
            <input type="password" name="" placeholder='********' />
            <input type="text" placeholder='Enter your location'/>
            <button className={styles.submitBtn} type="submit">
                Sign up
            </button>
        </form>
        <div className={styles.otherOptions}>
                - Or Sign in with -
        </div>
    </div>
</div>
  )
}

export default signup