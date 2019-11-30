import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    textField: {
        margin: 20,
        minWidth: 150
    },
    noteField: {
        margin: 20,
        minWidth: 300
}
}));

export default function Notification(props) {
    const classes = useStyles();
    const [status, setStatus] = React.useState('');

    let noteStatus;

    // const inputLabel = React.useRef(null);
    // const [labelWidth, setLabelWidth] = React.useState(0);
    // React.useEffect doesn't compile
    // React.useEffect(() => {
    //     setLabelWidth(inputLabel.current.offsetWidth);
    // }, []);

    const handleChange = event => {
        // setStatus(event.target.value);
        noteStatus=event.target.value;
        event.target.selected=true;
        alert('Notification state updated: ' + event.target.value)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="notification-status-select-label">Status *</InputLabel>
                <Select
                    labelId="status-select-label"
                    id="status-select"
                    value={noteStatus}
                    onChange={handleChange}
                >
                    <MenuItem value={'green'}>Green</MenuItem>
                    <MenuItem value={'yellow'}>Yellow</MenuItem>
                    <MenuItem value={'red'}>Red</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    classname={classes.textField}
                    id="timestamp"
                    label="Timestamp"
                    InputProps={{
                        readOnly: true
                    }}
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    required
                    classname={classes.textField}
                    id="author"
                    label="Author"
                    onChange={handleChange}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    classname={classes.noteField}
                    required
                    id="notes"
                    label="Notes"
                    onBlur={handleChange}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <Button
                    className={"buttonStyle"}
                    onClick={props.noteData('orange')}
                >
                    Save
                </Button>
            </FormControl>

        </div>
    );
}
