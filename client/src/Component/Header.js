import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    const NavBarcss = {
        position: 'fixed',
        zIndex: '1',
        width: "100%",
        top: 0
}
return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={NavBarcss}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/task2">Task2</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sigup">Task3</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
}

export default Header
