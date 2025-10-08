import { useOutletContext } from "react-router";
import styles from "./cartlist.module.css"
import { Link } from "react-router";
import arrow from "./leftArrow.svg"
import Card from "./card/Card";
import { useState, useEffect } from "react";
export default function CartList() {
    const [cart, setCart] = useOutletContext();
    const removeItem = (id) => {

        setCart(cart.filter(item => item.id !== id))

    }
    const minus = (id) => {
        setCart(cart.map((item) => {
            if (item.id === id) {
                if (item.quantity <= 1) {
                    item.quantity = 1
                }
                else {
                    item.quantity = item.quantity - 1;
                }
            }
            return item
        }
        ))
    }
    const add = (id) => {
        setCart(cart.map((item) => {
            if (item.id === id) {
                item.quantity = item.quantity + 1;

            }
            return item
        }
        ))
    }
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(cart.reduce((acc, item) => acc + (item.price * item.quantity), 0))
    }, [cart])
    return (<>
        <div className={styles.container}>
            <p className={styles.yourCart}>Your Cart</p>
            <div className={styles.listContainer}>
                <div className={styles.cartList}>
                    {cart.map((item) => {
                        console.log(cart)
                        return (
                            <Card
                                key={item.id}
                                name={item.name}
                                id={item.id}
                                img={item.img}
                                price={item.price}
                                quantity={item.quantity}
                                onClick={() => removeItem(item.id)}
                                minus={() => minus(item.id)}
                                add={() => add(item.id)}
                            />
                        );
                    })}

                </div>
                <div className={styles.totalContainer}>
                    <div className={styles.subtotalContainer}>
                        <p className={styles.subtotalP}>Subtotal</p>
                        <p className={styles.subtotal}>${total.toFixed(2)}</p>
                    </div>
                    <p className={styles.extra}>Shipping and taxes calculated at checkout.</p>
                    <button className={styles.checkout}>Checkout</button>
                    <Link className={styles.continue} to="/shop">
                        <img className={styles.arrow} src={arrow}></img>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div >
    </>)
}