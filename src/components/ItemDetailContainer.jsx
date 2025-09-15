import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import ItemDetail from "./ItemDetail"
import { withLoading } from '../hoc/withLoading';

const ItemDetailWithLoading = withLoading(ItemDetail);

function ItemDetailContainer() {

    const [item, setItem] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
                console.log("Producto recibido:", data);
            });
    }, [id]);

    return (
        // <ItemDetail item={item}></ItemDetail>
        <ItemDetailWithLoading item={item} />
    )
}

export default ItemDetailContainer