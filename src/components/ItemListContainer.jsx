import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { withLoading } from '../hoc/withLoading';
import { useParams } from "react-router";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        const url = "https://dummyjson.com/products";
        const urlWithCategory = `https://dummyjson.com/products/category/${id}`;
        fetch(id ? urlWithCategory : url)
            .then(res => res.json())
            .then(data => {
                console.log("Productos de la API:", data.products);
                setItems(data.products);
            });
    }, [id]);

    return (
        <ItemListWithLoading items={items} />
    )
}

export default ItemListContainer