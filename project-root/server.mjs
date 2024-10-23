import express from 'express';
import { recuperarCopiaDeSeguridad } from './backupManager.mjs'; 
import { obtenerTodosSuperheroes, obtenerSuperheroePorIdController, agregarNuevoSuperheroe, actualizarSuperheroePorId, eliminarSuperheroesPorId, buscarSuperheroesPorAtributoController, obtenerSUperheroesMayorDe30YConFiltrosController } from './controllers/superheroesController.mjs';

const app = express();
app.use(express.json());

const PORT = 3005;

// Rutas

app.get('/superheroes', obtenerTodosSuperheroes);
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.post('/superheroes', agregarNuevoSuperheroe);
app.put('/superheroes/:id', actualizarSuperheroePorId);
app.delete('/superheroes/:id', eliminarSuperheroesPorId);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/filtros', obtenerSUperheroesMayorDe30YConFiltrosController);







// Recuperar copia de seguridad al iniciar el servidor
recuperarCopiaDeSeguridad();

// Levantar el servidor en el puerto 3005
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
