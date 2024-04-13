import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <>
            <div className="user-menu-container">
                <h4 className="menu-title">Admin Panel</h4>
                <div className="menu-list">
                    <NavLink to="/dashboard/admin/create-category" className="menu-item" >Create Category</NavLink>
                    <NavLink to="/dashboard/admin/create-product" className="menu-item" >Create Product</NavLink>
                    <NavLink to="/dashboard/admin/products" className="menu-item" >Products</NavLink>
                    <NavLink to="/dashboard/admin/users" className="menu-item" >Users</NavLink>
                </div>
            </div>
        </>
    );
};

export default AdminMenu;
