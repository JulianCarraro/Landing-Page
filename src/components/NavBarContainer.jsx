import CartWidget from './CartWidget'
import { useEffect, useState } from 'react';
import NavBar from './NavBar'
import { getCollectionData } from "../firebase/db";

function NavBarContainer() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCollectionData("categories").then(categories => {
            setCategories(categories);
        }).catch(error => {
            console.error("Error obteniendo categorias: ", error);
        });
    }, [])

    return (
        <NavBar categories={categories} />
    )
}

export default NavBarContainer