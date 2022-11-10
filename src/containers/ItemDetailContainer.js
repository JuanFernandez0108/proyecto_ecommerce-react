import customFetch from '../utils/customFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
const { productosApi } = require('../utils/productosApi');

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, productosApi.find(item => item.id === parseInt(idItem)))
        .then(response => setDato(response))
        .catch(err => console.log(err))
    }, [idItem]);

    return (
        <ItemDetail item={dato} />
    )
}

export default ItemDetailContainer;