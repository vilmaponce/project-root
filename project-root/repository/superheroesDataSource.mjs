//define las operaciones que deben ser implementadas por clases que gestionen el almacenamiento de superhéroes.

export default class SuperheroeDataSource{
    obtenerTodos(){
        throw new Error("Este método debe ser implementado por la subclase");
    }
    guardar(){
        throw new Error("Este metodo debe ser implementado por la subclase");
    }
}