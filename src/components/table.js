import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

class Table extends Component {
    render() {
        const { userData, edit } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody userData={userData} edit={edit} delete={this.props.delete} />
            </table>
        );
    }
}

export default Table;