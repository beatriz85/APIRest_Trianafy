import { Song } from '../models/songs';
import { songs } from '../models/';


const SongController = {


    todosLasCanciones : (req, res) => {
    
        res.json(req.context.models.songs.songRepository.findAll());
    },


    cancionPorId : (req, res) => {
        let song = songRepository.findById(req.params.id);
        if (song != undefined) {
            res.json(song);
        } else {
            res.sendStatus(404);
        }
        
    },


    editarCancion: (req, res) => {
        let cancionModificada = cancionRepository.updateById(req.params.id, new Song(undefined, req.body.title));
        if (cancionModificada == undefined)
            res.sendStatus(404);
        else   
            res.status(200).json(cancionModificada);
    },

    nuevaCancion : (req, res) => {
        let cancionCreada = cancioRepository.create(new Song(undefined, req.body.title));
        res.status(201).json(cancionCreada);
    },










    eliminarCancion: (req, res) => {
        cancionRepository.delete(req.params.id);
        res.sendStatus(204);
    }





};



export  {
    SongController
}