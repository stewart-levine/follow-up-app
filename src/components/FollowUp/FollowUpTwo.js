import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const columns = [
    { id: 'status', label: 'Status', minWidth: 120, type: Select },
    { id: 'author', label: 'Author', minWidth: 120, type: TextField },
    { id: 'timestamp', label: 'Timestamp', minWidth: 150, type: TextField, InputProps: {readOnly: true}, format: value => value.toLocaleString() },
    { id: 'notes', label: 'Notes', minWidth: 300, type: TextField }
];

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function FollowUpTwo() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <Select value={age} onChange={handleChange} displayEmpty className={classes.selectEmpty}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Without label</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                    Age
                </InputLabel>
                <Select
                    labelId="demo-simple-select-placeholder-label-label"
                    id="demo-simple-select-placeholder-label"
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText>Label + placeholder</FormHelperText>
            </FormControl>
        </div>
    );
}
