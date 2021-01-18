
class Usuario {

    constructor(id, username) {
        this.id = id;
        this.username = username;
    }


}

let usuario = [
    new Usuario(1, 'Luis Miguel López'),
    new Usuario(2, 'Ángel Naranjo')
];


const usuarioRepository = {

    findAll() {
        return users;
    },
    findById(id) {
        let result = users.filter(user => user.id == id);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;
    }

}


export  {
    Usuario,
    UsuarioRepository
}