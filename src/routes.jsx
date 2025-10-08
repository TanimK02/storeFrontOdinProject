import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import Shop from "./components/shop/Shop";

const routes = [
    {
        path: "/",
        element: <Nav></Nav>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/shop",
                element: <Shop></Shop>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            }
        ]
    },


]

export default routes