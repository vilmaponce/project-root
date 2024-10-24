//Aqui se maneja la logica y donde se gestionas las operaciones CRUD
//aca los datos , se procesan y manipulan , interactuando con el repositorio de superherores 

import SuperheroesRepository from '../repository/superheroesRepository.mjs'

//Crea una instancia del repositorio para poder usar sus métodos, como obtenerTodos() y guardar().
const repository = new SuperheroesRepository();

//Esta función simplemente devuelve la lista completa de superhéroes desde el repositorio.
export function obtenerSuperheroes(){
    return repository.obtenerTodos();
}

//Recibe un id como parámetro, obtiene la lista de superhéroes del repositorio y 
//busca el superhéroe cuyo id coincida con el que recibió.
export function obtenerSuperheroePorId(id){
    const superheroes = repository.obtenerTodos();
    return superheroes.find(hero => hero.id === id);
}

//Obtiene todos los superhéroes.
//crea un nuevo superhéroe, asignándole un nuevo id basado en la cantidad de superhéroes existentes (superheroes.length + 1).
//Agrega este nuevo superhéroe a la lista.
//Guarda la lista actualizada en el repositorio
export function agregarSuperheroe(datos){
    const superheroes = repository.obtenerTodos();
    const nuevoSuperheroe = {id : superheroes.length + 1, ...datos};
    superheroes.push(nuevoSuperheroe);
    repository.guardar(superheroes);
    return nuevoSuperheroe;
}

//Busca el superhéroe con el id proporcionado.
//Si lo encuentra, actualiza sus propiedades con los datos nuevos usando Object.assign().
//Guarda la lista actualizada en el repositorio.
//Devuelve true si lo actualizó, y false si no encontró el superhéroe.
export function actualizarSuperheroe(id, datos){
    const superheroes = repository.obtenerTodos();
    const superheroe = superheroes.find(hero => hero.id === id);
    if (superheroe) {
        Object.assign(superheroe, datos);
        repository.guardar(superheroes);
        return true;
    }
    return false;
}

//Filtra la lista de superhéroes para excluir al que tiene el id proporcionado.
//Si la lista original es diferente a la nueva (lo que indica que se eliminó un superhéroe), guarda la nueva lista en el repositorio.
//Devuelve true si eliminó el superhéroe, false si no lo encontr
export function eliminarSuperheroe(id){
    const superheroes = repository.obtenerTodos();
    const nuevaLista = superheroes.filter(hero => hero.id !== id);
    if (superheroes.length !== nuevaLista.length){
        repository.guardar(nuevaLista);
        return true;
    }
    return false;
}

//Obtiene todos los superhéroes.
//Filtra los superhéroes cuyos valores de un atributo específico coincidan con el valor proporcionado.
export function buscarSuperheroesPorAtributo(atributo, valor){
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero => String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()));
}

//Filtra la lista de superhéroes para devolver solo aquellos que:
//Tengan más de 30 años.
//Su planeta de origen sea "Tierra".
//Tengan al menos 2 poderes.
export function obtenerSuperheroesMayoresDe30YconFiltros(){
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero => hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poderes.length >= 2);
}



