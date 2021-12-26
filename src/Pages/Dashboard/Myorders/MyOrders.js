import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://safe-citadel-17989.herokuapp.com/orders?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [orders])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure , You want to delete ?');
        if (proceed) {
            const url = `https://safe-citadel-17989.herokuapp.com/manage/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted');
                        const remaining = orders.filter(pd => pd._id === id);
                        setOrders(remaining);
                    }

                })
        }
    }

    return (
        <div>
            <h1 className="pt-5 pb-4 mt-2  fw-bolder">My Total  Orders  : {orders.length} </h1>
            <table className="table table-success table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Product</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map((order, index) => <tr key={order._id}>
                            <th scope="row">{index === 0 ? index + 1 : index + 1}</th>
                            <td>{order?.name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.phone}</td>
                            <td>{order?.product}</td>
                            <td className="text-center text-dark">
                                <button type="button" class="btn btn-success">{order.status}</button>
                                <button onClick={() => handleDelete(order._id)} type="button" class="btn btn-danger">Delete</button>

                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;