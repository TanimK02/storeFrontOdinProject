import { useOutletContext } from "react-router"
import styles from "./cart.module.css"
import Empty from "./empty/Empty"
import CartList from "./cartList/CartList";
export default function Cart() {
    const [cart, setCart] = useOutletContext();
    return (<>
        {cart.length !== 0 ? <CartList></CartList> : <Empty />}
    </>)
}