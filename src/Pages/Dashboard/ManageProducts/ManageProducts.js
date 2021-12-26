import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageProducts = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `https://safe-citadel-17989.herokuapp.com/manage/product`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure , You want to delete ?');
        if (proceed) {
            const url = `https://safe-citadel-17989.herokuapp.com/manage/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted');
                        const remaining = products.filter(pd => pd._id === id);
                        setProducts(remaining);
                    }

                })
        }
    }

    return (
        <div>
            <h1 className="pt-3 pb-4 mt-2 fw-bolder">Total Products : {products.length} </h1>
            <table className="table   table-success table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">SL</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Price</th>
                        {/* <th scope="col">Product Image</th> */}
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((product, index) => <tr key={product._id}>
                            <th scope="row">{index === 0 ? index + 1 : index + 1}</th>
                            <td className="fw-bolder">{product?.name}</td>
                            <td className="fw-bolder"> $ {product?.price}</td>
                            {/* <td>{product?.img}</td> */}
                            <td className="text-center text-dark">
                                <button onClick={() => handleDelete(product._id)} type="button" class="btn btn-danger">Delete</button>

                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;