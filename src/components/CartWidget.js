import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './CartContext';
import { useContext } from 'react';

const CartWidget = () => {
  const test = useContext(CartContext);

  return (
    <Badge badgeContent={test.calcItemsQty()} color="warning">
      <ShoppingCartIcon color="action" />
    </Badge>
  )
}

export default CartWidget;