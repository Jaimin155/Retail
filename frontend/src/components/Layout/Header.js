import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { HiMiniShoppingCart } from "react-icons/hi2";
const Header = () => {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand"><HiMiniShoppingCart/> Venditor</Link>
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link ">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/category" className="nav-link "  href="#">Category</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="nav-link">Signup</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link" href="#">Cart(0)</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header