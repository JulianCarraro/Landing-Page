import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { use, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { serverTimestamp } from "firebase/firestore";
import { newOrder } from "../firebase/db";
import { useNavigate } from "react-router"

function Checkout() {
    const { getTotal, cart, clearCart } = useContext(CartContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;

        const order = {
            buyer: {
                email,
                name,
                phone
            },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        }
        const ok = await newOrder(order);

        if(ok) {
            navigate('/');
            clearCart();
        }
    };

    if(!cart.length) {
        return <h4 className="text-center mt-5">No tienes productos en el carrito 😢</h4>
    }

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <Card
                className="shadow-lg p-4 border-0 rounded-4"
                style={{ width: "100%", maxWidth: "450px" }}
            >
                <Card.Body>
                    <h3 className="text-center mb-4 text-dark fw-semibold">
                        Finalizar compra 🛒
                    </h3>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4" controlId="email">
                            <Form.Label className="fw-semibold">Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingresá tu email"
                                required
                            />
                            <Form.Text className="text-muted">
                                Nunca compartiremos tu correo con nadie.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="name">
                            <Form.Label className="fw-semibold">Nombre completo</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Lionel Messi"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="phone">
                            <Form.Label className="fw-semibold">Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="+54 9 11 2345 6789"
                                required
                            />
                        </Form.Group>

                        <div className="d-flex justify-content-center">
                            <Button
                                variant="dark"
                                type="submit"
                                className="px-5 py-2 rounded-pill"
                            >
                                Finalizar compra ✨
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Checkout;