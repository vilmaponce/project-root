import fs from 'fs';
import path from 'path';

// Ruta a la carpeta de datos
const dataDir = path.join(process.cwd(), 'data'); // Usar process.cwd() para obtener la ruta actual
const backupFile = path.join(dataDir, 'backup_superheroes.txt');

// Función para recuperar datos
export function recuperarCopiaDeSeguridad() {
    fs.readFile(backupFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer la copia de seguridad:', err);
            return;
        }

        try {
            const superheroesRecuperados = JSON.parse(data); // Convierte de JSON a objeto
            // Aquí puedes agregar la lógica para actualizar tu base de datos o el array de superhéroes
            console.log('Superhéroes recuperados:', superheroesRecuperados);
            // Por ejemplo, podrías añadirlos a un array global
            // superheroes.push(...superheroesRecuperados);
        } catch (parseError) {
            console.error('Error al parsear los datos:', parseError);
        }
    });
}
