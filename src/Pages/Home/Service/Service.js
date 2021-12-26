import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, _id } = service;
    return (
            <Col className="text-start">
                <Card>
                    <Card.Img className="card-image" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="name">{name}</Card.Title>
                        <Card.Text>
                            <p> {description.slice(0, 110)}</p>
                        </Card.Text>
                        <Card.Title>
                            <Link to={`/service/${_id}`}>  <button className="btn-serv  px-3 py-2 mt-3">Buy Now </button></Link>
                        </Card.Title>

                    </Card.Body>
                </Card>
            </Col>
    );
};

export default Service;