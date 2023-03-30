import { React, useEffect, useState } from 'react';
import { User } from '../Models/User.js';
import { UserRepository } from '../Repositories/UserRepository.js'
import AboutLayout from '../Layouts/AboutLayout.js';
import { ErrorUtil } from '../Utils/ErrorUtil.js';
import UserComponent from '../Components/UsersComponent';

export default function Home() {
    console.log('Home page initialized');
    const [error, setError] = useState(null);

    const postData = async () => {
        var postDataResult = await ErrorUtil.checkError(await UserRepository.add(new User(23, 'Elovset', 'salam@gmail.com')), setError);
    }

    return (
        <AboutLayout error={error}>
            <div>
                Home page
                <UserComponent setError={setError} />
                <button onClick={(e) => { postData() }}>PostUser</button>
            </div>
        </AboutLayout>
    )
}
