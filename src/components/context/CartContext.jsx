import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let position = cart.findIndex((i) => i.id === item.id);
            cart[position].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, quantity: quantity }]);
        }
    };

    const removeItem = (id) => {
        const products = cart.filter((item) => item.id !== id);
        setCart([...products]);
    };

    const clear = () => {
        setCart([]);
    };

    const cartTotal = () => {
        return cart.reduce((acc, item) => (acc += item.quantity), 0);
    };

    const cartPrice = () => {
        return cart.reduce(
            (acc, item) => (acc += item.price * item.quantity),
            0
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clear, cartTotal, cartPrice }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
