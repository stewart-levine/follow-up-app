import React from 'react';
import './FollowUp.css';
import Button from "@material-ui/core/Button";
import Notification from "./Notification/Notification";

export default function Followup(props) {

    return (
        <div className="popup">
            <div className="popup_inner">
                <p/>
                <div className={"participantInfo"}>Name: {props.participantData[2]} {props.participantData[3]}</div>
                <div className={"participantInfo"}>Email: {props.participantData[4]}</div>
                <div className={"participantInfo"}>Phone: {props.participantData[5]}</div>
                <div className={"vehicleInfo"}>Vehicle: {props.participantData[6]} {props.participantData[7]} {props.participantData[8]}</div>

                <Notification
                    row={props.participantData}
                    notificationStatus={props.updateStatus}
                />

                {/*<Button*/}
                {/*    className={"buttonStyle"}*/}
                {/*    onClick={this.props.updateStatus(this.props.participantData[1])}*/}
                {/*>*/}
                {/*    Save*/}
                {/*</Button>*/}
                <p className={"buttonStyle"}>
                <Button
                    onClick={props.closePopup}
                >
                    Close
                </Button>
                </p>
            </div>
        </div>
    );

}

