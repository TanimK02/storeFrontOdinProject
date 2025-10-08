import styles from "../shop.module.css"
import cartImg from "./cart.svg"
export default function Card({ img, name, description, price, onClick = () => { } }) {
    return (<>
        <div className={styles.card}>
            <div className={styles.mainImg} style={{ backgroundImage: `url(${img})` }}></div>
            <div className={styles.cardDesc}>
                <p className={styles.p1}>{name}</p>
                <p className={styles.p2}>{description}</p>
                <div className={styles.purchContainer}>
                    <p className={styles.price}>${price.toFixed(2)}</p>
                    <button onClick={onClick} className={styles.button}>
                        <img src={cartImg} className={styles.cart}></img>
                        <p className={styles.p3}>Add to Cart</p>
                    </button>
                </div>
            </div>
        </div >
    </>)
}