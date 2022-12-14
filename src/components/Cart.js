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
        items: test.cart.map(item => ({
          id: item.id,
          precio: item.precio,
          titulo: item.titulo,
          count: item.count
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
        test.cart.forEach(async (item) => {
          const itemReferencia = doc(db, "productos", item.id);
          await updateDoc(itemReferencia, {
            stock: increment(-item.count) // logica = stock: stock - item.qty
          });
        });
        // Luego de actualizar el stock en la db, borrar el carrito de compras
        test.removeList();
      })
      .catch(err => console.log(err));
    }

    return(
        <>
        {
            test.cart.length === 0 
            ? <p className="carrito_vacio_text"><SentimentVeryDissatisfiedIcon /> No agregaste ningun producto al carrito <SentimentVeryDissatisfiedIcon /></p>
            : test.cart.map(item => <table className="table" key={item.id}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th><button className="btn_delete" onClick={() => test.deleteItem(item.id)}>x</button></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{item.id}</th>
                <td><img className="img_carrito" alt="imagen en el carrito" src={item.imagen}></img></td>
                <td className="carrito_nombre">{item.titulo}</td>
                <td className="carrito_precio">${item.precio} c/u</td>
                <td className="carrito_items">{item.count} item/s</td>
              </tr>
            </tbody>
          </table>)
        }

        {
          test.cart.length === 0
          ? <button className="btn_seguir_comprando"><Link to="/">Ir al listado</Link></button>
          : <button className="btn_vaciar_carrito" onClick={test.removeList}>VACIAR CARRITO</button>
        }

        {
          test.cart.length > 0 &&
          <div className="container_orden">
            <h1 className="resumen_pedido_titulo">Resumen de su pedido</h1>
            <hr />
            <h3 className="cantidad_titulo">Cantidad de productos:</h3>
            <span className="total_items">{test.calcItemsQty()} item/s</span>
            <h3 className="total_titulo">Total a pagar:</h3>
            <span className="total_precio">${test.calcTotal()}</span>
            <hr />
            <button className="btn_detail" onClick={createOrder}>FINALIZAR COMPRA</button>
          </div>
        }
        </>
    )
}

export default Cart;