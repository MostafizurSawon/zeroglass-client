import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFounds from './Pages/NotFounds/NotFounds';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import Explore from './Pages/Explore/Explore';
import Purchase from './Pages/Home/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Register from './Pages/Login/Register/Register';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import About from './Pages/Home/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/service/:serviceId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFounds></NotFounds>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
