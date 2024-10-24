//Gestion de las solicitudes HTTP
// se importan las funciones de servicio  para manejar la logica 

import {obtenerSuperheroes, obtenerSuperheroePorId, agregarSuperheroe,  actualizarSuperheroe, eliminarSuperheroe,
    buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30YconFiltros} from '../services/superheroesService.mjs';
//Devolver una respuesta en formato JSON
import {renderizarSuperheroe, renderizarListaSuperheroes} from '../views/responseView.mjs';


//responde a una solicitud GET para obtener los datos de superheroes y renderizarlo
export function obtenerTodosSuperheroes(req, res){
    const superheroes = obtenerSuperheroes();
    res.send(renderizarListaSuperheroes(superheroes));
}

//Responde a una solicitud GET en la ruta /superheroes/id/:id
export function obtenerSuperheroePorIdController(req, res) {
    const { id } = req.params;
    const superheroe = obtenerSuperheroePorId(parseInt(id)); // Asegúrate de que esta función esté bien definida

    if (superheroe) {
        res.send(renderizarSuperheroe(superheroe)); // Envía el superhéroe si se encuentra
    } else {
        res.status(404).send({ mensaje: "Superhéroe no encontrado" }); // Respuesta 404 si no se encuentra
    }
}

// Define la función obtenerSuperheroePorId en otro lugar de tu código
function obtenerSuperheroePorId(id) {
    // Lógica para buscar el superhéroe en la base de datos o en un array
    return superheroes.find(superheroe => superheroe.id === id); // Asegúrate de que 'superheroes' esté definido
}

//responde a una solicitud POST en la ruta /superheroes para agregar un nuevo superhéroe.
export function agregarNuevoSuperheroe(req, res) {
    const datos = req.body;

    // Validaciones
    if (!datos.nombreSuperheroe || typeof datos.nombreSuperheroe !== 'string') {
        return res.status(400).send({ mensaje: "El campo 'nombreSuperheroe' es obligatorio y debe ser una cadena de texto." });
    }
    if (!datos.edad || typeof datos.edad !== 'number') {
        return res.status(400).send({ mensaje: "El campo 'edad' es obligatorio y debe ser un número." });
    }
    if (!datos.planetaOrigen || typeof datos.planetaOrigen !== 'string') {
        return res.status(400).send({ mensaje: "El campo 'planetaOrigen' es obligatorio y debe ser una cadena de texto." });
    }

    const nuevoSuperheroe = agregarSuperheroe(datos);
    res.send(nuevoSuperheroe);
}

//responde a una solicitud PUT en la ruta /superheroes/id/:id para actualizar un superheroe
export function actualizarSuperheroePorId(req, res) {
    const { id } = req.params;
    const datos = req.body;

    // Validaciones
    if (!datos.nombreSuperheroe || typeof datos.nombreSuperheroe !== 'string') {
        return res.status(400).send({ mensaje: "El campo 'nombreSuperheroe' es obligatorio y debe ser una cadena de texto." });
    }
    if (!datos.edad || typeof datos.edad !== 'number') {
        return res.status(400).send({ mensaje: "El campo 'edad' es obligatorio y debe ser un número." });
    }
    if (!datos.planetaOrigen || typeof datos.planetaOrigen !== 'string') {
        return res.status(400).send({ mensaje: "El campo 'planetaOrigen' es obligatorio y debe ser una cadena de texto." });
    }

    const resultado = actualizarSuperheroe(parseInt(id), datos);
    res.send(resultado ? 'Superhéroe actualizado' : 'Superhéroe no encontrado');
}

//Esta función responde a una solicitud DELETE en la ruta /superheroes/:id.
export function eliminarSuperheroesPorId(req, res) {
    const { id } = req.params;
    const resultado = eliminarSuperheroe(parseInt(id));

    if (resultado) {
        res.status(204).send(); // 204 No Content, indica que la eliminación fue exitosa
    } else {
        res.status(404).send({ mensaje: "Superhéroe no encontrado" }); // Mensaje de error si no se encuentra
    }
}

//Esta función responde a una solicitud GET en la ruta /superheroes/atributo/:atributo/:valor
export function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);

    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({ mensaje: "No se encontraron superhéroes con ese atributo" }); // Mensaje si no se encuentran
    }
}

//Esta función responde a una solicitud GET en la ruta /superheroes/filtros y 
//devuelve superhéroes que tienen más de 30 años y posiblemente aplicando otros filtros.
export function obtenerSUperheroesMayorDe30YConFiltrosController(req, res){
    const superheroes = obtenerSuperheroesMayoresDe30YconFiltros();
    res.send(renderizarListaSuperheroes(superheroes));
}



