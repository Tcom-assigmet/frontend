import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class CustomerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nic:"",
            cBranch:"",
            cAddress:"",
            cEmail:"",
            cusName:"",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    Changehandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    handleSubmit(e) {
        e.preventDefault();


        axios.post('https://telecomdb.herokuapp.com/customer', {
            nic:this.state.nic,
            cBranch:this.state.cBranch,
            cAddress:this.state.cAddress,
            cEmail:this.state.cEmail,
            cusName:this.state.cusName,
        })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        return(
            <div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">

                            <h1 className="h4 text-center"><strong>Add New Customer</strong></h1>

                        </div>
                    </div>

                    <form  className="cform" onSubmit={this.handleSubmit}>


                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7 ">
                                <label htmlFor="cusName">Name of the Customer</label>
                                <input type="text" className="form-control" id="cusName" name="cusName" style={{ fontSize: "medium" }}
                                       value={this.state.cusName} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7 ">
                                <label htmlFor="nic">NIC Number</label>
                                <input type="text" className="form-control" id="nic" name="nic" style={{ fontSize: "medium" }}
                                       value={this.state.nic} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7 ">
                                <label htmlFor="cAddress">Address</label>
                                <input type="text" className="form-control" id="cAddress" name="cAddress" style={{ fontSize: "medium" }}
                                       value={this.state.cAddress} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7 ">
                                <label htmlFor="cEmail">Email</label>
                                <input type="text" className="form-control" id="cEmail" name="cEmail" style={{ fontSize: "medium" }}
                                       value={this.state.cEmail} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>

                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-7 ">
                                <label htmlFor="cBranch">Branch</label>
                                <input type="text" className="form-control" id="cBranch" name="cBranch" style={{ fontSize: "medium" }}
                                       value={this.state.cBranch} onChange={this.Changehandler} required />
                            </div>
                            <div className="col-sm-4"></div>
                        </div>


                        <br/>
                        <div align="center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}

export default CustomerForm;