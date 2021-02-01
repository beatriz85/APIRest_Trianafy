import { User } from './user';
import {Song} from './song';
import {Playlist} from './playList';



let usuarios = [
    new User({
        fullname: "Beatriz García",
        username: "beatrizgarcia",
        email: "beatriz@gmail.com",
        password: "12345678"

    }),
    new User
    ({
        fullname: "Alejandra Ruiz",
        username: "alejandraruiz",
        email: "alejandra@gmail.com",
        password: "12345678"

    })

]




let canciones = [
        new Song({
            titulo: "De Mi Voz",
            artista: "Miguel Campello",
            album: "Camina",
            year: "2014"
    
        }),
        new Song({
            titulo: "Aire",
            artista: "Miguel Campello",
            album: "Camina",
            year: "2014"
    
        }),
        new Song({
            titulo: "Camina",
            artista: "Miguel Campello",
            album: "Camina",
            year: "2014"
    
        }),
        new Song({
            titulo: "Silencio",
            artista: "Miguel Campello",
            album: "Entre Mil Historias",

            year: "2018"
    
        }),
        new Song({
            titulo: "Tápame",
            artista: "Miguel Campello",
            album: "Entre Mil Historias",
            year: "2018"
    
        }),
        new Song({
            titulo: "Caballo Negro",
            artista: "Miguel Campello",
            album: "Entre Mil Historias",
            year: "2018"
    
        }),
    
    ];

    
    
    
    let playlist = [
        new Playlist ({
            name: "Lista Beatriz",
            description: "Miguel Campello",
            songs: [canciones[0],canciones[2],canciones[3]],
            user: usuarios[0]
    
        }),
        new Playlist
         ({
            name: "Lista Beatriz",
            description: "Miguel Campello",
            songs: [canciones[0],canciones[2],canciones[3]],
            user: usuarios[0]
    
        })
    ];

    

    export {usuarios, canciones, playlist}