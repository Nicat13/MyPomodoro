import FetchData from '../DataContexts/FetchData'
import PostData from '../DataContexts/PostData'
import { User } from '../Models/User.js'

export class UserRepository {

    static async getAll() {
        let result = await FetchData(`https://jsonplaceholder.typicode.com/users`);
        let userList = []
        if (Array.isArray(result)) {
            result.map(u => {
                userList.push(new User(u.id, u.name, u.email));
            })
        }
        return userList;
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
