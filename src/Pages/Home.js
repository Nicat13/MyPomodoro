import { React, useEffect, useState } from 'react';
import { User } from '../Models/User.js';
import { UserRepository } from '../Repositories/UserRepository.js'

export default function Home({ layout, setLayout, setError, error }) {
    const SELECTED_LAYOUT = 'NewsLayout';
    const [users, setUsers] = useState(null);
    const postData = async () => {
        const result = await UserRepository.add(new User(23, 'Elovset', 'salam@gmail.com'));
        console.log(result);
    }

    function CheckError(data) {
        if (data.constructor.name === 'ErrorModel') {
            if (!error) {
                setError(data)
            }
        }
        else {
            return data
        }
    }

    const fetchData = async () => {
        if (!error) {
            const data = CheckError(await UserRepository.getAll());
            setUsers(data);
        }

    }
    useEffect(() => {
        if (SELECTED_LAYOUT === layout) {
            fetchData();
        }

        setLayout(SELECTED_LAYOUT);
    }, [])
    return (
        <div>
            Home page
            <ul>
                {users && users.map(u => (
                    <li key={u.Id}>{u.Name} - {u.Email}</li>
                ))}
            </ul>
            <button onClick={(e) => { postData() }}>PostUser</button>
        </div>
    )
}
