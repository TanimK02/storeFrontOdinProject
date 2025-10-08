import Nav from '../../components/nav/Nav'
import styles from "./home.module.css"
import rightArrow from "./arrow.svg"
export default function Home() {
    return (<>
        <div className={styles.container}>
            <div className={styles.secContainer}>
                <p className={styles.p1}>Discover Quality Products for Everyday Life</p>
                <p className={styles.p2}>Explore our collection of carefully curated items designed to enhance your lifestyle.</p>
                <a className={styles.button}><p>Shop Now</p><img className={styles.arrow} src={rightArrow}></img></a>
            </div>
        </div>
    </>)
}