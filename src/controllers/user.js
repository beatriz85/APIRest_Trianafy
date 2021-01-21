import { users } from '../models/';
import { User } from '../models/users';


const UserController = {

    todosLosUsuarios : (req, res) => {
        res.json(req.context.models.users.userRepository.findAll());
    },

    usuarioPorId : (req, res) => {
        let user = req.context.models.users.userRepository.findById(req.params.id);
        if (user != undefined) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }
        
    },

    me : (req, res) => {
        res.json(req.context.me);
    }


};



export  {
    UserController
}