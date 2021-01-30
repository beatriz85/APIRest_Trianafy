import mongoose from 'mongoose';
const {
    Schema
} = mongoose;



const songSchema = new Schema({
    id: String,
    titulo: String,
    artista: String,
    album: String,
    year: Number,
});

const Song = mongoose.model('Song', songSchema);



const SongRepository = {

    //mostrar todas las canciones
    async findAll() {
        return await Song.find().exec();
    },

    //buscar canciones por id
    async findById(id) {
        const result = await Song.findById(id).exec();
        return result != null ? result : undefined;
    },
    //crear canciones
    async create(nuevaCancion) {
        const song = new Song({
            titulo: nuevaCancion.titulo,
            artista: nuevaCancion.artista,
            album: nuevaCancion.album,
            year: nuevaCancion.year
        });

        const result = await song.save();
        return result;
    },

    //actualilar cancion buscada por id
    async updateById(id, cancionModificada) {
        const cancion = await Song.findById(id);

        if (cancion == null) {
            return undefined;
        } else {
            return await Object.assign(cancion, cancionModificada).save();
        }
    },

    async update(cancionModificada) {
        return await this.updateById(cancionModificada.id, cancionModificada);
    },

    //borra cancion
    async delete(id) {
        await Song.findByIdAndRemove(id).exec();
    }


}


export {
    Song,
    SongRepository
}