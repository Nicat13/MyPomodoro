import FetchData from '../DataAdapters/FetchData'
import PostData from '../DataAdapters/PostData'
import { User } from '../Models/User.js'

export class UserRepository {

    static async getAll() {
        let result = await FetchData(`https://jsonplaceholder.typicode.com/users`);
        if (!result.isError) {
            let userList = []
            if (Array.isArray(result.data)) {
                result.data.map(u => {
                    userList.push(new User(u.id, u.name, u.email));
                })
            }
            return userList;
        }
        return result
    }

    static async add(user) {
        let result = await PostData('https://jsonplaceholder.typicode.com/posts', {
            title: user.Name,
            body: 'bar',
            userId: user.Id,
        }, { 'Content-type': 'application/json; charset=UTF-8' });
        return result;
    }
}
