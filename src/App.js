import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/table.js';
import Add from './components/add.js'
import { dispatch } from 'rxjs/internal/observable/pairs';
import { getAllUsers } from './actions';

var _ = require('lodash');

class App extends Component {
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
    dispatch(getAllUsers(this.state.users))
  }

  handleSubmit = (event, data) => {
    event.preventDefault();
    console.log('data', data);
    let userData = this.state.users
    if (data.id) {
      let editDataIndex = userData.findIndex((user) => user.id === data.id);
      // delete data.id;
      userData[editDataIndex] = { id: data.id, name: data.name, job: data.job, gender: data.gender, hobbies: data.hobby, profile_pic: data.profile_pic };
    } else {
      let maxId = _.maxBy(userData, function (o) { return o.id; });
      userData.push({ id: maxId.id + 1, name: data.name, job: data.job, gender: data.gender, hobbies: data.hobby, profile_pic: data.profile_pic })
    }
    this.setState({ users: userData })
  }

  edit = (data) => {
    console.log('parent edit called')
    // dispatch(getAllUsers(this.state.users))
    this.refs.addForm.edit(data);

  }

  delete = (data) => {
    let userData = this.state.users
    console.log('this.state.id', data.id);
    userData = userData.filter((user) => user.id !== data.id)
    // let deleteDataIndex = userData.findIndex((data) => data.id === this.state.id);
    console.log('delete index', userData);
    dispatch(getAllUsers(userData))
    // this.setState({ users: userData })
  }

  render() {
    return (
      <div className="App">
        <Table userData={this.state.users} edit={this.edit} delete={this.delete} />
        <Add ref="addForm" handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
