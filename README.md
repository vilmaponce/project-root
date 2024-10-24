#### Vilma Ponce
# Proyecto de Superhéroes

Este proyecto es una API RESTful para gestionar una lista de superhéroes. Permite realizar operaciones como obtener, agregar, actualizar y eliminar superhéroes, así como buscar superhéroes por diferentes atributos.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Rutas de la API](#rutas-de-la-api)
- [Licencia](#licencia)

## Características

- Obtener todos los superhéroes.
- Buscar superhéroes por ID, nombre real, atributos personalizados y otros filtros.
- Agregar nuevos superhéroes con datos como nombre, poderes, edad, universo, y más.
- Actualizar información de superhéroes existentes.
- Eliminar superhéroes.
- Recuperar copias de seguridad de superhéroes.

## Tecnologías Utilizadas

- Node.js
- Express.js
- JavaScript
- Postman (para pruebas de la API)

## Instalación
**Navega al directorio del proyecto**
```cd mi-proyecto```
**Instala las dependencias necesarias:**
```npm install express```
**Inicializa el servidor**
```node server.mjs```

***Rutas de la API***
GET /superheroes
Obtiene todos los superhéroes.

GET /superheroes/id/:id
Obtiene un superhéroe específico por su ID.

GET /superheroes/nombreReal/:nombreReal
Obtiene superhéroes por su nombre real.

POST /superheroes
Agrega un nuevo superhéroes

DELETE /superheroes/:id
Elimina un superhéroe por su ID.

GET /superheroes/atributo/:atributo/:valor
Busca superhéroes por un atributo específico y su valor.

GET /superheroes/filtros
Obtiene superhéroes mayores de 30 años con filtros adicionales.

### Autor:Vilma Ponce



