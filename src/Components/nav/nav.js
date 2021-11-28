import React, {useState} from "react";
import {Link} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";
const Nav = (props) =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">T - COM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            { props.isAuthenticated  ?
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='/' >
                                        Packages
                                    </Link>

                                </li>
                                :<p></p>}
                            { props.isAuthenticated  ?
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='/customers' >
                                        Customers
                                    </Link>

                                </li>
                                :<p></p>}


                            { props.isAuthenticated  ?
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='/payments' >
                                        Payments
                                    </Link>

                                </li>
                                :<p></p>}

                            { !props.isAuthenticated  ?
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to='login' >
                                        Login
                                    </Link>

                                </li>
                                :<p></p>}

                            { props.isAuthenticated  ?
                                <li className="nav-item ">
                                    <Link className="nav-link " to='/logout'>
                                        Logout
                                    </Link>
                                </li>
                                :<p></p>}


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {

        isAuthenticated: state.auth.token !== null,
        id: state.auth.userId,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);