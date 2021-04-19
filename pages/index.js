import styles from "../styles/Home.module.css";
import Image from "next/image"

export default function Home() {
    return (
        <>
            <div className={styles.container}>
                {/* //TODO: header и структурой наflex */}
                <nav className={styles.nav}>
                    <a>Home</a>
                    <a>Works</a>
                    <a>Booking</a>
                </nav>

                <main className={styles.main}>
                      <div className={styles.block}>
                      </div>
                      <div className={styles.block}>block</div>
                      <div className={styles.block}>block</div>
                </main>

                <footer className={styles.footer}></footer>
            </div>
        </>
    );
}
