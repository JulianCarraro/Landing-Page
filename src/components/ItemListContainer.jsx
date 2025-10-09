import { useContext, useEffect, useState } from "react"
import ItemList from "./ItemList";
import { withLoading } from '../hoc/withLoading';
import { useParams } from "react-router";
import { CartContext } from "../context/CartContext";
import { getCollectionData, getItemsByCategory } from "../firebase/db";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer() {

    const [items, setItems] = useState([]);
    const { id } = useParams();

    const context = useContext(CartContext)

    useEffect(() => {

        if (id) {
            getItemsByCategory(id).then(items => {
                setItems(items);
            })
        } else {

            getCollectionData("items").then(items => {
                setItems(items);
            }).catch(error => {
                console.error("Error obteniendo items: ", error);
            });

        }

    }, [id]);

    return (
        <ItemListWithLoading items={items} />
    )
}

export default ItemListContainer