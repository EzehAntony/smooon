import styles from '../../styles/login.module.css'

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
                <button type="submit">
                    Sign in
                </button>
            </form>
        </div>
    </div>
  )
}

export default index
