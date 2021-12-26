import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

    const [load, setLoad] = useState(false);
    const [orderedProducts, setOrderedProducts] = useState([]);
    useEffect(() => {
        fetch('https://safe-citadel-17989.herokuapp.com/manage')
            .then(res => res.json())
            .then(data => setOrderedProducts(data))
    }, [load])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure , You want to delete ?');
        if (proceed) {
            const url = `https://safe-citadel-17989.herokuapp.com/manage/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted');
                        const remaining = orderedProducts.filter(pd => pd._id !== id);
                        setOrderedProducts(remaining);
                    }

                })
        }
    }

    const handleStatus = id => {
        axios.put(`https://safe-citadel-17989.herokuapp.com/manage/status/${id}`, {})
            .then(res => {
                if (res.data.acknowledged) {
                    setLoad(true);
                    alert('Order approved');
                }
            })
    }

    return (
        <div className="manage_booked">
            <div className="container">
                <div className="row">
                    <h1 className="fw-bolder pt-5">Manage All Orders</h1>
                    <table className="table  table-bordered  table-striped  table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">SL</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Product</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderedProducts.map((ordered, index) => <tr key={ordered._id}>
                                    <td  >{index === 0 ? index + 1 : index + 1}</td>
                                    <td>{ordered.name}</td>
                                    <td>{ordered.email}</td>
                                    <td >{ordered?.product}</td>
                                    <a onClick={() => handleDelete(ordered._id)} className='btn btn-dark text-danger fw-bolder '> Delete</a>


                                    <button onClick={() => handleStatus(ordered._id)} type="button" className="btn btn-outline-success fw-bolder">{ordered.status}</button>

                                </tr>)
                            }

                        </tbody>
                    </table>




                </div>

            </div>
        </div>
    );
};

export default ManageAllOrders;