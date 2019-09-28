import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import './table.css'
import { getAllUsers, updateUserList } from '../actions';
import { connect } from 'react-redux'
class Table extends Component {
    state = {
        users: [
            {
                'id': 1,
                'name': 'Charlie1111',
                'job': 'Janitor',
                'gender': 'Female',
                'hobbies': [],
                'profile_pic': ''
            },
            {
                'id': 2,
                'name': 'Mac',
                'job': 'Bouncer',
                'gender': 'Male',
                'hobbies': [],
                'profile_pic': ''
            },
            {
                'id': 3,
                'name': 'Dee',
                'job': 'Aspring actress',
                'gender': 'Female',
                'hobbies': [],
                'profile_pic': ''
            },
            {
                'id': 4,
                'name': 'Dennis',
                'job': 'Bartender',
                'gender': 'Female',
                'hobbies': [],
                'profile_pic': ''
            }
        ]
    };

    componentDidMount = async () => {
        await this.props.getAllUsers(this.state.users)
    }

    delete = async (data) => {
        console.log('delete id ', data.id);
        let userData = this.props.userList;
        userData = userData.filter((user) => user.id !== data.id)
        await this.props.updateUserList(userData)
    }

    render() {
        const { edit } = this.props;
        console.log('table render call')
        return (
            <table>
                <TableHeader />
                {this.props.userList && <TableBody userData={this.props.userList} edit={edit} delete={this.delete} />}
            </table>
        );
    }
}

const mapStateToProps = (allUsers) => ({
    userList: allUsers.list
});

const mapDispatchToProps = {
    getAllUsers,
    updateUserList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Table);