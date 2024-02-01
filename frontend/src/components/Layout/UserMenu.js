import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
    return (
        <>
            <div className="user-menu-container">
                <h4 className="menu-title">Dashboard</h4>
                <div className="menu-list">
                    <NavLink to="/dashboard/user/profile" className="menu-item" >Profile</NavLink>
                    <NavLink to="/dashboard/user/orders" className="menu-item" >Orders</NavLink>
                </div>
            </div>
        </>
    );
};

export default UserMenu;
