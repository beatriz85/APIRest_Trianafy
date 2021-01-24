import 'dotenv/config';
import { User, userRepository } from '../models/users';
import bcrypt from 'bcryptjs';
import { JwtService } from '../services/jwt';



const AuthController = {

    
    
    register:async (req, res, next) => {

        let usuarioCreado = await userRepository.create({
            fullname:req.body.fullname, 
            username:req.body.username, 
            email: req.body.email,
            password:bcrypt.hashSync(req.body.password, parseInt(process.env.BCRYPT_ROUNDS))});

        // Devolvemos todos los datos del usuario menos la contraseña                
        res.status(201).json({
            id: usuarioCreado.id,
            fullname :usuarioCreado.fullname,
            username: usuarioCreado.username,
            email: usuarioCreado.email,
            
        });
    },
    login: (req, res, next) => {
        const token =  JwtService.sign(req.user);
        res.status(201).json({
            user: req.user,
            token: token
        });
    }


}

export {
    AuthController
}