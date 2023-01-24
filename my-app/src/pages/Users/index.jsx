import { useEffect } from "react"
import { useState } from "react"
import { usersService } from "../../services/users"

const Users = () => {

    const [ users, setUsers ] = useState([])

    useEffect(() => {
        usersService.getAll().then(response => setUsers(response))
        console.log('pasa')
    }, [users])

    return (

        <>
            <h1>Usuarios</h1>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>thumbnail</th>
                        <th>age</th>
                        <th>weight</th>
                        <th>height</th>
                        <th>hair_color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <img height={100} src={`${user.thumbnail}`} alt={user.name} />
                                    </td>
                                    <td>{user.age}</td>
                                    <td>{user.weight}</td>
                                    <td>{user.height}</td>
                                    <td>{user.hair_color}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>

    )
    
}

export { Users }