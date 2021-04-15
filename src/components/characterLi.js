import React from 'react'

export default function characterLi({name, status, species, image}) {
    return (
        <li>
            <table>
                <tr>
                    <td>
                        <img src={image} alt={name}></img>
                    </td>
                    <td>
                    <h3>Name:</h3>
                    <p>{name}</p>
                    <h3>Status:</h3>
                    <p>{status}</p>
                    <h3>Species:</h3>
                    <p>{species}</p>
                    </td>
                </tr>
            </table>
           
        </li>
    )
}
