import express from 'express';
import { recuperarCopiaDeSeguridad } from './backupManager.mjs'; 
import { obtenerTodosSuperheroes, obtenerSuperheroePorIdController, agregarNuevoSuperheroe, actualizarSuperheroePorId, eliminarSuperheroesPorId, buscarSuperheroesPorAtributoController, obtenerSUperheroesMayorDe30YConFiltrosController } from './controllers/superheroesController.mjs';


// Se crea una instancia de la aplicación Express usando express().
// app.use(express.json()): Este middleware integrado en Express permite que tu API 
//pueda procesar solicitudes con datos en formato JSON (lo que es útil para POST y PUT).
// La constante PORT define el puerto en el que correrá el servidor (3005 en este caso).
const app = express();
app.use(express.json());

const PORT = 3005;

// Define las Rutas que especifican las distintas operaciones CRUD 

app.get('/superheroes', obtenerTodosSuperheroes);// Redirige a la ruta específica
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.post('/superheroes', agregarNuevoSuperheroe);
app.put('/superheroes/:id', actualizarSuperheroePorId);
app.delete('/superheroes/:id', eliminarSuperheroesPorId);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/filtros', obtenerSUperheroesMayorDe30YConFiltrosController);







// Recuperar copia de seguridad al iniciar el servidor
recuperarCopiaDeSeguridad();

// Levantar o inicio de el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
