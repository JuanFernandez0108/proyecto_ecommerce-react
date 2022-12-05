import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, count) => {
        // preguntar si item ya existe en el array (si ya existe no colocarlo)
        // si no existe recien ahi colocar el item
        if (isInCart(item.id)) {
            setCart(cart.map(producto => {
                return producto.id === item.id ? { ...producto, count: producto.count + count } : producto
            }));
        } else {
            setCart ([...cart, { ...item, count }]);
       }
  
  }
  const isInCart = (id) => cart.find(item => item.id === id) ? true: false;
    const removeList = () => {
        setCart([]);
    }

    const deleteItem = (id) => {
        let resultado = cart.filter(item => item.id !== id);
        setCart(resultado);
    }

    const calcTotalPerItem = (id) => {
        let index = cart.map(item => item.id).indexOf(id);
        return cart[index].precio * cart[index].count;
    }

    const calcSubTotal = () => {
        let totalPerItem = cart.map(item => calcTotalPerItem(item.id));
        return totalPerItem.reduce(((previousValue, currentValue) => previousValue + currentValue),0);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        return cart.reduce(((acc, producto) => acc + producto.count), 0);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeList, deleteItem, calcItemsQty, calcTotal, calcSubTotal, calcTotalPerItem}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;