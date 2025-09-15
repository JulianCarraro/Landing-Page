import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router';

function Item({ item }) {

  const navigate = useNavigate();

  return (
    <Col lg={3} md={6} key={item.id} className="mb-4">
      <Card>
        <Card.Img variant="top" src={item.thumbnail} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.category}</Card.Text>
          <Button onClick={() => navigate(`/item/${item.id}`)}>Más información</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;