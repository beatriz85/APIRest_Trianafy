import mongoose from 'mongoose';
const {
    Schema
} = mongoose;



const songSchema = new Schema({
    id: String,
    title: String,
    artist: String,
    album: String,
    year: Number,
});

const Song = mongoose.model('Song', songSchema);



const SongRepository = {

    async findAll() {
        return await Cancion.find().exec();
    },

    async findById(id) {
        const result = await Cancionn.findById(id).exec();
        return result != null ? result : undefined;
    },
    // por simplicidad, creamos una película sin actores
    async create(nuevaCancion) {
        const song = new Song({
            titulo: nuevaCancion.title,
            artist: nuevaCancion.artist,
            album: nuevaCancion.album
        });

        const result = await song.save();
        return result;
    },

    async updateById(id, cancionModificada) {
        const cancion = await Cancion.findById(id);

        if (cancion == null) {
            return undefined;
        } else {
            return await Object.assign(cancion, cancionModificada).save();
        }
    },

    async update(cancionModificada) {
        return await this.updateById(cancionModificada.id, cancionModificada);
    },

    async delete(id) {
        await Cancion.findByIdAndRemove(id).exec();
    }


}


export {
    Song,
    SongRepository
}