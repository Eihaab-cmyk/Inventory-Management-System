import React from "react";
import { NavLink } from "react-router-dom";

const AdminMenu = () => {
    return (
        <div className="text-center" style={{ backgroundColor: "black", color: "white" }}>
            <div className="list-group dashboard-menu" style={{ backgroundColor: "black" }}>
                <h4>Admin Panel</h4>
                <NavLink
                    to="/dashboard/admin/create-category"
                    className="list-group-item list-group-item-action"
                    style={{ backgroundColor: "black", color: "white" }}
                >
                    Create Category
                </NavLink>
                <NavLink
                    to="/dashboard/admin/create-product"
                    className="list-group-item list-group-item-action"
                    style={{ backgroundColor: "black", color: "white" }}
                >
                    Create Product
                </NavLink>
                <NavLink
                    to="/dashboard/admin/products"
                    className="list-group-item list-group-item-action"
                    style={{ backgroundColor: "black", color: "white" }}
                >
                    Products
                </NavLink>
                <NavLink
                    to="/dashboard/admin/orders"
                    className="list-group-item list-group-item-action"
                    style={{ backgroundColor: "black", color: "white" }}
                >
                    Orders
                </NavLink>
                <NavLink
                    to="/dashboard/admin/users"
                    className="list-group-item list-group-item-action"
                    style={{ backgroundColor: "black", color: "white" }}
                >
                    Users
                </NavLink>
            </div>
        </div>
    );
};

export default AdminMenu;
