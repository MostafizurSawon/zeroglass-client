import React, { useEffect, useState } from 'react';
import ShowSingleReview from '../Home/ShowSingleReview/ShowSingleReview';
import './ShowReview.css';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // fetch('./services.json')
        fetch('https://safe-citadel-17989.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])

    return (
        <>
            <div className="section-block-grey">
                <div className="container text-start">
                    <div className="section-heading center-holder">
                        <h3 className="pb-4">Latest Reviews on our products.</h3>
                        <div className="section-heading-line"></div>
                    </div>
                    <div className="row mt-60">
                        {
                            reviews.map(review => <ShowSingleReview
                                key={review._id}
                                review={review}
                            ></ShowSingleReview>)
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShowReview;