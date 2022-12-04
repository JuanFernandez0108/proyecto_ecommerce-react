
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { doc, getDoc } from "firebase/firestore";
import db from '../utils/firebaseConfig';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        const getProducto = async () => {
            const queryRef = doc(db, "productos", idItem);
            const response = await getDoc(queryRef);
            const newItem = {
              id: response.id,
              ...response.data(),
            };
            setTimeout(()=>{
                setDato(newItem);
            }, 2000)
          };
          getProducto();
    }, [idItem]);

    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;