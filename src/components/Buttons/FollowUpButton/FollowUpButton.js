import React from 'react';
import classes from './FollowUpButton.css';
import AddCircleIcon from '@material-ui/icons/AddCircleRounded';
import WarningIcon from '@material-ui/icons/WarningRounded';
import IconButton from "@material-ui/core/IconButton";

const followUpButton = (props) => {

    switch (props.status) {
        case 'yellow':
            return (
                <IconButton>
                    <WarningIcon
                        className={classes.buttonStyle}
                        style={{color: 'gold'}}
                    />
                </IconButton>
            );
        case 'red':
            return (
                <IconButton>
                    <WarningIcon
                        className={classes.buttonStyle}
                        style={{color: 'red'}}
                    />
                </IconButton>
            );
        default:
            return (
                <IconButton>
                    <AddCircleIcon
                        className={classes.buttonStyle}
                        style={{color: 'green'}}
                    />
                </IconButton>
            );
    }
};

export default followUpButton;