import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card from 'react-bootstrap/Card'

function Counter({ count, onAdd, onSub, onAddToCart }) {
  return (
    <Card className="text-center shadow-sm p-3 my-4" style={{ width: '18rem', margin: '0 auto' }}>
      <Card.Body>
        <Card.Title className="mb-3">Seleccioná cantidad</Card.Title>

        <ButtonGroup aria-label="contador" className="mb-3">
          <Button variant="outline-danger" onClick={onSub}>−</Button>
          <Button variant="light" disabled style={{ minWidth: '60px' }}>
            {count}
          </Button>
          <Button variant="outline-success" onClick={onAdd}>+</Button>
        </ButtonGroup>

        <div>
          <Button 
            variant="primary" 
            className="px-4"
            onClick={onAddToCart}
            disabled={count === 0}
          >
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Counter