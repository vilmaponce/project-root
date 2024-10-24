//Este constructor crea un nuevo superhéroe con todos sus atributos, asignándole valores iniciales. 
//Cada vez que quiera agregar, actualizar o eliminar un superhéroe, estare trabajando con instancias de esta clase
//Ejemplo: Cuando se llama a la función agregarSuperheroe() en el controlador, se está creando una nueva instancia de Superheroe usando el modelo, 
//y luego esta instancia es guardada en el repositorio
//Los controladores usan este modelo de superhéroe para crear y manipular datos.


export default class Superheroe{
    constructor(id, nombreSuperheroe, nombreReal, edad, planetaOrigen, debilidad, poderes = [], aliados = [], enemigos = [])
    {
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal =  nombreReal;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poderes = poderes;
        this.aliados = aliados;
        this.enemigos = enemigos;
    }

    //Método Permite agregar un nuevo poder al array poderes del superhéroe

    agregarPoder(poder){
        this.poderes.push(poder)
    }

    //Metodo Agrega un nuevo aliado al array aliados
    agregarAliado(aliado){
        this.aliados.push(aliado);
    }

    //Metodo Agrega un nuevo enemigo al array enemigos

    agregarEnemigo(enemigo){
        this.enemigos.push(enemigo);
    }
}