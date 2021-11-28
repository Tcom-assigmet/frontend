import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from "react-router";

class Package_Item extends Component {

    componentDidMount() {


    }

    handledelete = ()=>{
        var axios = require('axios');

        var config = {
            method: 'delete',
            url: `https://telecomdb.herokuapp.com/package/${this.props.id}`,
            headers: { }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert("deleted!")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (

        <div className="col">



            <div className="card border-primary mb-3" style={{width: "18rem"}}>
                <div className="card-body text-primary">
                    <h5 className="card-title">{this.props.pName}</h5>

                    <p className="card-text"><span className="badge bg-primary">Data</span> - {this.props.data}</p>
                    <p className="card-text"><span className="badge bg-primary">Free Data</span> - {this.props.freedata}</p>
                    <p className="card-text"><span className="badge bg-primary">Monthly Rental</span> - {this.props.rental}</p>
                    <p className="card-text"><span className="badge bg-primary">{this.props. postPaid?"Post Paid":"Pre Paid"}</span></p>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Link to={`/${this.props.id}`} type="button" className="btn btn-primary" >
                                 Edit
                                </Link>
                            </div>
                            <div className="col">

                            </div>
                            <div className="col">
                                <button type="button" className="btn btn-danger" onClick={this.handledelete}>Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

        )
    }
}

export default Package_Item;