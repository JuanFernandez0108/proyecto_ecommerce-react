import { useContext } from 'react';
import { CartContext } from './CartContext'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';

const Cart = () => {
    const test = useContext(CartContext);

    return(
        <>
        <h1>SOY UN CARRITO</h1>
        <hr />
        {
            test.cartList.length === 0 
            ? <li className="carrito_vacio_text"><SentimentVeryDissatisfiedIcon /> No agregaste ningun producto al carrito <SentimentVeryDissatisfiedIcon /></li>
            : test.cartList.map(item => <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.imagen}</td>
                <td>{item.titulo}</td>
                <td>${item.precio}</td>
                <td>{item.qtyItem}</td>
              </tr>
            </tbody>
          </table>)
        }
        {
          test.cartList.length === 0
          ? <button className="btn_seguir_comprando"><Link to="/">Ir al listado</Link></button>
          : <p className="parrafo_compra_carrito">¡GRACIAS POR CONFIAR EN NOSOTROS!</p>
        }
        </>
    )
}

export default Cart;