# APIRest_Trianafy


### ACCESO A DATOS Y PROGRAMACIÓN DE SERVICIOS Y PROCESOS

## INTRODUCCIÓN
El proyecto consiste en la implementación de una API REST con las tecnologías aprendidas en clase (express.js sobre node.js, mongodb y mongoose). La API servirá a una aplicación llamada Trianafy, que gestiona listas de reproducción de música.


### Pasos para ejecutar el proyecto:

1. Clonar el repositorio.
2. Instalar los paquetes con `npm i`.
3. Crear un fichero .env en la raiz del repositorio que contenga las siguientes         variables de entorno:
    PORT = 9000

    # Secreto para la encriptación
    JWT_SECRET=esteEsElSecreto

    # Número de rondas utiliadas para el algoritmo de hashing de la contraseña
    BCRYPT_ROUNDS=12

    # Vida del token
    JWT_LIFETIME=1d

    # Algoritmo utilizado para el cifrado del token
    JWT_ALGORITHM=HS256

    DB_URI=mongodb://localhost:27018/trianafy
4. Ejecutar el proyecto usando el comando `npm start`.

### ENDPOINTS 
En este proyecto encontramos 4 diferentes **endpoints**:
- /songs
- /list
- /auth
- /list:id/songs

Cada endpoint usa diferentes rutas:
- /songs:
    - `GET` / : Obtiene todas las canciones de la base de datos.
    - `POST` / : Añade una canción a la base de datos.
    - `GET` /:id : Busca una canción mediante su id.
    - `PUT` /:id : Modifica una canción.
    - `DELETE` /:id : Borra una canción.

- /lists:
    - `GET` / : Obtiene todas las playlists de la base de datos.
    - `POST` / : Añade una playlist a la base de datos.
    - `GET` /:id : Busca una playlist mediante su id.
    - `PUT` /:id : Modifica una playlist.
    - `DELETE` /:id : Borra una playlist.
- /auth:
    - `POST` /login : Autentifica a un usuario, y genera un token con el que puede acceder a todas las demás peticiones.
    - `POST` /register : Registra a un nuevo usuario en base a lo que se le haya pasado en el body de la petición.



## Todas las dependencias usadas en este proyecto:
- bcryptjs
- body-parser
- cors
- dotenv
- express
    - express-validator
- jsonwebtoken
- mongoose
- morgan
    - morgan-body
- passport
    - passport-jwt
    - passport-local