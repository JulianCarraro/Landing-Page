import { useState } from "react";
import { CartContext } from "./CartContext";

function CartProvider({ children }) {

    const [cart, setCart] = useState([]);
    const isInCart = (id) => cart.some(item => item.id === id)

    const addToCart = (product) => {
        if (isInCart(product.id)) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, count: item.count + product.count }
                    : item
            )
            setCart(updatedCart)
        } else {
            setCart([...cart, product])
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const increaseItem = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        );
        setCart(updatedCart);
    };

    const decreaseItem = (id) => {
        const updatedCart = cart
            .map((item) =>
                item.id === id
                    ? { ...item, count: item.count - 1 }
                    : item
            )
            .filter((item) => item.count > 0);
        setCart(updatedCart);
    };

    const getQuantity = () => {
        const quantities = cart.map(item => item.count)
        const total = quantities.reduce((acc, current) => acc + current, 0)

        return total
    }

    const getTotal = () => {
        const precios = cart.map(item => item.price * item.count)
        const total = precios.reduce((acc, current) => acc + current, 0)

        return total
    }

    const clearCart = () => setCart([])

    return (
        <CartContext.Provider value={{ addToCart, getQuantity, cart, getTotal, clearCart, removeItem, decreaseItem, increaseItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider