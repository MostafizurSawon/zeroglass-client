import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Purchase.css';
import { Alert } from 'react-bootstrap';
import { Input } from 'react-bootstrap';

const Purchase = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    const [orderSuccess, setOrderSuccess] = useState(false);

    useEffect(() => {
        fetch(`https://safe-citadel-17989.herokuapp.com/products/${serviceId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        data.status = "Pending";
        axios.post(`https://safe-citadel-17989.herokuapp.com/products/${serviceId}`, data)
            .then(res => {
                if (res.data.insertedId) {
                    setOrderSuccess(true);
                    reset();
                }
            })
    };
    return (
        <div className="py-5 details ">
            <div className="row overlay">
                <h2 className="text-white">Product Details</h2>
                <p> <Link to="/home"> <span className="text-custom pe-2"> Home </span></Link>
                    <span className="text-white">Product Details</span>
                </p>
            </div>

            <div className="row pb-5 mb-5 px-5 container  ">
                <div className="col-12 col-md-6 px-5 col-lg-6">
                    <img src={details?.img} className="img-fluid pt-3" alt="" />
                    <h3 className="details_headline pb-3">{details?.name}</h3>
                    <h5 className="text-warning fw-bolder pb-2">Price : $ {details?.price}</h5>
                    <p className="text-start"> {details?.description}</p>

                </div>
                <div className="col-12  col-md-6   col-lg-6">
                    <div className="book_package pt-5 mt-5">
                        {orderSuccess && <Alert variant="success">
                            Ordered Successfully!
                        </Alert>}

                        <h3 className="fw-bolder pb-4">Buy Product</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input defaultValue={user?.displayName} {...register("name", { required: true, maxLength: 20 })}
                            />
                            <input defaultValue={user?.email}  {...register("email")} placeholder="Email" />
                            <textarea {...register("address", { required: true })} className="description" placeholder="Address" /> <br />
                            <input type="number" {...register("phone")} placeholder="Cell Number" />

                            {/* <input defaultValue={details?.name}  {...register("product")} placeholder="Product name" /> */}

                            <input {...register("product", { required: true })} placeholder="Type product name" />


                            {/* <input {...register("firstName", { required: true, maxLength: 20 })} /> */}
                            {/* <input {...register("firstName", { required: true })} /> */}



                            {errors.address && <span className="text-danger">Address is required</span>}

                            {/* <input className="btn btn-primary" type="submit" value="Place Order" /> */}

                            <button type="submit" class="btn btn-info text-white fw-bolder">Place Order</button>


                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Purchase;