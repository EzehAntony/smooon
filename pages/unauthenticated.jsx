import styles from "../styles/unauth.module.css";

const unauthenticated = () => {
    return (
        <div className={styles.unauthenticated}>
            <h1>Unauthenticated</h1>
        </div>
    );
};

export default unauthenticated;
