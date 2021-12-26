import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../Myorders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className="dashboard">
            <div className="home">
                <div className="container-fluid display-table">
                    <div className="row display-table-row">
                        <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">

                            <div className="navi">
                                <ul>

                                    <li><Link to={`${url}`}><i className="fa fa-pie-chart"></i> <span className="nav-label">DASHBOARD</span> </Link></li>
                                    <li> <Link to={`${url}/payment`}><i className="fa fa-tasks" aria-hidden="true"></i> <span className="nav-label text-white">Payment</span></Link></li>
                                    <li> <Link to={`${url}/myOrders`}><i className="fa fa-bar-chart" aria-hidden="true"></i> <span className="nav-label text-white">My Orders</span></Link></li>
                                    <li> <Link to={`${url}/review`}><i className="fa fa-user" aria-hidden="true"></i> <span className="nav-label text-white">Review</span></Link></li>

                                    {admin && <div>
                                        <li> <Link to={`${url}/manageAllOrders`}><i className="fa fa-calendar" aria-hidden="true"></i> <span className="nav-label text-white">Manage all orders</span></Link></li>
                                        <li> <Link to={`${url}/addProduct`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Add  a Product</span></Link></li>
                                        <li> <Link to={`${url}/makeAdmin`}><i className="fa fa-cog" aria-hidden="true"></i>  <span className="nav-label text-white">Make Admin</span></Link></li>
                                        <li> <Link to={`${url}/manageProducts`}><i className="fa fa-files-o"></i> <span className="nav-label text-white">Manage Products</span></Link></li>
                                    </div>}



                                </ul>
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-11 display-table-cell v-align">
                            <div className="user-dashboard">

                                <div className="row">

                                    <Switch>
                                        <Route exact path={path}>
                                            <MyOrders></MyOrders>
                                        </Route>

                                        <Route path={`${path}/payment`}>
                                            <Payment></Payment>
                                        </Route>
                                        <Route path={`${path}/myOrders`}>
                                            <MyOrders></MyOrders>
                                        </Route>
                                        <Route path={`${path}/review`}>
                                            <Review></Review>
                                        </Route>


                                        <AdminRoute path={`${path}/manageAllOrders`}>
                                            <ManageAllOrders></ManageAllOrders>
                                        </AdminRoute>


                                        <AdminRoute path={`${path}/addProduct`}>
                                            <AddProduct></AddProduct>
                                        </AdminRoute>


                                        <AdminRoute path={`${path}/makeAdmin`}>
                                            <MakeAdmin></MakeAdmin>
                                        </AdminRoute>


                                        <AdminRoute path={`${path}/manageProducts`}>
                                            <ManageProducts></ManageProducts>
                                        </AdminRoute>


                                    </Switch>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </div>



    );
};

export default Dashboard;



