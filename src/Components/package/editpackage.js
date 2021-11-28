import React, {useState} from "react";


const EditPackage = (props) =>{
    const [state, setstate] = useState({


        data: 0,
        freeData: 0,
        monthlyRental: 0,
        postPaid:true,
        pName:'',
        errors: {

            data: "",
            freeData: "",
            monthlyRental: '',
            postPaid:'',
            pName:'',
        },
        isvalid: false,

    })

    const handleSubmit = e => {

        e.preventDefault();
        errors.data == "" && errors.freeData == "" ? state.isvalid = true : state.isvalid = false;
        console.log(state.isvalid);
        console.log(state.pName)
        if (state.isvalid == true) {
            var axios = require('axios');

            var data = JSON.stringify(
                {
                    "data": `${state.data.toString()} GB`,
                    "freeData": `${state.freeData.toString()} GB`,
                    "monthlyRental": `Rs ${state.data.toString()}`,
                    "postPaid": true,
                    "pName": state.pName
                }
            );
// console.log(data)
            var config = {
                method: 'post',
                url: ` https://telecomdb.herokuapp.com/package`,
                headers: {
                    'Content-Type': 'application/json',

                },
                data: data
            };
            axios(config)
                .then(function (response) {
                    //console.log(JSON.stringify(response.data));
                    alert("Updated Successfully!")
                })
                .catch(function (error) {
                    console.log(error);
                });


        }else {
            alert('Please input correct details');
        }


    }

    const formValChange = (event) => {
        event.preventDefault();
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );

        const {name, value} = event.target;
        let errors = {...state.errors};
        switch (name) {

            case "data":
                if (value===0) {
                    errors.data = "Value cannot be zero";
                } else {
                    errors.data = "";
                    setstate({
                        ...state,
                        data: value,
                    });
                }
                break;
            case "freeData":
                if (value===0) {
                    errors.freeData = "Value cannot be zero";
                } else {
                    errors.freeData = "";
                    setstate({
                        ...state,
                        freeData: value,
                    });
                }
                break;
            case "monthlyRental":
                if (value === 0) {
                    errors.monthlyRental = "monthlyRental cannot be zero";
                } else {
                    errors.monthlyRental = "";
                    setstate({
                        ...state,
                        monthlyRental: value,
                    });
                }
                break;

            case "pName":
                if (value.length < 3) {
                    errors.pName = "Package Name must needed";
                } else {
                    errors.pName = "";
                    setstate({
                        ...state,
                        pName: value,
                    });
                }
                break;
            default:
                break;
        }

        setstate({
            ...state,
            errors,
            [name]: value,
        });

    };
    const {errors} = state;


    return(

        <div className="container ">

            <div className="row">


            </div>


            <br/>
            <form onSubmit={handleSubmit}>

                <div className="row">


                    <div className="row">



                        <div className="col-sm-5"><h6 className="mb-0"><label>Data</label></h6></div>
                        <div className="col-sm-5"><input type="number" className="form-control rounded-pill"
                                                         name="data" onChange={formValChange} required

                        /></div>
                        <div className="text-danger">{state.errors.data}</div>
                    </div>

                    <hr></hr>

                    <div className="row">


                        <div className="col-sm-5"><h6 className="mb-0"><label>Free Data</label></h6></div>
                        <div className="col-sm-5"><input type="number" className="form-control rounded-pill"
                                                         name="freeData" onChange={formValChange} required

                        /></div>
                        <div className="text-danger">{state.errors.freeData}</div>
                    </div>

                    <hr></hr>

                    <div className="row">


                        <div className="col-sm-5"><h6 className="mb-0"><label>Monthly Rental</label></h6></div>
                        <div className="col-sm-5"><input type="number" className="form-control rounded-pill"
                                                         name="monthlyRental" onChange={formValChange} required

                        /></div>
                        <div className="text-danger">{state.errors.monthlyRental}</div>
                    </div>
                    <hr></hr>
                    <div className="row">


                        <div className="col-sm-5"><h6 className="mb-0"><label>Package Name</label></h6></div>
                        <div className="col-sm-5"><input type="text" className="form-control rounded-pill"
                                                         name="pName" onChange={formValChange} required

                        /></div>
                        <div className="text-danger">{state.errors. pName}</div>
                    </div>




                    <div className="row">
                        <div className="col-sm-5"></div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-3">
                            <button className="btn btn-secondary " type='submit'>Save</button>
                        </div>
                    </div>


                </div>
            </form>

        </div>

    )

}
export default EditPackage;