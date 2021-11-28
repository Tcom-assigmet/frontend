import React, {useState} from "react";
import "./login.css";
import {connect} from "react-redux";
import {auth} from "../../../src/store/actions/index";
const Login = (props) =>{

    const  [state, setstate] = useState(  {

        password: "",
        email: "",


        errors: {
            password: "",
            email: "",

        },
        isvalid:false,

    })

    const  Changehandler = (event) => {
        setstate({[event.target.name]: event.target.value})
    }

    const   formValChange = (event) => {
        event.preventDefault();
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        const validPnumRegex = RegExp(
            /^[0-9]{10}$/
        );
        const validletterRegex = RegExp(
            /^[a-zA-Z]+$/
        );
        const { name, value } = event.target;
        let errors = { ...state.errors };
        switch (name) {


            case "password":
                if (value.length < 6) {
                    errors.password = "Password must be 6 characters long!";
                } else {
                    errors.password = "";
                    setstate({
                        ...state,
                        password: value,
                    });
                }
                break;

            case "email":
                if (!validEmailRegex.test(value)) {
                    errors.email = "Email is not valid!";
                } else {
                    errors.email = "";
                    setstate({
                        ...state,
                        email: value,
                    });
                }
                break;

        }

        setstate({
            ...state,
            errors,
            [name]: value,
        });

    };
    const { errors } = state;

    const login =(e)=> {

        e.preventDefault();
        errors.password==""&&errors.email==""?state.isvalid=true:state.isvalid=false;
        if (state.isvalid===true) {
            // console.log(state.email)
            // console.log(state.password)
             props.onAuth(state.email, state.password);
        }
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-6">

                        <br/>
                        <form onSubmit={login}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input name="email" type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"  value={state.email}
                                       onChange={formValChange}/>
                                <div className="text-danger">{state.errors.email}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="exampleInputPassword1"  value={state.password}
                                       onChange={formValChange}/>
                                <div className="text-danger">{state.errors.password}</div>
                            </div>

                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>


                    </div>
                    <div className="col-sm-3">

                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        userid: state.auth.userId,
        loading: state.auth.loading,
        error: state.auth.error,
        // role:state.auth.role
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(auth(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
