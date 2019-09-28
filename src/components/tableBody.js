import React from 'react';

const TableBody = props => {

    const row = props.userData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>{row.gender}</td>
                <td>{row.hobbies}</td>
                <td>{row.profile_pic}</td>
                <td><button onClick={(index) => props.edit(row)}>Edit</button><button onClick={(index) => props.delete(row)}>Delete</button></td>
            </tr>
        );
    });
    return (
        <tbody>{row}</tbody>
    );
}

export default TableBody;