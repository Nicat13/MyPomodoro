import { React, useEffect, useState } from 'react';
import { UserRepository } from '../Repositories/UserRepository.js'

export default function Home({ layout, setLayout }) {
    const SELECTED_LAYOUT = 'NewsLayout';
    const [users, setUsers] = useState(null);

    useEffect(() => {
        if (SELECTED_LAYOUT === layout) {
            const fetchData = async () => {
                const data = await UserRepository.getAll();
                setUsers(data);
            }
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
        </div>
    )
}
