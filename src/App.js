import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import FollowUp from './components/FollowUp/FollowUp'
import StatusButton from "./components/Buttons/FollowUpButton/FollowUpButton";
import './App.css';
import Button from "@material-ui/core/Button";

const headings = [
    'Follow Up',
    'First Name',
    'Last Name',
    'Email',
    'Phone',
    'Year',
    'Make',
    'Model',
    'VIN'
];

const rows = [
    ['green', 'John', 'Doe', 'jdoe@mail.com', '3135551212', '2020', 'Ford', 'Mustang', '1SEL6563862G56787'],
    ['yellow', 'Paul', 'Smith', 'jsmith@mail.com', '3135554343', '2020', 'Lincoln', 'Aviator', '1XJE8FD899A89878S'],
    ['red', 'George', 'Doe', 'gdoe@mail.com', '3135551223', '2020', 'Lincoln', 'Corsair', '1XJE8FD899A8U8772']
];

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showFollowUp: false,
            followUpRow: {}
        };
    };

    togglePopup(row) {
        alert('togglePopup before saving state, row data= ' + row)
        this.setState({
            showFollowUp: !this.state.showFollowUp,
            followUpRow: row
        });
        // alert('after togglePopup= '  + this.state.showFollowUp)
    }

    saveNote(note) {
        const updatedRow = {...this.followUpRow, note}
        alert('Save notification info and change followup status to: ' + updatedRow)

    }

    saveStatus(note) {
        alert('Save notification status to: ' + note)

    }

    render() {
        // alert('showFollowUp= ' + this.state.showFollowUp)
        return (
            <div>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{headings[0]}</TableCell>
                            <TableCell>{headings[1]}</TableCell>
                            <TableCell>{headings[2]}</TableCell>
                            <TableCell>{headings[3]}</TableCell>
                            <TableCell>{headings[4]}</TableCell>
                            <TableCell>{headings[5]}</TableCell>
                            <TableCell>{headings[6]}</TableCell>
                            <TableCell>{headings[7]}</TableCell>
                            <TableCell>{headings[8]}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell align="left">
                                    <Button
                                        onClick={this.togglePopup.bind(this, row)}
                                    >
                                        <StatusButton status={row[0]}/>
                                    </Button>
                                </TableCell>
                                <TableCell align="left">{row[1]}</TableCell>
                                <TableCell align="left">{row[2]}</TableCell>
                                <TableCell align="left">{row[3]}</TableCell>
                                <TableCell align="left">{row[4]}</TableCell>
                                <TableCell align="left">{row[5]}</TableCell>
                                <TableCell align="left">{row[6]}</TableCell>
                                <TableCell align="left">{row[7]}</TableCell>
                                <TableCell align="left">{row[8]}</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
                {this.state.showFollowUp ?
                    <FollowUp
                        data={this.state.followUpRow}
                        closePopup={this.togglePopup.bind(this)}
                        saveNote={this.saveNote.bind(this)}
                        saveStatus={this.saveStatus.bind(this)}
                    />
                    : null}
            </div>
        );
    }
}

export default App;