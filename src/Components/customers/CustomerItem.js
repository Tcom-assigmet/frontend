import React from 'react';
import {Link} from "react-router-dom";
import './CustomerItem.css';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import SimCardOutlinedIcon from '@material-ui/icons/SimCardOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const CustomerItem = (props) => {

    return (
        <div>
            <div className="container">
                <table className="table">
                    <tbody>
                    <tr>
                        <td className="td1">{props.cusName}</td>
                        <td className="td2">{props.nic}</td>
                        <td className="td3">{props.cAddress}</td>
                        <td className="td4">{props.cEmail}</td>
                        <td className="td5">{props.cBranch}</td>
                        <td className="td6">
                            <Link to={`/connections/${props.id}`}><button type="button" className="btn btn-secondary"><SimCardOutlinedIcon/></button></Link>
                        </td>
                        <td className="td-btn">
                            <Link to={`/customers/${props.id}`}><button type="button" className="btn btn-primary"><EditOutlinedIcon/></button></Link>
                        </td>

                        <td className="td-btn"><button type="button" className="btn btn-danger"><DeleteForeverOutlinedIcon/></button></td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomerItem;