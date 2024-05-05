import React from "react";
import Layout from "./../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Orders = () => {
    // Example orders data
    const ordersData = [
      {
        status: "Delivered",
        buyer: "John Doe",
        orders: "Order #12345",
        payment: "Credit Card",
        quantity: 2
      },
      {
        status: "Processing",
        buyer: "Jane Smith",
        orders: "Order #67890",
        payment: "PayPal",
        quantity: 1
      },
      // Add more orders as needed
    ];

    return (
        <Layout title={"Your Orders"}>
            <div className="container-fluid p-3 m-0">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu/>
                    </div>
                    <div className="col-md-9">
                        <h1>All Orders</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Status</th>
                                    <th>Buyer</th>
                                    <th>Orders</th>
                                    <th>Payment</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ordersData.map((order, index) => (
                                    <tr key={index}>
                                        <td>{order.status}</td>
                                        <td>{order.buyer}</td>
                                        <td>{order.orders}</td>
                                        <td>{order.payment}</td>
                                        <td>{order.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Orders;