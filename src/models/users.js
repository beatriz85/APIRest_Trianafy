class User {

    constructor(id, username) {
        this.id = id;
        this.username = username;
    }


}

let users = [
    new User(1, 'Luis Miguel López'),
    new User(2, 'Ángel Naranjo')
];


const userRepository = {

    findAll() {
        return users;
    },
    findById(id) {
        let result = users.filter(user => user.id == id);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;
    }

}


export  {
    User,
    userRepository
}