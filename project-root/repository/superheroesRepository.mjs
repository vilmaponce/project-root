//La clase SuperheroesFileRepository es una implementación concreta de SuperheroeDataSource que gestiona la obtención y
// almacenamiento de datos de superhéroes en un archivo de texto (en formato JSON)

//Módulo de Node.js para interactuar con el sistema de archivos.
import fs from 'fs';
//Módulo de Node.js para manejar rutas de archivos.
import path from 'path';
//Convierte un URL de archivo a una ruta de sistema de archivos.
import { fileURLToPath } from 'url';
//Clase base que define la interfaz para las operaciones de superhéroes.
import SuperheroeDataSource from './superheroesDataSource.mjs';

export default class SuperheroesFileRepository extends SuperheroeDataSource {
    constructor() {
        super();
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }

    // Método para obtener todos los superhéroes
    obtenerTodos() {
        try {
            // Verificar si el archivo existe
            if (!fs.existsSync(this.filePath)) {
                return []; // Si el archivo no existe, devolver un arreglo vacío
            }
            const data = fs.readFileSync(this.filePath, 'utf-8');
            return JSON.parse(data || '[]'); // Devolver un arreglo vacío si el archivo está vacío
        } catch (error) {
            console.error('Error al leer el archivo de superhéroes:', error);
            return []; // En caso de error, devolver un arreglo vacío
        }
    }

    // Método para guardar los superhéroes
    guardar(superheroes) {
        try {
            // Validar que superheroes sea un arreglo
            if (!Array.isArray(superheroes)) {
                throw new Error('Los superhéroes deben estar en un arreglo.');
            }
            fs.writeFileSync(this.filePath, JSON.stringify(superheroes, null, 2));
        } catch (error) {
            console.error('Error al guardar los superhéroes:', error);
        }
    }
}
