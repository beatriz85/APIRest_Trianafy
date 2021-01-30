import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    fullname: String,
    username: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const toDto = (user) => { return { 
    id: user._id, 
    fullname: user.fullname, 
    username: user.username,
    email: user.email } }


const emailExists = async (email) => {
    const result = await User.countDocuments({ email: email }).exec();
    return result > 0;

}

const userRepository = {

    // Devuelve todos los usuarios del repositorio
    async findAll() {

        const result = await User.find({}).exec();
        return result;
    },

    // Devuelve un usuario por su Id
    async findById(id) {

        const result = await User.findById(id).exec();
        return result != null ? result : undefined;
    },

    // Encuentra un usuario por su username
    async findByUsername(username) {
        const users = await User.find({}).exec();


        let result = users.filter(user => user.username == username);
        return Array.isArray(result) && result.length > 0 ? result[0] : undefined;

    },
    // Inserta un nuevo usuario y devuelve el usuario insertado
    async create(newUser) {

        const theUser = new User({
            fullname: newUser.fullname,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        });
        const result = await theUser.save();
        return result; // Posiblemente aquí nos interese implementar un DTO

    },
    // Actualiza un usuario identificado por su ID
    async updateById(id, modifiedUser) {


        const userSaved = await User.findById(id);

        if (userSaved != null) {
            return await Object.assign(userSaved, modifiedUser).save();
        } else
            return undefined;


    },

    update(modifiedUser) {
        return this.update(modifiedUser.id, modifiedUser);
    },
    async delete(id) {

        await User.findByIdAndRemove(id).exec();
    }

}


export {
    User,
    toDto,
    userRepository,
    emailExists
}