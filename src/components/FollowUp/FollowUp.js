import React, { Component } from 'react';
import './FollowUp.css';
import Button from "@material-ui/core/Button";
import Notification from "./Notification/Notification";
export default class FollowUp extends Component {

    constructor(props) {
        super(props);
        this.setState({
            notification: {
                status: '',
                    timestamp: '',
                author: '',
                note: ''
            }
        });
    };

    notificationWrapper(status) {
        this.props.saveStatus(status);
    }

    render() {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <div>{this.props.data[1]}</div>
                    <Notification
                        noteData={this.notificationWrapper.bind(this)}/>
                    <Button
                        className={"buttonStyle"}
                        onClick={this.props.closePopup}
                    >
                        Close
                    </Button>
                    <Button
                        className={"buttonStyle"}
                        onClick={this.props.saveNote(this.props.data[0])}
                    >
                        Save
                    </Button>
                </div>
            </div>
        );
    }

}

