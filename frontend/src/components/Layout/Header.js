import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/auth'
import { HiMiniShoppingCart } from "react-icons/hi2";
import Searchinput from "../Form/Searchinput"
import toast from 'react-hot-toast';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import { Badge } from 'antd'
import axios from "axios";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const categories = useCategory();
    const [userRole, setUserRole] = useState(0); // Assuming 1 is for "Sell" and 0 is for "Buy"
    const [buttonText, setButtonText] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        let role = auth?.user?.role;
        setUserRole(role);
        role === 0 ? setButtonText('Sell') : setButtonText('Buy')
    }, [auth?.user]);


    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        })
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    }

    const toggleRole = async () => {
        const newRole = userRole === 0 ? 1 : 0;
        setUserRole(newRole);
        setButtonText(newRole === 0 ? 'Sell' : 'Buy');
        try {

            const { data } = await axios.put("http://localhost:8080/api/v1/auth/role", {
                role: newRole,
            });
            navigate('/login', { replace: true });
            setAuth({
                ...auth,
                user: null,
                token: "",
            })
            localStorage.removeItem("auth");
            let user = newRole === 0 ? 'a User' : "an Admin";
            alert(`Now you are ${user}!! \nLogin agin to get complete access!!`);
        } catch (error) {
            console.error('Failed to update role', error);
        }
    };
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/" className="navbar-brand"><HiMiniShoppingCart /> Venditor</Link>
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <Searchinput />
                            <button className="btn btn-outline-danger mx-2" onClick={toggleRole}>
                                {buttonText}
                            </button>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link ">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to={"/categories"}
                                    data-bs-toggle="dropdown"
                                >
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"/categories"}>
                                            All Categories
                                        </Link>
                                    </li>
                                    {categories?.map((c) => (
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to={`/category/${c.slug}`}
                                            >
                                                {c.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            {!auth.user ?
                                (<><li className="nav-item">
                                    <NavLink to="/signup" className="nav-link">Signup</NavLink>
                                </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
                                    </li></>) : (<>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {auth?.user?.name}
                                            </NavLink>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`} className="dropdown-item">
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink onClick={handleLogout} to="/login" className="dropdown-item">
                                                        Logout
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </>)
                            }
                            <li className="nav-item">
                                <Badge count={cart?.length} showZero>
                                    <NavLink to="/cart" className="nav-link">
                                        Cart
                                    </NavLink>
                                </Badge>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header