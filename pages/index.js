import Header from "../layout/Header.js"
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <Header>
            <div>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <div className={styles.block}></div>
                        <div className={styles.block}>block</div>
                        <div className={styles.block}>block</div>
                    </main>

                    <footer className={styles.footer}></footer>
                </div>
            </div>
        </Header>
    );
}
