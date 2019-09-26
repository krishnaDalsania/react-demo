
const users = [
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
export const getAllUsers = users => ({
    type: 'GET_USER',
    users
})