import { Link, Outlet } from "react-router"
import bag from "./bag-5-svgrepo-com.svg"
import styles from "./nav.module.css"
import { useLocation } from "react-router"
import { useState } from "react";
export default function Nav() {
    const location = useLocation();
    const [cart, setCart] = useState([]);
    return (<>
        <nav className={styles.nav} >
            <div>
                <Link to="/" className={styles.storeName}>RanStore</Link>
            </div>
            <div className={styles.secondDiv}>
                <Link
                    to="/"
                    className={`${styles.a} ${location.pathname === "/" ? styles.underline : ""}`}
                >Home</Link>
                <Link to="/shop"
                    className={`${styles.a} ${location.pathname === "/shop" ? styles.underline : ""}`}>Shop</Link>
                <Link to="/cart" className={styles.a}><img src={bag} className={styles.bag}></img></Link>
            </div>
        </nav >
        <Outlet context={[cart, setCart]}></Outlet>
    </>)
}