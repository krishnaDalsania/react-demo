import React from 'react';

class Add extends React.Component {
    state = {
        name: 'dfgd',
        job: '',
        gender: '',
        hobby: '',
        profile_pic: '',

        hobbies: [
            {
                name: 'Singing',
                isChecked: false
            },
            {
                name: 'Dancing',
                isChecked: false
            },
            {
                name: 'Music',
                isChecked: false
            }
        ]
    }

    handleSubmit = (event) => {
        this.props.handleSubmit(event, this.state)
        this.setState({ name: '', job: '', id: '', profile_pic: '' })
    }

    handleNameChange = (event) => {
        console.log('---------event', event.target.name);
        this.setState({ [event.target.name]: event.target.value })
    }

    handleJobChange = (event) => {
        this.setState({ job: event.target.value })
    }

    handleGenderChange = (event) => {
        this.setState({ gender: event.target.value })
    }

    handleHobbyChange = (event) => {
        console.log('---hobby change', event.target.checked)
        let hobbyList = this.state.hobbies;
        let selectedHobby = [];
        hobbyList.forEach((hobby) => {
            if (hobby.name === event.target.value) {
                hobby.isChecked = event.target.checked
            }
            if (hobby.isChecked)
                selectedHobby.push(hobby.name);
        })
        this.setState({ hobbies: hobbyList, hobby: selectedHobby })
    }

    edit = (data) => {
        console.log('edit data', data);
        let selectedHobby = this.state.hobbies;
        selectedHobby.forEach((hobby) => {
            hobby.isChecked = (data.hobbies.includes(hobby.name)) ? true : false
        })
        this.setState({ id: data.id, name: data.name, job: data.job, gender: data.gender, hobbies: selectedHobby, profile_pic: data.profile_pic })
    }

    onChangeHandler = (event) => {
        console.log(event.target.files[0])
        this.setState({ profile_pic: event.target.files[0].name })
    }

    render() {
        return (
            <div>
                {/* <Table userData={this.state.users} edit={this.edit} delete={this.delete} /> */}
                <form>
                    <div>
                        <label>
                            Name:
                        <input name="name" value={this.state.name} onChange={this.handleNameChange}></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Job:
                            <select name="job" value={this.state.job} onChange={this.handleJobChange}>
                                <option value="">Select Job</option>
                                <option value="Janitor">Janitor</option>
                                <option value="Bouncer">Bouncer</option>
                                <option value="Aspring actress">Aspring actress</option>
                                <option value="Bartender">Bartender</option>
                            </select>
                            {/* <input name="job" value={this.state.job} onChange={this.handleJobChange}></input> */}
                        </label>
                    </div>
                    <div>
                        <label>
                            Gender:
                            <input type="radio" name="gender" value="Male" checked={this.state.gender === 'Male'} onChange={this.handleGenderChange} />Male
                            <input type="radio" name="gender" value="Female" checked={this.state.gender === 'Female'} onChange={this.handleGenderChange} />Female
                        </label>
                    </div>
                    <div>
                        <label>
                            Hobbies:
                            <ul>
                                {
                                    this.state.hobbies.map((hobby) => {
                                        return (
                                            <li key={hobby.name}>
                                                <input key={hobby.name} type="checkbox" name="hobbies" value={hobby.name} checked={hobby.isChecked} onChange={this.handleHobbyChange} />{hobby.name}
                                            </li>
                                        )
                                    })
                                }
                            </ul>

                        </label>
                    </div>
                    <div>
                        Profile pic: {this.state.profile_pic}
                        <br />
                        <input type="file" name="file" onChange={this.onChangeHandler} />
                    </div>
                    <div>
                        <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                    </div>
                </form>
            </div>
        );
    }

}

export default Add;
