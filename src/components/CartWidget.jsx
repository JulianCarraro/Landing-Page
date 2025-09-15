import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

function CartWidget() {
  return (
    <div>
      <Badge badgeContent={0} color="error" showZero>
        <ShoppingCartIcon style={{ fontSize: 32, color: 'white' }} />
      </Badge>
    </div>
  );
}

export default CartWidget;