import axios from 'axios';
import React, { useState } from 'react';
import './Review.css';

const Review = () => {
    // const [rating, setRating] = useState({});
    const [comments, setComments] = useState({});

    // const handleOnRating = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newReviewData = { ...rating };
    //     newReviewData[field] = parseFloat(value);
    //     setRating(newReviewData);
    // }

    const handleOnComments = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...comments };
        newReviewData[field] = value;
        setComments(newReviewData);
    }

    const handleReviewSubmit = e => {
        // const review = { rating, comments };
        // console.log(review.rating);

        axios.post('https://safe-citadel-17989.herokuapp.com/reviews', comments)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Review');
                    e.target.reset();
                }
            })


        // fetch('https://safe-citadel-17989.herokuapp.com/reviews', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })
        //     .then()

        e.preventDefault();
    }

    return (
        <div>
            <div className="row review w-50 mx-auto">
                <h1 >Reviews on Sunglasses</h1>
                <form onSubmit={handleReviewSubmit}>
                    <select onBlur={handleOnComments} name="rating" className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                        <option selected >Please Select Rating</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <div className="input-group">
                        <span className="input-group-text fw-bolder">Type Comments</span>
                        <textarea onBlur={handleOnComments} name="comments" className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button type="submit" className="btn btn-success mt-4 text-white fw-bolder p-2">Submit</button>

                </form>

            </div>



        </div>
    );
};

export default Review;