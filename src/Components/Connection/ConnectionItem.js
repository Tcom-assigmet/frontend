import React, { useState } from 'react';
import './ConnectionItem.css';
import SpeakerPhoneOutlinedIcon from '@material-ui/icons/SpeakerPhoneOutlined';
import PermScanWifiOutlinedIcon from '@material-ui/icons/PermScanWifiOutlined';
import DataUsageOutlinedIcon from '@material-ui/icons/DataUsageOutlined';

const ConnectionItem = (props) => {

    return(
        <div className="connection_box">
            <div className="card connection_cd">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-2"><SpeakerPhoneOutlinedIcon/></div>
                        <div className="col-sm-4"><p>Phone Number:</p></div>
                        <div className="col-sm-6">{props.phoneNum}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2"><PermScanWifiOutlinedIcon/></div>
                        <div className="col-sm-4"><p>Package:</p></div>
                        <div className="col-sm-6">{props.pName}</div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2"><DataUsageOutlinedIcon/></div>
                        <div className="col-sm-4"><p>Data:</p></div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-6">Anytime</div>
                                <div className="col-sm-6">{props.data}</div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">Night Time</div>
                                <div className="col-sm-6">{props.freeData}</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4"><p>Connection Status:</p></div>
                        <div className="col-sm-6">{props.connectionstatus}</div>
                    </div>

                </div>
                <br/>
            </div>
        </div>

    )
}

export default ConnectionItem;