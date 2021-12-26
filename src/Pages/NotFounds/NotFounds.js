import React from 'react';
import { Link } from 'react-router-dom';
import './NotFounds.css';

const NotFounds = () => {
    return (
        <div className="text-center">
            <img src="https://image.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg" alt="" />
            <br />
            <Link to="/home"> <button type="button" className="btn btn-outline-success my-4 px-3 py-2">Go back to home page</button>  </Link>
        </div>
    );
};

export default NotFounds;