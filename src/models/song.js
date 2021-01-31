import mongoose from 'mongoose';
const {
    Schema
} = mongoose;



const songSchema = new Schema({
    id: String,
    titulo: {
        type: String,
        required: "Es obligatorio indicar el título de la canción"
    },
    artista: {
        type: String,
        required: "Es obligatorio indicar artista de la canción"
    },
    album: String,

    year: {
        type: Number,
        required:"Debe anotar el año dónde fue publicada",
        max:[2022,"El año debe ser inferior 2022"]
      },
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