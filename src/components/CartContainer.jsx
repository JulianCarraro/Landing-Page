import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Card, Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import { Trash } from "lucide-react";

function CartContainer() {
  const { cart, getTotal, removeItem, decreaseItem, increaseItem } = useContext(CartContext)
  const total = getTotal ? getTotal() : 0
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="text-center mt-5">
        <h5>No tienes productos en el carrito 😢</h5>
      </div>
    )
  }

   return (
    <div className="container my-5">
      {cart.map((item) => (
        <Card key={item.id} className="mb-3 shadow-sm">
          <div className="d-flex align-items-center justify-content-between p-3">
            <div className="d-flex align-items-center">
              <Card.Img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <Card.Body className="ms-3">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Precio: ${item.price}</Card.Text>

                <div className="d-flex align-items-center gap-2 mt-2">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => decreaseItem(item.id)}
                  >
                    −
                  </Button>

                  <span className="fw-semibold">{item.count}</span>

                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => increaseItem(item.id)}
                  >
                    +
                  </Button>
                </div>
              </Card.Body>
            </div>

            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => removeItem(item.id)}
            >
              <Trash size={18} />
            </Button>
          </div>
        </Card>
      ))}

      <div className="text-center mt-4">
        <h4>Total: ${total}</h4>
        <Button
          onClick={() => navigate("/checkout")}
          variant="primary"
          className="mt-3"
        >
          Finalizar compra
        </Button>
      </div>
    </div>
  )
}

export default CartContainer