
import { useState, createContext } from "react";
import { currencyFormatter } from "../utils/formatting";

// export const CartContext = createContext();

export const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addToCart: () => { }
});


export default function CartContextProvider({ children }) {

    const [shoppingCart, setShoppingCart] = useState({
        items: [],
    });


    function addToCart(meal, op = '+') {
        const Exist = shoppingCart.items.findIndex((item) => item.id === meal.id);
        if (Exist != -1) {  // meal exist in cart
            const updatedItems = [...shoppingCart.items]

            switch (op) {
                case '+': updatedItems[Exist].count += 1;
                    break;
                case '-': updatedItems[Exist].count <= 1 ? updatedItems.splice(Exist, 1) : updatedItems[Exist].count -= 1
                    break;
                default:
                    updatedItems[Exist].count += 1;
            }

            setShoppingCart((prevCart) => (
                {
                    ...prevCart,
                    items: updatedItems,
                }
            ));
        }

        else {             // meal not exist in cart
            setShoppingCart((prevCart) => (
                {
                    ...prevCart,
                    items: [...prevCart.items, { ...meal, count: 1 }],
                }
            ));
        }
    };

    function resetCart() {
        setShoppingCart((prevCart) => (
            {
                ...prevCart,
                items: [],
            }
        ));
        contextValue.items = [];
        contextValue.totalAmount = 0;
    }


    const contextValue = {
        items: shoppingCart.items,
        totalAmount: shoppingCart.items.reduce((total, item) => (+item.price * item.count) + total, 0),
        addToCart,
        resetCart
    }



    return <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
};


