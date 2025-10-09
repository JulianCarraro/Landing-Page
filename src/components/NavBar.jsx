import { NavLink } from 'react-router';
import CartWidget from './CartWidget'
import { useEffect, useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import logo from "../assets/logoapp.png";

function NavBar({ categories }) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center" style={{ gap: 20 }}>
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                        <img
                            src={logo}
                            alt="logo"
                            style={{ width: 50, height: 50, cursor: "pointer" }}
                        />
                    </NavLink>

                    <NavDropdown title="categorias" id="basic-nav-dropdown" style={{ color: "white" }}>
                        {categories.map(category => (
                            <NavDropdown.Item
                                as={NavLink}
                                to={`/category/${category.categoryName}`}
                                key={category.id}
                            >
                                {category.categoryName}
                            </NavDropdown.Item>

                        ))}
                    </NavDropdown>
                </div>

                <div>
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar