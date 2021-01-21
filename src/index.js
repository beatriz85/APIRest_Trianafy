// Imports de librerías
import "dotenv/config";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import morganBody from "morgan-body";

// Imports de componentes del API
import models from './models';
import routes from './routes';

// Imports de otros middlewares y servicios;
import passport from './services/passport';


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

// Inicialización de passport
app.use(passport.initialize());


/*
  Este middleware nos permite añadir alguna información al contexto de cada petición,
  y por tanto, lo tendremos disponible en cualquier objeto req que recibamos en cualquier
  petición de la aplicación
*/
app.use((req, res, next) => {
  // Para cualquier petición, añadimos en su contexto
  req.context = {
    models
  };
  next();
});


// Configuración de las rutas.
app.use('/users', routes.user);
//app.use('/post', routes.post);
app.use('/auth', routes.auth)




// Inicialización del servidor
app.listen(process.env.PORT, () =>
  console.log(
    `¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`
  )
);