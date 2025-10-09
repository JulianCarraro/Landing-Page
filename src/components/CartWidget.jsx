import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router';

function CartWidget() {

  const { getQuantity } = useContext(CartContext)
  const quantity = getQuantity()
  const navigate = useNavigate()

  return (
    <div>
      <Badge badgeContent={quantity} onClick={() => navigate('/cart')} color="error" showZero>
        <ShoppingCartIcon style={{ fontSize: 32, color: 'white', cursor: 'pointer'}} />
      </Badge>
    </div>
  );
}

export default CartWidget;