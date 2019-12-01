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

const fields = [
    'id',
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

let rows = [
    [5, 'green', 'John', 'Doe', 'jdoe@mail.com', '3135551212', '2020', 'Ford', 'Mustang', '1SEL6563862G56787'],
    [10, 'yellow', 'Paul', 'Smith', 'jsmith@mail.com', '3135554343', '2020', 'Lincoln', 'Aviator', '1XJE8FD899A89878S'],
    [12, 'red', 'George', 'Doe', 'gdoe@mail.com', '3135551223', '2020', 'Lincoln', 'Corsair', '1XJE8FD899A8U8772']
];

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: fields,
            data: rows,
            showFollowUp: false,
            followUpRow: {}
        };
    };

    togglePopup(row) {
        alert('App togglePopup before saving state, row data= ' + row)
        this.setState({
            showFollowUp: !this.state.showFollowUp,
            followUpRow: row
        });
        // alert('after togglePopup= '  + this.state.showFollowUp)
    }

    updateNotificationStatus(rowId, notificationStatus) {
        alert('App updateNotificationStatus params--- \nrowId: ' + rowId + '\nstatus: ' + notificationStatus);

        let index=-1;
        this.setState(oldState => {
            for(let i=0; i<oldState.data.length; i++) {
                // alert('App looping oldState.data' + oldState.data[i]);
                if(oldState.data[i][0]===rowId) {
                    index = i;
                }
            }
            alert('App updateNotificationStatus setState oldState.data length: ' + oldState.data.length);
            alert('App updateNotificationStatus setState updated row index ' + index);
            alert('App updateNotificationStatus setState oldState.data.status1 \n' + oldState.data[index][1]);
            let newState = {...oldState};
            let newData = newState.data.slice();
            let newRow = newData[index];
            alert('App updateNotificationStatus setState orig newData \n' + newData);
            alert('App updateNotificationStatus setState orig newRow \n' + newRow);
            newRow[1] = notificationStatus;
            // alert('newRow after updating status: \n' + newRow);
            newData[index] = newRow;
            alert('App updateNotificationStatus setState updated newRow \n' + newRow);
            alert('App updateNotificationStatus setState updated newData \n' + newData);
            newState.data = newData;
            // let rowCopy = Object.assign({}, oldState.data[index]);
            // rowCopy.status = notificationStatus;
            // newData[index] = rowCopy;
            alert('App updateNotificationStatus setState oldState.data.status2 \n' + oldState.data[index][1]);
            alert('App updateNotificationStatus setState newData updated row status: ' + newData[index][1]);
            return newState
        });
    }

    render() {
        // alert('showFollowUp= ' + this.state.showFollowUp)
        return (
            <div>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>{this.state.headers[1]}</TableCell>
                            <TableCell>{this.state.headers[2]}</TableCell>
                            <TableCell>{this.state.headers[3]}</TableCell>
                            <TableCell>{this.state.headers[4]}</TableCell>
                            <TableCell>{this.state.headers[5]}</TableCell>
                            <TableCell>{this.state.headers[6]}</TableCell>
                            <TableCell>{this.state.headers[7]}</TableCell>
                            <TableCell>{this.state.headers[8]}</TableCell>
                            <TableCell>{this.state.headers[9]}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.data.map(row => (
                            <TableRow key={row.index}>
                                <TableCell align="left">
                                    <Button
                                        onClick={this.togglePopup.bind(this, row)}
                                    >
                                        <StatusButton status={row[1]}/>
                                    </Button>
                                </TableCell>
                                <TableCell align="left">{row[2]}</TableCell>
                                <TableCell align="left">{row[3]}</TableCell>
                                <TableCell align="left">{row[4]}</TableCell>
                                <TableCell align="left">{row[5]}</TableCell>
                                <TableCell align="left">{row[6]}</TableCell>
                                <TableCell align="left">{row[7]}</TableCell>
                                <TableCell align="left">{row[8]}</TableCell>
                                <TableCell align="left">{row[9]}</TableCell>
                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
                {this.state.showFollowUp ?
                    <FollowUp
                        participantData={this.state.followUpRow}
                        closePopup={this.togglePopup.bind(this)}
                        // saveNote={this.saveNote.bind(this)}
                        updateStatus={this.updateNotificationStatus.bind(this)}
                    />
                    : null}
            </div>
        );
    }
}

export default App;