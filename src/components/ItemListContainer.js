import ItemList from '../containers/ItemList';
import customFetch from '../utils/customFetch';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
const { productosApi } = require('../utils/productosApi');

const ItemListContainer = () => {
  const [datos, setDatos] = useState ([]);
  const { idCategory } = useParams();

  console.log(idCategory);

  // componentDidUpdate
  useEffect(() => {
    customFetch(2000, productosApi.filter(item => {
      if (idCategory === undefined) return item;
      return item.categoryId === idCategory;
    }))
    .then(response => setDatos(response))
    .catch(err => console.log(err))
}, [idCategory])

  return (
    <>
    <ItemList items={datos} />
    </>
  )
}

export default ItemListContainer;