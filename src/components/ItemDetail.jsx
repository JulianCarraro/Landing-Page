import { Card, Container, Row, Col } from "react-bootstrap";
import CounterContainer from "./CounterContainer";

function ItemDetail({ item }) {
  return (
    <Container style={{ marginTop: "8rem", marginBottom: "6rem" }}>
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <Card className="shadow-lg p-3">
            <Row className="g-0 align-items-center">
              <Col md={6} order={{ md: 2 }}>
                <Card.Img
                  src={item?.image}
                  alt={item?.name}
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Col>

              <Col md={6} order={{ md: 1 }}>
                <Card.Body>
                  <Card.Title>{item?.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item?.category}
                  </Card.Subtitle>
                  <Card.Text>{item?.description}</Card.Text>
                  <h4 className="text-primary">${item?.price}</h4>
                  <CounterContainer item={item} />
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemDetail;