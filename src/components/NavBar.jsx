import { NavLink } from 'react-router';
import CartWidget from './CartWidget'
import { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';

function NavBar({ categories }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">

                { }
                <div className="d-flex align-items-center" style={{ gap: 20 }}>
                    <img src="src/assets/logoapp.png" alt="logo" style={{ width: 50, height: 50 }} />

                    <NavDropdown title="categorias" id="basic-nav-dropdown" style={{color: "white"}}>
                        {categories.map(category => (
                            <NavDropdown.Item
                                as={NavLink}
                                to={`/category/${category}`}
                                key={category}
                            >
                                {category}
                            </NavDropdown.Item>

                        ))}
                    </NavDropdown>
                </div>

                { }
                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar