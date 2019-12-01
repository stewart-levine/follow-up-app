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
    const [author, setAuthor] = React.useState('');
    const [note, setNote] = React.useState('');

    const saveNotification = () => {
        const str = "Notification saveNotification fired with\n"
                +   "\tstatus: " + status
                +   "\tauthor: " + author
                +   "\tnote: " + note;
        alert(str);
        props.notificationStatus(props.row[0], status);
        // setNotification = {
        //     status: newNotification.status,
        //     timestamp: new Date(),
        //     author: newNotification.author,
        //     note: newNotification.note
        // }
    }

    const handleChange = event => {
        switch(event.target.name) {
            case('status'):
                setStatus(event.target.value);
                break;
            case('author'):
                setAuthor(event.target.value);
                break;
            case('note'):
                setNote(event.target.value);
                break;
            default:
        }
        // alert('newNotification ' + event.target.name + ' updated: ' + event.target.value)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="notification-status-select-label">Status *</InputLabel>
                <Select
                    labelId="status-select-label"
                    id="status-select"
                    name="status"
                    value={status}
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
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    required
                    classname={classes.textField}
                    id="author"
                    name="author"
                    label="Author"
                    onBlur={handleChange}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField
                    classname={classes.noteField}
                    required
                    id="note"
                    name="note"
                    label="Note"
                    onBlur={handleChange}
                />
            </FormControl>
            <FormControl className={classes.formControl}>
                <Button
                    className={"buttonStyle"}
                    onClick={saveNotification.bind(this)}
                >
                    Save
                </Button>
            </FormControl>

        </div>
    );
}
