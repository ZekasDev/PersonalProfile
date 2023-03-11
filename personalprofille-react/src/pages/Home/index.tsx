import { Sidebar } from "../../components/Sidebar";
import styles from "./Home.module.scss"

export function Home(){
    return(
        <section className={styles.home}>
            <div className={`${styles.home} ${styles.homeWrapper}`}>
                <Sidebar/>
            </div>
        </section>
    )
}