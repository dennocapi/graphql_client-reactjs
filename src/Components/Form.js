import React, { useState } from 'react'
import { CREATE_USER_MUTATION } from '../GraphQL/Mutations'
import { useMutation } from '@apollo/client'

export const Form = () => {
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${first_name}`)
    }
    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION)

    const addUser = () => {
        createUser({
            variables: {
                first_name: first_name,
                last_name: last_name,
                email: email
            }
        })

        if(error){
            console.log(error)
            alert(error)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your first name:
                <input
                    type="text"
                    value={first_name}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label> <br /> <br />

            <label>Enter your last name:
                <input
                    type="text"
                    value={last_name}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label> <br /> <br />

            <label>Enter your email:
                <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label><br /> <br />
            <input onClick={addUser} type="submit" />
        </form>
    )
}
