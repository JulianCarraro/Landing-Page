import { Card, Button, Container, Row, Col } from "react-bootstrap";

function ItemDetail({item}) {

    return (
    <Container className="my-5">
        <Row className="justify-content-center">
            <Col md={6} lg={5}>
                <Card className="shadow-lg">
                    <Card.Img variant="top" src={item?.thumbnail} alt={item?.title} />
                    <Card.Body>
                        <Card.Title>{item?.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{item?.category}</Card.Subtitle>
                        <Card.Text>{item?.description}</Card.Text>
                        <h4 className="text-primary">${item?.price}</h4>
                        <Button variant="success">Comprar ahora</Button>
                    </Card.Body>

                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default ItemDetail