# Trabajo Final De Node.js

## _Tienda e-commerce_

Proyecto live, en Heroku:
## BACKEND:
https://ecommerceproje.herokuapp.com/

Apis --> 
https://ecommerceproje.herokuapp.com/api/login?email=admin@gmail.com&password=admin
https://ecommerceproje.herokuapp.com/api/user
https://ecommerceproje.herokuapp.com/api/productos

## FRONTEND:
https://ecommerceprojefrontend.herokuapp.com/


## Proyecto Final Node.js

- Duracion 6 meses
- 4 Hs semanales
- <a href="https://nodejs.org/es/"> Node.js </a>
- JWT
- APIs
- Mongoose
- MongoAtlas
- WebSocket
- Handlebars
- Nodemailer

## Librerias externas a create-react-app utilizadas

- [Express] - Express version 4.17.3
- [Concurrently] - Concurrently version 7.1.0
- [Cors] - Cors version 2.8.5
- [Dotenv] - Dotenv version 16.0.1
- [JWT] - Json Web Token version 8.5.1
- [Mongoose] - Mongoose version 6.3.1
- [Log4js] - Log4js version 6.6.0
- [Nodemoon] - Nodemon version 2.0.15
- [Socket.io] - Socket.io version 4.5.1

[Express]: https://www.npmjs.com/package/express
[Concurrently]: https://www.npmjs.com/package/currently
[Cors]: https://www.npmjs.com/package/cors
[Dotenv]: https://www.npmjs.com/package/dotenv
[JWT]: https://www.npmjs.com/package/jsonwebtoken
[Mongoose]: https://www.npmjs.com/package/mongoose
[Log4js]: https://www.npmjs.com/package/log4js
[Nodemoon]: https://www.npmjs.com/package/nodemon
[Socket.io]: https://www.npmjs.com/package/socket.io

## Front en React

- Componentes, Promesas, asincronia y MAP
- APIs
- Routing y Navegacion
- Eventos
- Context
- Rendering

## Librerias externas a create-react-app utilizadas

- [ReactBootstrap] - React Bootstrap version 2.0.0-beta.6
- [ReactIcons] - React Icons version 4.2.0
- [MongoAtlas] - Firebase version 8.9.1
- [Nodejs] - Node.js version 14.18.1

[reacticons]: https://react-icons.github.io/react-icons/icons?name=ai
[reactbootstrap]: https://react-bootstrap.github.io/
[MongoAtlas]: https://www.mongodb.com/es/atlas/database
[nodejs]: https://nodejs.org/es/

<br>

# Historia de Usuario

- El Actor debe contar con un login el cual brindara un mecanismo al front para el ingreso autorizado al sistema basado en JWT.
- El Actor debe poder registrarse, el mismo debe guardarse en la base de datos MongoAtlas.
- El Actor tendra la session actvida de usuario con un tiempo de expiracion de 1hr. TIEMPO PARAMETRIZABLE.
- El Actor debe tener un chat de consulta el cual podra consultar con el administrador de la pagina en tiempo real.
- El Actor debe poder ingresar, navegar por los productos e ir a sus detalles.
- Desde el detalle el Actor debe poder ver la descripción, foto y precio e ingresarlo al carrito.
- Una vez que el Actor ingresa al menos un producto al carrito, se deberá visualizar un listado compacto de la orden con el precio total.
- El Actor ingresa su nombre, apellido, teléfono e e-mail, debe activarse el botón de ‘realizar compra’.
- Al clickear ‘realizar compra’ debe guardarse en la base de datos una orden que tenga todos los productos, la fecha y dar feedback de la compra.

## Features

- Barra buscador de Productos
- Nueva estetica y mejora de visualizacion
- Integracion con API de MercadoPago


## Instalacion

- En la terminal se debe descargar el repositorio:
```
git clone https://github.com/santiagosuare/e-commerce-project.git
```
<br>

- Una vez instalado debe situarse en la carpeta e-commerce-project:
> Note: e-commerce-project requires [Node.js](https://nodejs.org/) v18 to run.

```sh
$ cd e-commerce-project
$ npm install
```


- La ejecucion del proyecto ya cuenta con un concurrently el cual va a ejecutar junto con el servidor el frontend en React.
> Note: Tener en cuenta installar los node_module tanto para el back como para el front.
```sh
"dev": "nodemon ./src/server.js",
"client": "cd public && npm start",
"start": "concurrently \"npm run dev\" \"npm run client\"",
```

<br>

### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) para verlo en tu browser.

<br>

## License

Santiago Suarez

**Free Software, Hell Yeah!**
