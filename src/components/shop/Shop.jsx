import { useOutletContext } from 'react-router';
import cartImg from './card/cart.svg'
import styles from "./shop.module.css"
import Card from './card/card';
import { useEffect, useState } from 'react';

export default function Shop() {
    const [cart, setCart] = useOutletContext();
    const [items, setItems] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setItems(data)
                console.log(data)
            }).catch(
                error => console.log(error)
            );

    }
        , [])

    const onClick = (id, img, name, description, price) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { id, img, name, description, price, quantity: 1 }];
            }
        }
        );
    };
    return (<>
        <div className={styles.container}>
            <div className={styles.description}>
                <p>Shop All Products</p>
                <p>Browse our collection of premium products</p>
            </div>
            <div className={styles.shopList}>
                {items.map((item) => (
                    <Card
                        key={item.id}
                        img={item.image}
                        name={item.title}
                        description={item.description}
                        price={item.price}
                        onClick={() => onClick(item.id, item.image, item.title, item.description, item.price)}
                    ></Card>
                ))}

            </div>

        </div>
    </>)
}