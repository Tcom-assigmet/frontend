import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ConnectionItem from "../Connection/ConnectionItem";

const Connections = (props) =>{

    const params = useParams();
    const [connections, setConnections] = useState([]);

    useEffect(() => {
        console.log(params.id);
        fetch(
            `https://telecomdb.herokuapp.com/connectionbycus/${params.id}`
        )

            .then((response) => {
                return response.json();
            })
            .then((responseData) => {
                console.log(responseData)
                setConnections(responseData);

            });
    }, [params.id]);

    const connectionsComponent = () => {

        return connections.map((connection) => {
            return(
                <div>
                    <ConnectionItem
                        key={connection.key}
                        id={connection._id}
                        connectionstatus={connection.connectionstatus}
                        phoneNum={connection.phoneNum}
                        pName={connection.package.pName}
                        data={connection.package.data}
                        freeData={connection.package.freeData}
                        monthlyRental={connection.package.monthlyRental}
                    ></ConnectionItem>
                </div>
            ) ;
        });
    }

    return(
        <div>
            <br/>
            <p className="text-center font-monospace fw-bold fs-1">Connection Details</p>
            <br/>

            <div className="container">
                {connectionsComponent()}
            </div>

        </div>
    )



}
export default Connections;