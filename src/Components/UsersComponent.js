import { React, useEffect, useState } from 'react';
import { UserRepository } from '../Repositories/UserRepository.js'
import { ErrorUtil } from '../Utils/ErrorUtil.js';

export default function UserComponent({ setError }) {
    console.log('User Component initialized');
    const [users, setUsers] = useState(null);

    const fetchData = async () => {
        const data = await ErrorUtil.checkError(await UserRepository.getAll(), setError);
        setUsers(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {!users && <p>loading...</p>}
            <ul>
                {users && users.map(u => (
                    <li key={u.Id}>{u.Name} - {u.Email}</li>
                ))}
            </ul>
        </>
    )
}