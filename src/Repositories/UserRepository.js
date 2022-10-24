import FetchData from '../DataContexts/DataFetcher'
import { User } from '../Models/User.js'

export class UserRepository {

    constructor() {
        this.USERS = [];
    }

    static async getAll() {
        let result = await FetchData();
        let userList = []
        if (Array.isArray(result)) {
            result.map(u => {
                userList.push(new User(u.id, u.name, u.email));
            })
        }
        return userList;
    }

    // add(user) {
    //     this.userDataContext.add(user).then((newUser) => {

    //         this.users.push(user);
    //     }).catch((error) => {
    //         console.error('Error:', error);
    //     });
    // }
}
