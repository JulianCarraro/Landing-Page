import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'

function Item({ item }) {
  const navigate = useNavigate()

  return (
    <Col lg={3} md={6} sm={12} className="mb-4 d-flex justify-content-center">
      <Card
        className="shadow-lg border-0 rounded-4 overflow-hidden"
        style={{ width: '100%', maxWidth: '300px' }}
      >
        <div
          style={{
            height: '300px',
          }}
        >
          <Card.Img
            variant="top"
            src={item.image}
            alt={item.name}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </div>

        <Card.Body className="text-center">
          <Card.Title className="fw-bold text-truncate">{item.name}</Card.Title>
          <Card.Text className="text-muted mb-3">{item.category}</Card.Text>

          <Button
            variant="primary"
            className="px-4 rounded-pill"
            onClick={() => navigate(`/item/${item.id}`)}
          >
            Más información
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Item