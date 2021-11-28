import React, {useEffect, useState} from "react";
import Axios from 'axios';
import './Customer.css';
import CustomerItem from "./CustomerItem";
import {Link} from "react-router-dom";

const Customers = (props) =>{

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
            Axios
                .get('https://telecomdb.herokuapp.com/customer')
                .then((responseData) => {
                    console.log(responseData);
                    setCustomers(responseData.data);
                })
                .catch(error => {
                    console.log(error)
                })


        },
        []
    );

    const customersComponent = () => {

        return customers.map((customer) => {
            return(
                <div>
                    <CustomerItem
                        key={customer.key}
                        id={customer._id}
                        nic={customer.nic}
                        cNumber={customer.cNumber}
                        cBranch={customer.cBranch}
                        cAddress={customer.cAddress}
                        cEmail={customer.cEmail}
                        cusName={customer.cusName}
                    ></CustomerItem>
                </div>
            ) ;
        });
    }

    return(
        <div>
            <br/>
            <p class="text-center font-monospace fw-bold fs-1">Customer Details</p>
            <br/>


            <div className="container">
                <div>
                    <Link to={"/cform"}>
                        <button type="button" className="btn btn-outline-dark"><i className="bi bi-person-plus"></i>Add New Customer</button>
                    </Link>
                </div>
                <br/>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th className="cus_th1">Name</th>
                        <th className="cus_th2">NIC</th>
                        <th className="cus_th3">Address</th>
                        <th className="cus_th4">Email</th>
                        <th className="cus_th5">Branch</th>
                        <th className="cus_th6">View Connection Details</th>
                        <th className="cus_td_btn">Edit</th>
                        <th className="cus_td_btn">Delete</th>
                    </tr>
                    </thead>
                </table>
                {customersComponent()}
            </div>
        </div>


    )
}
export default Customers;