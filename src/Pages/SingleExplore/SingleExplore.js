import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleExplore = ({ explore }) => {
    const { name, img, price, description, _id } = explore;
    return (
        <div>
            <Col className="text-start">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="name">{name}</Card.Title>
                        <Card.Title className="text-info">$ {price}</Card.Title>
                        <Card.Text>
                            <p> {description.slice(0, 140)}</p>
                        </Card.Text>
                        <Card.Title>
                            <Link to={`/service/${_id}`}>  <button className="btn  btn-outline-info  px-3 py-2 mt-3">Buy Now </button></Link>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default SingleExplore;