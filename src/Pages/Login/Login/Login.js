import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, isLoading, signInWithGoogle, loginUser, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }



    return (
        <div className="register">
            <section>
                <div className="container mt-5">
                    <div className="row" id="form-inputs">
                        <div className="col-md-8 mx-auto d-block">
                            <div className="card mb-3" >
                                <div className="row no-gutters" >
                                    
                                    <div className="col-md-12 p-4">
                                        <div className="card-body">
                                            <img src="https://img.icons8.com/cotton/64/000000/groups--v1.png" className="mx-auto d-block" />
                                            <form onSubmit={handleLoginSubmit}>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-1">
                                                            <i class="fa fa-envelope" aria-hidden="true"></i>

                                                        </div>
                                                        <div className="col-md-11">
                                                            <input type="email" name="email" onBlur={handleOnBlur} className="form-control border-top-0 border-left-0 border-right-0" placeholder="Email" required />
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


                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-info text-white ">Login</button>
                                                </div>

                                                <NavLink
                                                    style={{ textDecoration: 'none' }}
                                                    to="/register">
                                                    <p className="text-dark fw-bolder pt-4 text-center">New user ? Please <span className="text-info">Register</span> </p>
                                                </NavLink>


                                            </form>
                                            <hr />
                                            <p align="center">
                                                <button onClick={handleGoogleSignIn} type="submit" className="btn btn-info m-3 text-white">Google Sign In</button>
                                            </p>

                                            {isLoading && <Spinner animation="border" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>}

                                            {user?.email && <Alert variant="success">
                                                Login Successfully!
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

            </section>





        </div>
    );
};

export default Login;