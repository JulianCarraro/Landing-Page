import CartWidget from './CartWidget'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="d-flex" style={{ gap: 20 }}>
                    <img src="src\assets\logoapp.png" style={{ width: 50, height: 50 }}></img>
                    {/* <a className="navbar-brand d-flex" href="#" style={{ alignItems: "center" }}>OFFSIDE SPORTS</a> */}
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categoria 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categoria 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categoria 3</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar