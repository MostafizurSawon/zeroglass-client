import { Alert } from 'bootstrap';
import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState(' ');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://safe-citadel-17989.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    alert('Made Admin Successfully!');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }


    return (
        <div className="pt-5 mt-4">
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <h1>Make an Admin</h1>
                    </div>
                    <form onSubmit={handleAdminSubmit}>
                        {/* <input type="text" id="password" onBlur={handleOnBlur} class="fadeIn third" name="login" placeholder="Email" /> */}

                        <input type="text" id="login" onBlur={handleOnBlur} className="fadeIn second mt-2" name="login" placeholder="Email" />
                        <input type="submit" className="fadeIn fourth fw-bolder mt-4" value="Make Admin" />
                    </form>



                    <div id="formFooter">
                    </div>



                </div>
            </div>

        </div>
    );
};

export default MakeAdmin;