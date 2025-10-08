import styles from "../cart.module.css"
import { Link } from "react-router"
import arrow from "../leftArrow.svg"
export default function Empty() {
    return (<>
        <div className={styles.container}>
            <div className={styles.emptyContainer}>
                <p className={styles.p1}>Your Cart is Empty</p>
                <p className={styles.p2}>Looks like you haven't added any products to your cart yet.</p>
                <Link to="/shop" className={styles.button}>
                    <img className={styles.arrow} src={arrow}></img>
                    Continue Shopping
                </Link>
            </div>
        </div>
    </>)
}