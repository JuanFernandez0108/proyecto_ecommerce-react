import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        // preguntar si item ya existe en el array (si ya existe no colocarlo)
        // si no existe recien ahi colocar el item
        let encontrado = cartList.find(product => product.id === item.id);
        if (encontrado) {
        const carritoActualizado = cartList.map((prod)=>{
            if(prod.id === item.id){
                return {...prod, qty: prod.qtyItem + qty}
            }
           })
           setCartList(carritoActualizado)
        
        } else {
        // si fue encontrado se aumenta el qty del producto
        setCartList([
            ...cartList,
            {
            id: item.id,
            imagen: item.imagen,
            titulo: item.titulo,
            precio: item.precio,
            qtyItem: qty,
            }
        ])
        }
        }

    const removeList = () => {
        setCartList([]);
    }

    const deleteItem = (id) => {
        let resultado = cartList.filter(item => item.idItem !== id);
        setCartList(resultado);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        return cartList.reduce(((acc, prod) => acc + prod.qtyItem), 0);
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem, calcItemsQty, calcTotal, calcSubTotal, calcTotalPerItem}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider;