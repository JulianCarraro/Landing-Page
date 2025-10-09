import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import ItemDetail from "./ItemDetail"
import { withLoading } from '../hoc/withLoading';
import { getItem } from '../firebase/db';

const ItemDetailWithLoading = withLoading(ItemDetail);

function ItemDetailContainer() {

    const [item, setItem] = useState();
    const { id } = useParams();

    useEffect(() => {
        getItem(id)
            .then((data) => {
                setItem(data);
            });
    }, [id]);

    return (
        <ItemDetailWithLoading item={item} />
    )
}

export default ItemDetailContainer