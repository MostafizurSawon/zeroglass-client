import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <section id="services" className="bg-light  pt-100 ">
                <div className="container text-start">
                    <div className="row align-items-center">
                        <div className="col-lg-5  ">
                            <h1 className="title ">What We <span>Do</span> the
                                best!
                            </h1>
                            <p className=" mt-3 ">
                                Get The Best Protection For Your Eyes With Digital Block Lenses and
                                Sunglasses or sun glasses are a form of protective eyewear designed primarily to prevent bright sunlight and high-energy visible light from damaging or discomforting eyes.
                            </p>
                            <a className="btn btn-primary my-5" href="#">More Info </a>
                        </div>
                        <div className="col-lg-7 ">
                            <div className="row card-items">
                                <div className="col-lg-6 col-sm-6 ">
                                    <div className="card">
                                        <div className="card-body">

                                            <i class="fa fa-tencent-weibo" aria-hidden="true"></i>
                                            <h5 className="card-title fw-bolder">Contact Lenses</h5>
                                            <p className="card-text">Get The Best Protection For Your Eyes With Digital Block Lenses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <i class="fa fa-television" aria-hidden="true"></i>
                                            <h5 className="card-title fw-bolder">Vision Care</h5>
                                            <p className="card-text">Top Eyewear Trends For 2021- The Most Iconic Glasses & Sunglasses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <i class="fa fa-sun-o" aria-hidden="true"></i>
                                            <h5 className="card-title fw-bolder"> Vision Correction</h5>
                                            <p className="card-text">Why Are Multifocals So Expensive? Save Money By Shopping Online</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <i class="fa fa-search-minus" aria-hidden="true"></i>
                                            <h5 className="card-title fw-bolder"> Glasses and Frames</h5>
                                            <p className="card-text">5 Cutting-Edge Innovations And Trends In Eyewear</p>
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

export default About;