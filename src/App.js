import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/table.js';
import Add from './components/add.js'
import { updateUserList } from './actions';
import { connect } from 'react-redux'

var _ = require('lodash');

class App extends React.Component {
  handleSubmit = async (event, data) => {
    event.preventDefault();
    // console.log('data', data);
    let userData = this.props.userList
    // console.log('userData', userData);
    if (data.id) {
      let editDataIndex = userData.findIndex((user) => user.id === data.id);
      userData[editDataIndex] = { id: data.id, name: data.name, job: data.job, gender: data.gender, hobbies: data.hobby, profile_pic: data.profile_pic };
      await this.props.updateUserList(userData)
    } else {
      let maxId = _.maxBy(userData, function (o) { return o.id; });
      userData.push({ id: maxId.id + 1, name: data.name, job: data.job, gender: data.gender, hobbies: data.hobby, profile_pic: data.profile_pic })
      await this.props.updateUserList(userData)
    }
  }

  edit = (data) => {
    console.log('parent edit called')
    this.refs.addForm.edit(data);
  }

  render() {
    return (
      <div className="App">
        <div className="Table">
          <Table edit={this.edit} />
        </div>
        <div className="AddForm">
          <Add ref="addForm" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (allUsers) => ({
  userList: allUsers.list
});

const mapDispatchToProps = {
  updateUserList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
