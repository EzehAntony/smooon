import styles from '../../styles/login.module.css'
import Script from 'next/script'

const index = () => {
    const handleSubmit = ()=> {
        e.preventDefault()
    }
  return (

    <div className={styles.main}>
        <div className={styles.loginModal}>
            <h2>User Login</h2>
            <h3>Hey, Enter your details to get signed in to your account</h3>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" placeholder='Enter Email/ Phone Num'/>
                <input type="password" name="" placeholder='********' />
                <button>Having trouble signing in?</button><br />
                <button className={styles.submitBtn} type="submit">
                    Sign in
                </button>
            </form>
            <div className={styles.otherOptions}>
                    - Or Sign in with - <br />
                <div>
                    <span>
                     <i className="fa-brands fa-facebook"></i>
                    </span>
                    <span><i className="fa-brands fa-google"></i></span>
                    <span><i className="fa-brands fa-apple"></i></span>
                </div> <br />

                Don't have an account? <button>Register Now</button>
            </div>
        </div>
        <Script src="https://kit.fontawesome.com/4ef8c63dd7.js" crossorigin="anonymous"></Script>
    </div>
  )
}

export default index
