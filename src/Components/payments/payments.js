import React, {useEffect, useState} from "react";
import './payments.css';
import Axios from "axios";
import PaymentItem from "../payments/PaymentItem";

const Payments = (props) =>{

    const [payments, setPayments] = useState([]);

    useEffect(() => {
            Axios
                .get('https://telecomdb.herokuapp.com/payment')
                .then((responseData) => {
                    console.log(responseData);
                    setPayments(responseData.data);
                })
                .catch(error => {
                    console.log(error)
                })


        },
        []
    );

    const paymentsComponent = () => {

        return payments.map((payment) => {
            return(
                <div>
                    <PaymentItem
                        key={payment.key}
                        id={payment._id}
                        amount={payment.amount}
                        date={payment.date}
                        connection={payment.connection}
                    ></PaymentItem>
                </div>
            ) ;
        });
    }

    return(
        <div>
            <br/>
            <p className="text-center font-monospace fw-bold fs-1">Payment Details</p>
            <br/>
            <div className="container">
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th className="p_th1">Bill Id</th>
                        <th className="p_th2">Telephone Number</th>
                        <th className="p_th3">Bill Amount</th>
                        <th className="p_th4">Date</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>

                </table>
                {paymentsComponent()}
            </div>
        </div>
    )
}
export default Payments;