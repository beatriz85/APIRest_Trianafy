import {
    SongRepository
} from '../models/song';


const SongController = {

    todasLasCanciones: async (req, res) => {
        const data = await SongRepository.findAll();
        if (Array.isArray(data) && data.length > 0)
            res.json(data);
        else
            res.sendStatus(404);
    },

    cancionPorId: async (req, res) => {
        let song = await SongRepository.findById(req.params.id);
        if (song != undefined)
            res.json(song);
        else
            res.sendStatus(404);
    },

    nuevaCancion: async (req, res) => {
        let song = await SongRepository.create({
            titulo: req.body.titulo,
            artista: req.body.artista,
            album: req.body.album,
            year: req.body.year
        });
        res.status(201).json(song);
    },

    editarCancion: async (req, res) => {
        let song = await SongRepository
            .updateById(req.params.id, {
                titulo: req.body.title,
                artista: req.body.artista,
                album: req.body.album,
                year: req.body.year
            });
        if (song != undefined) {
            res.json(song);
        } else {
            res.sendStatus(404);
        }
    },

    eliminarCancion: async (req, res) => {
        await SongRepository.delete(req.params.id);
        res.sendStatus(204);
    },

    

    



}

export {
    SongController
}