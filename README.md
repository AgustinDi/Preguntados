# Trivia-millonaria: Prueba Tecnica - Ingeniero de Desarrollo
Aplicación de trivia que consta de 5 niveles, con premio acumulado por cada respuesta, con la posibilidad de seguir jugando hasta ganar el millon o retirarse antes de lograrlo.

Como iniciar le proyecto en tu computador?:

Se necesita tener instalados:
 <a href='https://nodejs.org/es/'>Node.js</a>, <a href='https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15'>MSSQL</a> y <a href='https://www.microsoft.com/es-es/sql-server/sql-server-downloads'>SQL server</a>.

Para la configuración inicial de SQL server y MSSQL recomiendo este <a href='https://www.youtube.com/watch?v=1BSZE81R13w'>video</a>

A partir de esa base vamos a seguir estas instrucciones:
* Clonamos el repositorio localmente
* Abrimos MSSQL e iniciamos sesión con windows authentication.
* Desplegamos nuestra conexion con la base de datos y entramos a la carpeta security, despues le damos segundo click a login y seleccionamos new Login.
<img src='https://res.cloudinary.com/agustindi/image/upload/v1661323365/preguntas/login_1_avp8fx.png'>

* Creamos el usuario con la opción de SQL server authentication activada, con el nombre de yina y como contraseña 12345678.
<img src='https://res.cloudinary.com/agustindi/image/upload/v1661323366/preguntas/login_2_o0nn0m.png'>

* Despues A la izquierda, entramos a Server Roles y activamos la opcion sysadmin, para dar administrador al usuario.
<img src='https://res.cloudinary.com/agustindi/image/upload/v1661323366/preguntas/login_3_lpr2ve.png'>

* Ahora vamos a crear la base de datos, dando segundo click en database y en new database, a esta nueva base de datos le vamos a poner unicamente el nombre de "app_preguntas" y le damos a ok (También se puede hacer una query basica como: CREATE DATABASE app_preguntas).
<img src='https://res.cloudinary.com/agustindi/image/upload/v1661324153/preguntas/database_1_ynrxqj.png'>

* Vamos a permitir el inicio de sesion con credenciales tipo SQL (para que el usuario que recién creamos pueda usar la base de datos), para esto hay que hacer segundo click en la conexión
<img src='https://res.cloudinary.com/agustindi/image/upload/v1661324540/preguntas/permisos_1_xyh5gr.png'>

* Y entrar a las propiedades de la misma, vamos hasta security y Cambiamos server authentication de windows a SQL y windows.
<img src='https://res.cloudinary.com/agustindi/image/upload/v1661324540/preguntas/permisos_2_z1agdk.png'>

* Ahora vamos a activar el TCP\IP para poder conectarnos desde el codigo! para ello hay que dar segundo click a "este equipo" y entrar en "Administrar", luego abrimos la ultima opcion, "Servicios y Aplicaciones", abrimos la que empieza con SQL server y entramos a la que se llama SQL server Network Configuration, despues entramos a Protocols (el unico archivo que hay) y lo "habilitamos", dandole segundo click y clickeando en "Enabled"

* Una vez terminado eso, vamos a reiniciar el servidor local para que los cambios se guarden, para eso desde el mismo administrador en el que estabamos en la carpeta SQL server, vamos a abrir SQL server services y vamos a "reiniciar" el archivo con el icono verde, dandole segundo click y "restart".


* Ahora el proyecto deberia funcionar correctamente, debe entrar a cada carpeta (backend y frontend) y hacer npm install para descargar todas las dependencias que vamos a usar.

* Para levantar los servidores locales ejecutá:
    backend: npm run dev
    frontend: npm start

* Y listo, el juego esta funcionando en tu ordenador!

### Modelo Entidad-Relación:
La Entidad-Relación del proyecto se basa en tres modelos principales.
* El de Category, que guarda las 5 categorias que existen en el juego y el respectivo premio al ganar en una de ellas, este tiene una relacion de muchas preguntas para una categoria.
* El de Answers, que contiene 4 respuestas y tiene una relacion uno a uno con Question.
* Y Question, que consta de una pregunta y la respuesta correcta a esa pregunta, siendo esta un valor entre 1 y 4.
<img src='https://res.cloudinary.com/agustindi/image/upload/v1661325983/preguntas/modelo_vr1n7v.png'>

### Tecnologias utilizadas en el proyecto:

Backend:
    SQL server - Express.js - Node.js - Mssql

Frontend:
    React.js - SweetAlert


