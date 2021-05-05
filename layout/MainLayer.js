import Link from "next/link";
import styles from "./MainLayer.module.css";

export default function MainLayer({ children }) {
    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                    <Link href={"/Works"}>
                        <a>Works</a>
                    </Link>
                    <Link href={"/Booking"}>
                        <a>Booking</a>
                    </Link>
                </header>
                <main className={styles.main}>  
                    {children}
                </main>
                <footer className={styles.footer}>
                    <h3>Footer</h3>
                </footer>
            </div>
        </>
    );
}
