import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        // preguntar si item ya existe en el array (si ya existe no colocarlo)
        // si no existe recien ahi colocar el item
        let encontrado = cartList.find(product => product.id === item.id);
        if ( encontrado === undefined) {
            setCartList([
                ...cartList,
                {
                    id: item.id,
                    imagen: item.imagen[0],
                    titulo: item.titulo,
                    precio: item.precio,
                    qtyItem: qty
                }
            ]);
        } else {
            // si fue encontrado se aumenta el qty del producto
            encontrado.qtyItem += qty;
        }
    }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let resultado = cartList.filter(item => item.idItem !== id);
        setCartList(resultado);
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qty);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, calcItemsQty}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;