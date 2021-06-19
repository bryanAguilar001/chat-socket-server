# Chat App Server

Esta aplicación presenta la implementación de un servidor construido en Node con Express que implementa sockets para la comunicación directa con un cliente web y móvil (Flutter).

## Cómo usar

Paso 1:

Tener instalado Node y el paguete [nodemon](https://www.npmjs.com/package/nodemon) de manera global. Nodemon permite levantar el servidor con cada nuevo cambio.

Paso 2:

Clonar el repositorio del proyecto con el siguiente comando

```
git clone 
```

Paso 3:

En la raíz del proyecto ejecute el siguiente comando en la consola para obtener las dependencias necesarias:

```
npm install
```

Paso 4:

Ejecutar el servidor. El primer comando se usa para ambientes de producción y el segundo para ambientes de desarrollo (usa nodemon)

```
npm start
```

```
npm run start:dev
```

## Qué aprendí

- Comunicación en tiempo real con clientes
- Creación de directorios públicos
- Variables de entorno y scripts
- Emitir y escuchar eventos

## Características

- Creación de modelos para manipulación de objetos
- Cliente HTML para emitir y escuchar eventos (directorio público)
- Configuración de archivo .env para establecer el puerto de conexión

## Librerías & Paquetes usados

* `dotenv`: configuración de variables de entorno (puerto de conexión) 
* `express`: framework del backend
* `socket.io`: implementación de sockets en el servidor
* `uuid`: generador de identificadores únicos
* `bcryptjs`: generador de tokens
* `cors`: permite realizar peticiones http de manera segura
* `express-validator`: validaciones de campos
* `jsonwebtoken`: servicios de autenticación
* `mongoose`: gestión de colecciones de datos en base de datos mongo

# Autor

El código fuente de esta aplicación esta escrito por Bryan Aguilar (Desarrollador de Eitecknologia)

- Sitio web - [bryanaguilar](https://bryanaguilar.gatsbyjs.io/)
- GitHub - [bryanAguilar001](https://github.com/bryanAguilar001)
- LinkeIn - [bryanaguilar6174](https://www.linkedin.com/in/bryanaguilar6174)
- Email - [bryan.aguilar6174@gmail.com](mailto:bryan.aguilar6174@gmail.com)