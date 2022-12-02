import { useEffect, useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, []);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial+1) {
            setCount(count - 1);
        }
    }

    return(
        <>
        <div className="container_botones_itemcount">
            <button className="btn_sumar" onClick={increment}>+</button>
            <span>{count}</span>
            <button className="btn_restar" onClick={decrement}>-</button>
            {
                stock && count
                ? <button className="btn_detail" onClick={() => onAdd(count)}>Agregar al carrito</button>
                : <button variant="contained" disabled>Agregar WACHIN</button>
            }
        </div>
        </>
    )
}

export default ItemCount;