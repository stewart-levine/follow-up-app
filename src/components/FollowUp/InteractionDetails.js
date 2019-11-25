import React from "react";
import TextField from "@material-ui/core/TextField";
import classes from './InteractionDetails.css'
import StatusSelect from "./StatusSelect/StatusSelect";

function handleChange() {
    alert('[handleChange] has been called')
}

const interactionDetails = (props) => {
    return (
        <div className={classes.container}>
            <StatusSelect />
            <TextField
                required
                classname={classes.textField}
                id="author"
                label="Author"
            />
            <TextField
                classname={classes.textField}
                id="timestamp"
                label="Timestamp"
                InputProps={{
                    readOnly: true
                }}
            />
            <TextField
                classname={classes.noteField}
                required
                id="notes"
                label="Notes"
            />
        </div>);
};

export default interactionDetails;
