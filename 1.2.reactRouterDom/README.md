# react router dom

instalacion de la libreria react-router-dom
--> npm install react-router-dom <--

# Estructura carpetas React

creamos una carpeta components y otra carpeta pages; a su vez, creamos otra carpeta styles.

# modulos css

para crear css aparte para cada fichero se hace así
--> {nombre}.module.css <--

# ¿Cuándo usar Arrow Functions o Functions?

Cuando creamos un componente padre, como por ejemplo, Header, Footer, Home, etc, usaremos Functions.
Cuando creemos componentes reusables, por ejemplo, cards, usaremos Arrow Functions.

# ¿Cuándo usar {nombre.class} o {nombre["class-class"]}?

{nombre.class}: Si en el CSS tenemos una clase escrita de esta forma ".class", en el JSX usaremos {nombre.class}.
{nombre["class-class"]}: Si en el CSS tenemos una clase escrita de esta forma ".class-text" en el JSX usaremos {nombre["class-text]};

// IMPORTANTE
Si en algún caso tenemos que usar varias clases en una etiqueta HTML usaremos lo siguiente: className={`${nombre.class} ${nombre["class-text"]}`}.

# ¿Cómo importar los modulos css?

import style{Nombre} from "./{nombre}.module.css";

# Imagenes: assets o public.

Assets: Si la imagen va a cambiar mucho se mete en assets, porque se va a recompilar cada vez que haga "npm run dev". Sólo para imagenes que usaré en componentes React -> Imagenes de cards, logos, icons... || para acceder con unidad relatiza --> src="../assets/{nombre}.png"

Public: Imagenes que no cambien / son fijas. No necesito que cuando se recompile el código cargar la imagen. Sólo para imagenes que se referencien en el index.html || acceder imagen de forma absoluta --> src="images/{nombre}.png" o "import {nombre} "path"" y luego se importa en src={nombre};

# styleGlobales o Reusables

En los Estilos Globales se pondrá todo lo referenciado a la tipografía y colores de nuestro proyecto.
En los Estuilos Reusables se pondrá todo el código CSS que estemos repitiendo en nuestro proyecto, y que veamos que se va a ser de utilidad.

# Carpeta Componentes: organizar por subcarpetas.

<!-- En componentes crear subcarpetas por cada componente.-->

Para que nustra estructura de carpetas sea más legible, en la carpeta COMPONENTES crearemos subcarpetas por cada componente, en la que se incluirán los siguientes archivos:

- Componente JSX
- Style

# React Router Dom

<!-- Con ReactRouterDom en el APP no se ponen componentes, es el fichero de enrutamiento. -->

A partir de ahora en el APP no pondremos componentes ya que será nuestro fichero de enrutamiento.
Es decir, en nuestro APP irán todas las rutas a todas nustras vistas, y en caso, de que una vista lleve a otra también irá definida ahí.

# CSS SPREADSHEET

- Para dividir la página usamos:
  {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  }

- Para que los elementos ocupen todo el div usamos:
  {
  justify-content: space-between;
  }

- Usaremos REM la mayor parte del tiempo en las siguientes propiedades:
- Padding
- Gap
- Font-size \*
- Margin \*

- Etiquetas HTML utiles:
- Header
- Footer
- Main
- Section
- Article
- Aside
- Nav
- Div
- Span
- Button
- a
- Form

- Si queremos entrar un elemento en el centro de la página, usamos:
  { margin: 0 auto; }








# APUNTES PROFESORA
# LIBRERÍA REACT ROUTER DOM

## Documentación:

- https://reactrouter.com/home
- Modo declarativo: https://reactrouter.com/start/declarative/routing

## instalación de la libreria react-router-dom

- npm install react-router-dom

## Componentes:

- BrowserRouter => para especificar el ámbito de las rutas definidas en App, sobre mi arbol de componentes.
- Routes, Route => para definir las rutas en modo declarativo
- Outlet => Cuando definimos rutas anidadas, porque queremos que hereden partes de un template/bigLayout/rootLayout, pues es importante especificar en el template en que parte del mismo se inyectara cada una de las rutas anidadas, pues para eso especificamos outlet.
- Link, NavLink => para crear el nav del header con los links entre paginas, pues esos hipervinculos se definen con Link, o si quieres saber cual es el enlace activo para estilarlo pues con NavLink

## Hooks

- useNavigate => para cuando quieres desde un evento (por ejemplo onClick) redireccionar a otra vista pues usamos ese señor o hook.
- useParams => vale, este es super importante, este es cuando quieres pasar algún parámetro desde una página a otra, porque necesitas saber, por ejemplo, cuando el usuario pulsa en una card, y va a la vista de detalles de la misma, pues necesitas pasar en esa redirección de la vista catálogo a la vista detalles pues necesitas pasar por url el id de la card que ha pulsado para poder mostrar sus datos en la vista detalles.

## Rutas protegidas:

- Envolver la ruta con un PrivateRoute haciendo uso de children

# ICONOS REACT

## Lucide react

npm i lucide-react
https://lucide.dev/icons/

## React icons:

npm i react-icons
https://react-icons.github.io/react-icons/

## Iconify:

npm install @iconify/react
https://icon-sets.iconify.design/

# ESTILOS GLOBALES Y LOCALES CSS - MODULES CSS:

## Estilos globales:

- Un fichero de globales con los colores
- Un fichero de reusables con clases reusables

## Estilos locales:

- Un modulo CSS por cada componente JSX

# CHILDREN versus PROPS - REUSABILIDAD AL MÁXIMO

- Ejemplo de componentes button y card hechos con children y props.

# IMÁGENES DESDE PUBLIC versus DESDE SOURCE

SI van a cambiar mucho pues usas en assets para que se empaqueten en cada build, el import ya será relativo no absoluto

    ```React

    Imágenes en public: path absoluto
    <img src="/images/logo.png" alt="Logo" />


    Imágenes en assets: path relativo - requiere import
    import logo from './assets/logo.png'
    <img src={logo} alt="Logo" />
    ```

## CALLBACK - PASAO DE PARÁMETROS EN EVENTOS

# Diferencia entre llamar a una función desde un evento o poner una referencia a la misma

- desde un onClick tu solo puedes poner una referencia a la función por ejemplo handleOnClick, porque si le pones la llamada handleOnClick(), pues se ejecutaría en el momento, y solo queremos que se ejecute cuando se de el evento

  ```React
  onClick={handleClick}
  onClick={handleClick()}
  ```

## Teniendo en cuenta eso, pues modo de pasar parámetros correctamente a una función desde un evento

- entonces claro, si le quieres pasar un parámetro, como es una referencia y no una llamada, no puedes, para eso se usan los callback (funciones flecha), llamas esa función dentro de un callback, entonces ya es una llamada y no una referencia, ya le puedes pasar parámetros, pero esa llamada ocurre dentro un callback, esto hace que no se ejecute hasta que se de el evento.

  ```React
  onClick={() => {
              handleDetail(item.id);
              }}
  ```

# ARROW FUNCTIONS: RETURN IMPLÍCITO vs EXPLÍCITO

    ```React
    <NavLink
    to="/contacto"
    className={({ isActive }) => (isActive && styles.active)}

    > Contacto
    > </NavLink>
    ```

    ```React
    <NavLink
    to="/contacto"
    className={({ isActive }) => { return isActive && styles.active }}

    > Contacto
    > </NavLink>
    ```