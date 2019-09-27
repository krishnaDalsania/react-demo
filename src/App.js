import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/table.js';
import Add from './components/add.js'
import { getAllUsers, addUser } from './actions';
import { connect } from 'react-redux'

var _ = require('lodash');

class App extends React.Component {
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
  }

  componentDidMount = async () => {
    // await this.props.getAllUsers(this.state.users)
    // dispatch(getAllUsers(this.state.users))
  }

  handleSubmit = async (event, data) => {
    event.preventDefault();
    // console.log('data', data);
    let userData = this.props.userList
    // console.log('userData', userData);
    if (data.id) {
      let editDataIndex = userData.findIndex((user) => user.id === data.id);
      userData[editDataIndex] = { id: data.id, name: data.name, job: data.job, gender: data.gender, hobbies: data.hobby, profile_pic: data.profile_pic };
    } else {
      let maxId = _.maxBy(userData, function (o) { return o.id; });
      userData.push({ id: maxId.id + 1, name: data.name, job: data.job, gender: data.gender, hobbies: data.hobby, profile_pic: data.profile_pic })
    }
    await this.props.addUser(userData)
  }

  edit = (data) => {
    console.log('parent edit called')
    this.refs.addForm.edit(data);
  }

  delete = (data) => {
    let userData = this.state.users
    console.log('this.state.id', data.id);
    userData = userData.filter((user) => user.id !== data.id)
    console.log('delete index', userData);
  }

  render() {
    return (
      <div className="App">
        <Table edit={this.edit} delete={this.delete} />
        <Add ref="addForm" handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (allUsers) => ({
  userList: allUsers.list
});

const mapDispatchToProps = {
  getAllUsers,
  addUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
