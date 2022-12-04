import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " productos.");
        setItemCount(qty);
        test.addToCart(item, qty)
    }

    return(
        <div className="item_detail">
            <div className="image_box_detail">
                <img className="image_detail" src={item.imagenDetail} alt="" />
            </div>
            <div className="details_detail">
                <h5>{item.titulo}</h5>
                <p>{item.descripcion}</p>
                <p>Stock: {item.stock}</p>
                <span className="price_span_detail">${item.precio}</span>
                {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                    : <Link to='/cart'><button className="btn_checkout">Checkout</button></Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;