import CartWidget from './CartWidget'
import { useEffect, useState } from 'react';
import NavBar from './navBar';

function NavBarContainer() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setCategories(data))
            .then(console.log);
    }, [])

    return (
       <NavBar categories = {categories}/>
    )
}

export default NavBarContainer