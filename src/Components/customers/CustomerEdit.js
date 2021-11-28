import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const CustomerEdit = (props) => {

    const params = useParams();
    const [eventList, setEventList] = useState([]);

    const [event, setEvent] = useState({
        _id: '', nic: '',  cBranch: '', cAddress: '', cEmail: '',cusName: ''
    })


    useEffect(() => {
        console.log(params.id);
        fetch(
            `https://telecomdb.herokuapp.com/customer/${params.id}`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                console.log(responseData)
                setEventList(responseData);

            });
    }, [params.id]);

    const onChange = (e) => {

        e.persist();

        setEvent({ ...event, [e.target.name]: e.target.value });

    }

    const updateEvent = (e) => {
        e.preventDefault();
        console.log("updated!!!")

        var axios = require('axios');

        var data = JSON.stringify({
            "id": eventList.id,
            "nic": event.nic === "" ? eventList.nic : event.nic,
            "cBranch": event.cBranch === "" ? eventList.cBranch : event.cBranch,
            "cAddress": event.cAddress === "" ? eventList.cAddress : event.cAddress,
            "eEmail": event.eEmail === "" ? eventList.eEmail : event.eEmail,
            "cusName": event.cusName === "" ? eventList.cusName : event.cusName,
        });

        console.log(data)
        var config = {
            method: 'patch',
            url: `https://telecomdb.herokuapp.com/customer/${params.id}`,
            headers: {
                'Content-Type': 'application/json',

            },
            data: data
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        alert("Updated Successfully!")

    };


    return(
        <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">

                        <h1 className="h4 text-center"><strong>Edit Customer Details</strong></h1>

                    </div>
                </div>

                <form onSubmit={updateEvent}>


                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-7 ">
                            <label htmlFor="cusName">Name of the Customer</label>
                            <input type="text" className="form-control" id="cusName" name="cusName" style={{ fontSize: "medium" }}
                                   placeholder={eventList.cusName} value={event.cusName} onChange={onChange}/>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-7 ">
                            <label htmlFor="nic">NIC Number</label>
                            <input type="text" className="form-control" id="nic" name="nic" style={{ fontSize: "medium" }}
                                   placeholder={eventList.nic} value={event.nic} onChange={onChange} />
                        </div>
                        <div className="col-sm-4"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-7 ">
                            <label htmlFor="cAddress">Address</label>
                            <input type="text" className="form-control" id="cAddress" name="cAddress" style={{ fontSize: "medium" }}
                                   placeholder={eventList.cAddress} value={event.cAddress} onChange={onChange}/>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-7 ">
                            <label htmlFor="cEmail">Email</label>
                            <input type="text" className="form-control" id="cEmail" name="cEmail" style={{ fontSize: "medium" }}
                                   placeholder={eventList.cEmail} value={event.cEmail} onChange={onChange}/>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-7 ">
                            <label htmlFor="cBranch">Branch</label>
                            <input type="text" className="form-control" id="cBranch" name="cBranch" style={{ fontSize: "medium" }}
                                   placeholder={eventList.cBranch} value={event.cBranch} onChange={onChange}/>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>


                    <br/>
                    <div align="center">
                        <button type="submit" className="btn btn-primary">Update</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default CustomerEdit;