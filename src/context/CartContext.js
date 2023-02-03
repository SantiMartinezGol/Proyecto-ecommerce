import { createContext, useState, useEffect} from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState ([])
    const [totalToPay, setTotalToPay] = useState (0)
    const [totalProductsAdded, setTotalProductsAdded] = useState (0)

    const addItem =(productToAdd) => {
        if(!isInCart (productToAdd.id)){
            setCart(prev => {
                return [...prev, productToAdd]
            })
        } else {
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProducts = {
                        ...prod,
                        qty: productToAdd.qty                  
                    }
                    return (
                        newProducts 
                        )
                } else {
                    return prod 
                }
            })
            setCart(newProducts)          
        }
    }

    const isInCart = (id) => cart.some (prod => id === prod.id)
    
    const updateTotalProductsAdded = () => {

        let accu = 0
        cart.forEach (prod => {
            accu+= prod.qty
        })
        setTotalProductsAdded(accu)
    }


    const updateTotalToPay  = () => {
        let total = 0
        cart.map (prod => {
        total += prod.price*prod.qty 
    })
    setTotalToPay(total)} 

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod =>prod.id !== id)
        setCart(products)
        }

    useEffect(() => {
        updateTotalToPay()
        updateTotalProductsAdded()
    },[cart,totalToPay,totalProductsAdded])

    return(
        <CartContext.Provider value={{addItem, isInCart, totalProductsAdded, cart, totalToPay, clearCart, removeItem
        }}>
             {children}
        </CartContext.Provider>
    )
}