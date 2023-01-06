import { React, useEffect, useState } from 'react';
import { User } from '../Models/User.js';
import { UserRepository } from '../Repositories/UserRepository.js'
import AboutLayout from '../Layouts/AboutLayout.js';
import CheckError from '../Utils/CheckError.js';

export default function Home() {
    console.log('Home page initialized');
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);
    const postData = async () => {
        const result = await UserRepository.add(new User(23, 'Elovset', 'salam@gmail.com'));
        if (result.isError) {
            console.log(result.Message);
            setError(result.Message)
        }
    }

    // function CheckError(data) {
    //     if (data.constructor.name === 'ErrorModel') {
    //         console.log(data);
    //         setError(data)
    //     }
    //     else {
    //         return data
    //     }
    // }

    const fetchData = async () => {
        const data = await UserRepository.getAll();
        if (!data.isError) {
            setUsers(data);
        }
        else {
            setError(data.Message)
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <AboutLayout error={error}>
            <div>
                Home page
                <ul>
                    {users && users.map(u => (
                        <li key={u.Id}>{u.Name} - {u.Email}</li>
                    ))}
                </ul>
                <button onClick={(e) => { postData() }}>PostUser</button>
            </div>
        </AboutLayout>
    )
}
