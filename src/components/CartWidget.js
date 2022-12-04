import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <Link to="/cart">
    <Badge badgeContent={test.calcItemsQty()} color="warning">
      <ShoppingCartIcon color="action" />
    </Badge>
    </Link>
  )
}

export default CartWidget;