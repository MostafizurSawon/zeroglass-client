import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, user, authError, isLoading } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.rePassword) {
            alert("Your Password didn't match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }


    return (
        <div className="register">

            <section>
                <div className="container mt-5">
                    <div className="row" id="form-inputs">
                        <div className="col-md-8 mx-auto d-block">
                            <div className="card mb-3" >
                                <div className="row no-gutters">
                                    <div className="col-md-12 p-4">
                                        <div className="card-body">
                                            <img src="https://img.icons8.com/cotton/64/000000/groups--v1.png" className="mx-auto d-block" />
                                            {!isLoading && <form onSubmit={handleLoginSubmit}>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-1">
                                                            <i class="fa fa-user-circle" aria-hidden="true"></i>

                                                        </div>
                                                        <div className="col-md-11">
                                                            <input onBlur={handleOnBlur} type="text" name="name" className="form-control border-top-0 border-left-0 border-right-0" placeholder="Name" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-1">
                                                            <i class="fa fa-envelope" aria-hidden="true"></i>

                                                        </div>
                                                        <div className="col-md-11">
                                                            <input onBlur={handleOnBlur} type="email" name="email" className="form-control border-top-0 border-left-0 border-right-0" placeholder="Email" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-1">
                                                            <i class="fa fa-key" aria-hidden="true"></i>

                                                        </div>
                                                        <div className="col-md-11">
                                                            <input onBlur={handleOnBlur} type="password" name="password" className="form-control border-top-0 border-left-0 border-right-0" placeholder="Password" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-1">
                                                            <i class="fa fa-key" aria-hidden="true"></i>

                                                        </div>
                                                        <div className="col-md-11">
                                                            <input onBlur={handleOnBlur} type="password" name="rePassword" className="form-control border-top-0 border-left-0 border-right-0" placeholder="Confirm Password" required />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-info text-white">Register</button>
                                                </div>

                                                <hr />
                                                <NavLink
                                                    style={{ textDecoration: 'none' }}
                                                    to="/login">
                                                    <p className="text-dark text-center fw-bolder">Already registered?Please <span className="text-info">Login</span> </p>
                                                </NavLink>

                                            </form>}
                                            {isLoading && <Spinner animation="border" role="status">
                                                <span className="visually-hidden">...Waiting...</span>
                                            </Spinner>}

                                            {user?.email && <Alert variant="success">
                                                User Created Successfully!
                                            </Alert>}

                                            <p className="text-danger fw-bolder" >
                                                {authError}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section >



        </div >
    );
};

export default Register;