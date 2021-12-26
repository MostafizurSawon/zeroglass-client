import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../../images/logo_3.png';

const Footer = () => {
    return (
            <footer id="dk-footer" className="dk-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 mt-5">
                            <div className="dk-footer-box-info">
                                <p className="footer-info-text" style={{ color: '#878787' }}>
                                    ZeroGlass Researchalways gives priority to their customers.
                                </p>
                                <div className="footer-social-link">
                                    <h3>Follow us</h3>
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/" >
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/i/flow/login">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.com/">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/signup">
                                                <i className="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/?hl=en">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div className="footer-awarad">
                                <img src="images/icon/best.png" alt="" />
                                <p>Best Optial Hope</p>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="contact-us">
                                        <div className="contact-icon">
                                            <i className="fa fa-map-o" aria-hidden="true"></i>
                                        </div>

                                        <div className="contact-info">
                                            <h3>Dhanmondi Dhaka</h3>
                                            <p>Sat Mosjid Road</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6">
                                    <div className="contact-us contact-us-last">
                                        <div className="contact-icon">
                                            <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                        </div>

                                        <div className="contact-info">
                                            <h3>52069071</h3>
                                            <p>Give us a call</p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12 col-lg-6">
                                    <div className="footer-widget footer-left-widget">
                                        <div className="section-heading">
                                            <h3>Latest News</h3>
                                            <span className="border-black"></span>
                                        </div>
                                        <ul>
                                            <li>

                                                <Link to="/home">About us</Link>
                                            </li>
                                            <li>

                                                <Link to="/home">Services</Link>
                                            </li>
                                            <li>

                                                <Link to="/login">Appointment</Link>
                                            </li>
                                            <li>

                                                <Link to="/login">Support</Link>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <Link to="/home">Contact us</Link>
                                            </li>

                                            <li>

                                                <Link to="/home">Blog</Link>
                                            </li>
                                            <li>

                                                <Link to="/home">Offers</Link>
                                            </li>
                                            <li>

                                                <Link to="/about">Faq</Link>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="col-md-12 col-lg-6">
                                    <div className="footer-widget">
                                        <div className="section-heading">
                                            <h3>Support</h3>
                                            <span className=" border-black"></span>
                                        </div>
                                        <p style={{ color: 'light' }}>
                                            Our goal is to make the consumer mixed reality experiences that ship in five to ten years great.
                                        </p>

                                        <form action="#">
                                            <div className="form-row">
                                                <div className="col dk-footer-form">
                                                    <input type="email" className="form-control" placeholder="Email Address" />
                                                    <button type="submit">
                                                        <i className="fa fa-send"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <span>Copyright © 2021, All Right Reserved ZeroGlass</span>
                            </div>

                            <div className="col-md-6">
                                <div className="copyright-menu">
                                    <ul>
                                        <li>
                                            <Link to="/home">Home</Link>
                                        </li>
                                        <li>

                                            <Link to="/login">Terms</Link>
                                        </li>
                                        <li>

                                            <Link to="/login">Privacy Policy</Link>
                                        </li>
                                        <li>

                                            <Link to="/about">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


                <div id="back-to-top" className="back-to-top">
                    <Link to="/home">
                        <button className="btn btn-dark" title="Back to Top" style={{ display: 'block' }}>
                            <i className="fa fa-angle-up"></i>
                        </button>
                    </Link>
                </div>

            </footer >
    );
};

export default Footer;