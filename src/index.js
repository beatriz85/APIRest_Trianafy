// Imports de librerías
import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";
import mongoose from "mongoose";
import {usuarios, canciones, playlist} from './models/datos'

// Imports de componentes del API
import models from './models';
import routes from './routes';
import { SongRepository } from "./models/song";

// Imports de otros middlewares;



// Instanciación de la aplicación de Express
const app = express();

// Inicialización y configuración de algunos middlewares

// Protección CORS
app.use(cors());

// body-parser, para procesar el cuerpo de las peticiones
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Morgan y morganbody para hacer logging de las peticiones y respuestas
app.use(morgan('dev'))
morganBody(app);


/*
  Este middleware nos permite añadir alguna información al contexto de cada petición,
  y por tanto, lo tendremos disponible en cualquier objeto req que recibamos en cualquier
  petición de la aplicación
*/
app.use((req, res, next) => {
  // Para cualquier petición, añadimos en su contexto
  req.context = {
    // Todos los modelos
    models,
    // El "usuario actual". Ahora mismo simula que hayamos hecho un login
    // Más adelante, lo podremos conseguir de otra forma.
    // me: models.users.userRepository.findById(1)
  };
  next();
});


// Configuración de las rutas.
app.use('/users', routes.user);
app.use('/songs', routes.song);
app.use('/auth', routes.auth);
app.use('/list',routes.playlist)



// Inicialización del servidor y conexión a base de datos

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  
  if (err) {
    console.log(`Error de conexión a la base de datos: ${JSON.stringify(err)}`);
  } else {
    console.log(`Conexión correcta a la base de datos en la URI ${process.env.DB_URI}`);
    
    //Prueba insertar datos
    canciones.forEach(song => {
      song.save(err => {
        if (err) throw err;
        console.log("Guardado con éxito");
      })  ;
    });
    usuarios.forEach(user => {
      user.save(err => {
        if (err) throw err;
        console.log("Guardado con éxito");
      })  ;
    });
    playlist.forEach(playlist => {
      playlist.save(err => {
        if (err) throw err;
        console.log("Guardado con éxito");
      })  ;
    });
    
    app.listen(process.env.PORT, () =>
      console.log(
        `¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`
      )
    );
  }

});