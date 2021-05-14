import MainLayer from "../layout/MainLayer"
import styles from "../styles/Home.module.css";
import Image from 'next/image';

export default function Home() {
    return (
        <MainLayer>
            <div>
                <div className={styles.container}>
                    <main className={styles.main}>
                        <div className={styles.block}>
                            <Image 
                                src="/../public/main-1.jpg"
                                alt="Picture of tattoo work"
                                layout="responsive"
                                width={850}
                                height={300}
                                />
                        </div>
                        <div className={styles.block}>
                            <Image 
                                src="/../public/main-2.jpg"
                                alt="#"
                                layout="responsive"
                                width={840}
                                height={300}
                                />
                        </div>
                        <div className={styles.block}>
                            <Image  
                                src="/../public/main-3.jpg"
                                alt="#"
                                layput="responsive"
                                width={850}
                                height={300}
                                />
                        </div>
                    </main>
                </div>
            </div>
        </MainLayer>
    );
}
