import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {
    return (
        <div className="text-center" style={{ backgroundColor: "black", color: "white" }}>
            <div className="list-group dashboard-menu" style={{ backgroundColor: "black" }}>
                <h4>User Panel</h4>
                <NavLink
                    to="/dashboard/user/profile"
                    className="list-group-item list-group-item-action"
                    style={{ backgroundColor: "black", color: "white" }}
                >
                    Profile
                </NavLink>
                <NavLink
                    to="/dashboard/user/orders"
                    className="list-group-item list-group-item-action"
                    style={{ backgroundColor: "black", color: "white" }}
                >
                    Orders
                </NavLink>
            </div>
        </div>
    );
};

export default UserMenu;
