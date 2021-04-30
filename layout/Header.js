import Link from "next/link";
import styles from "./Header.module.css";


export default function HeaderLayer({ children }) {
    return (
        <>
            <header>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <Link href={"/"}>
                            <a>Home</a>
                        </Link>
                        <Link href={"/Works"}>
                            <a>Works</a>
                        </Link>
                        <Link href={"/Booking"}>
                            <a>Booking</a>
                        </Link>
                        
                    </nav>
                </div>
            </header>
            <main>
                {children}
            </main>
        </>
    )
}

