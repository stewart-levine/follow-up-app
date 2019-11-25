import React, { Component } from 'react';
import InteractionDetails from "./InteractionDetails";
import './FollowUp.css';
import Button from "@material-ui/core/Button";
export default class FollowUp extends Component {

    constructor(props) {
        super(props);
        // alert(props.data);
    };

    render() {
        return (
            <div className="popup">
                <div className="popup_inner">
                    <InteractionDetails />
                    <Button onClick={this.props.closePopup}>Close</Button>
                </div>
            </div>
        );
    }

}

