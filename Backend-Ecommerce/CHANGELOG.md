# Changelog

Todos los cambios importantes en este proyecto se documentarán en este archivo. Una visión mas técnica de los cambios y los repositorios como tal. **IMPORTANTE**: Los cambios van desde abajo para arriba, siendo arriba los cambios más actuales.


## [1.2.0] 2024-08-09
### Añadido
- Controladores de Review, y Suppliers
- Respectivos ENDPOINTS que faltaban
- Añadido `SOFT-DELETED` en todos los controladores
- Falta testeo

## [1.1.2] 2024-08-08
### Cambiado
- Actualición de los esquemas y modelos para permitir un `SOFT-DELETED`
### Errores
- En el momento de crear un administrador.

## [1.1.1] - 2024-08-08
### Añadido
- Controladores de Proveedores e Inventario
### Falta
- Respectivos `ENDPOINTS`

## [1.1.0] - 2024-08-07
### Añadido
- Controlador de órdenes :
- **MakeOrder**: Hace una órden
- **CancelOrder**: Cancela una orden 
- **getAllOrders**: Obtiene una lista de órdenes
- **getUserOrder**: Obtiene la órden de un usuario
### Corregido
- Errores que no dejaban funcionar los controladores de administradores  

## [1.0.3] - 2024-08-02
### Modificado
- `authUser` y `authAdmin` se fusionaron en `auth`, que cumpliría las dos tareas


## [1.0.3] - 2024-07-31
### Añadido
- Controlador de carrito, con una sola función de de agregado al carrito **Sin Testear**
- Rutas de carrito **Sin testear**
- Rutas de productos agregadas

## [1.0.2] - 2024-07-30
### Testeado
- Controladores y endpoints de crear usuarios
- Rutas protegidas de los usuarios
- Login y Logout de usuarios
- Error al comprobar los campos de los usuarios
### Añadido
- `user.http` para realizar consultas http y mandar peticiones al controlador usuarios.

## [1.0.2] - 2024-07-29
### Añadido
- Controlador de actualizar, eliminar con sus correspondientes rutas en administradores.
- Añadido más solicitudos http en la archivo "admin.http" 
- Error en el momento de validar si todos los campos están correctos la función "updateAdmin"
- Añadido controladores de actualizar usuarios y sus respectivos controladors y endpoints de login y  logout.
- Pequeños cambios en la interfaz de `tokenPlayload` y en la funcion de `generateToken` para que permita el rol de tipo nulo. Así nos ahorramos de crear otra interfaz para usuarios.
- Falta testear los endpoints de actualizar usuarios y verificar si se loguea y se desloguea correctamnete.
- Falta verificar las rutas protegidas de user.

## [1.0.1] - 2024-07-23
### Añadido
- Controlador de logout creado y probado.
- Carpeta "Requests" para realizar solicitudes HTTP con la extensión "REST Client" de VS Code.

### Corregido
- Error que impedía la creación de administradores.

## [1.0.0] - 2024-07-22
### Añadido
- Controladores para la creación y login de administradores.
- Implementación de validaciones para admin y usuario.

## [0.1.0] - 2024-07-18
### Añadido
- Base del servidor y conexión a la base de datos.
- Controladores iniciales.
