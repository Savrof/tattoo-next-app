import MainLayer from "../layout/MainLayer"
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <MainLayer>
            <div>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <div className={styles.block}></div>
                        <div className={styles.block}>block</div>
                        <div className={styles.block}>block</div>
                    </main>
                </div>
            </div>
        </MainLayer>
    );
}
