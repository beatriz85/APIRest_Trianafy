import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors());


app.get('/', (req, res) => {
    return res.send('Recibió un método GET');
  });
  
  app.post('/', (req, res) => {
    return res.send('Recibió un método POST');
  });
  
  app.put('/', (req, res) => {
    return res.send('Recibió un método PUT');
  });
  
  app.delete('/', (req, res) => {
    return res.send('Recibió un método DELETE');
  });
  
  app.listen(process.env.PORT, () =>
    console.log(`¡Aplicación de ejemplo escuchando en el puerto ${process.env.PORT}!`),
  );