import { useContext } from 'react';
import { CartContext } from './CartContext'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Link } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';
import { collection, doc, setDoc, updateDoc, increment } from "firebase/firestore"; 
import db from '../utils/firebaseConfig';

const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
      let order = {
        buyer: {
          name: 'Leo Mechi',
          email: 'leomechi@josmeil.com',
          phone: '1122233622'
        },
        date: serverTimestamp(),
        items: test.cartList.map(item => ({
          id: item.id,
          precio: item.precio,
          titulo: item.titulo,
          qty: item.qtyItem
        })),
        total: test.calcTotal()
      }
      // console.log(order)
      
      const createOrderInFirestore = async () => {
        const newOrderReferencia = doc(collection(db, 'orders'));
        await setDoc(newOrderReferencia, order);
        return newOrderReferencia
      }
      createOrderInFirestore()
      .then(response => {
        alert('Orden ID = ' + response.id)
        // actualizar stock y descontar qty
        test.cartList.forEach(async (item) => {
          const itemReferencia = doc(db, "productos", item.id);
          await updateDoc(itemReferencia, {
            stock: increment(-item.qtyItem) // logica = stock: stock - item.qty
          });
        });
        // Luego de actualizar el stock en la db, borrar el carrito de compras
        test.removeList();
      })
      .catch(err => console.log(err));
    }

    return(
        <>
        <h1>SOY UN CARRITO</h1>
        <hr />
        {
            test.cartList.length === 0 
            ? <li className="carrito_vacio_text"><SentimentVeryDissatisfiedIcon /> No agregaste ningun producto al carrito <SentimentVeryDissatisfiedIcon /></li>
            : test.cartList.map(item => <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
              </tr>
            </thead>
            <tbody key={item.id}>
              <tr>
                <th scope="row">{item.id}</th>
                <td><img className="img_carrito" alt="imagen en el carrito" src={item.imagen}></img></td>
                <td>{item.titulo}</td>
                <td>${item.precio} c/u</td>
                <td>{item.qtyItem} item's</td>
              </tr>
            </tbody>
          </table>)
        }

        {
          test.cartList.length > 0 &&
          <div className="container_orden">
            <h1>ORDER SUMMARY</h1>
            <hr />
            <h3>TOTAL:</h3>
            <span>{test.calcTotal()}</span>
            <hr />
            <button className="btn_detail" onClick={createOrder}>CHECKOUT NOW</button>
          </div>
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