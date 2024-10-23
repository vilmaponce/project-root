import SuperheroesRepository from '../repository/superheroesRepository.mjs'


const repository = new SuperheroesRepository();

export function obtenerSuperheroes(){
    return repository.obtenerTodos();
}

export function obtenerSuperheroePorId(id){
    const superheroes = repository.obtenerTodos();
    return superheroes.find(hero => hero.id === id);
}

export function agregarSuperheroe(datos){
    const superheroes = repository.obtenerTodos();
    const nuevoSuperheroe = {id : superheroes.length + 1, ...datos};
    superheroes.push(nuevoSuperheroe);
    repository.guardar(superheroes);
    return nuevoSuperheroe;
}

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

export function eliminarSuperheroe(id){
    const superheroes = repository.obtenerTodos();
    const nuevaLista = superheroes.filter(hero => hero.id !== id);
    if (superheroes.length !== nuevaLista.length){
        repository.guardar(nuevaLista);
        return true;
    }
    return false;
}

export function buscarSuperheroesPorAtributo(atributo, valor){
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero => String(hero[atributo]).toLowerCase().includes(valor.toLowerCase()));
}

export function obtenerSuperheroesMayoresDe30YconFiltros(){
    const superheroes = repository.obtenerTodos();
    return superheroes.filter(hero => hero.edad > 30 && hero.planetaOrigen === 'Tierra' && hero.poderes.length >= 2);
}



