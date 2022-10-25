import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Carrito() {
  return (
    <>
    
    <Badge badgeContent={2} color="warning">
      <ShoppingCartIcon color="action" />
    </Badge>
    
    </>
  )
}

export default Carrito;