import React, {useEffect, useState} from 'react';
import Axios from "axios";

const PaymentItem = (props) => {

    const [connection, setConnection] = useState([]);

    useEffect(() => {
            Axios
                .get('https://telecomdb.herokuapp.com/connection/'+props.connection)
                .then((responseData) => {
                    console.log(responseData);
                    setConnection(responseData.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        []
    );



    return (
        <div>
            <div className="container">
                <table className="table">
                    <tbody>
                    <tr>
                        <td className="p_td1">{props.id}</td>
                        <td className="p_td2">{connection.phoneNum}</td>
                        <td className="p_td3">{props.amount}</td>
                        <td className="p_td4">{props.date}</td>
                        <td className="td-btn"><button type="button" className="btn btn-primary">Edit</button></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentItem;