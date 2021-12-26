import React from 'react';
import ReactStars from 'react-stars';
// import ReactStars from "react-rating-stars-component";

import useAuth from '../../../../hooks/useAuth';
import './ShowSingleReview.css';

const ShowSingleReview = ({ review }) => {
    const { rating, comments } = review;
    const reviewRating = parseFloat(rating);
    return (
        <div className=" col-md-4 col-sm-12 col-12 mb-4 ">
            <div className="serv-section-2">
                <div className="serv-section-2-icon"> <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div className="serv-section-desc">
                    <ReactStars
                        count={5}
                        edit={false}
                        value={reviewRating}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>

                <p>{comments.slice(0, 50)}.</p>
                <div className="section-heading-line-left"></div>
            </div>
        </div>

    );
};

export default ShowSingleReview;