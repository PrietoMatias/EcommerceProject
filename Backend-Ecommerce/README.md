# Cambios y Actualizaciones del Proyecto

## Prieto Matías - Primer commit: 05/07/2024
- Se creó la base del servidor.
- Se agregaron algunos controladores y se conectó a la base de datos.
- **IMPORTANTE**: Para trabajar de manera eficiente, te recomiendo que descargues MongoDB para VS Code y utilices la cadena de conexión proporcionada para tener acceso a los mismos datos. También se agregará la carpeta del frontend en este repositorio.

## Prieto Matías - Actualización: 06/07/2024
- Se realizaron los siguientes esquemas:
  1. **schemaCart**: Documento para el carrito.
  2. **schemaOrder**: Documento para las órdenes de compra.
  3. **schemaReview**: Documento para las reseñas de productos.
  4. **schemaSuppliers**: Documento para los proveedores.
  5. **schemaInventory**: Documento para el inventario de productos.
  6. **schemaConfig**: Documento para la configuración del sitio.
  7. **schemaUser**: Documento para los usuarios.
  8. **schemaProducts**: Documento para la estructura de los productos.
- Los modelos están hechos, solo falta realizar pruebas.

## Prieto Matías - Actualización: 09/07/2024
- Se agregaron algunos controladores en los módulos de usuario y admin.

## Prieto Matías - Actualización: 12/07/2024
- Se realizaron pruebas de los controladores de usuario.
- Se corrigió un problema al crear un usuario.

## Prieto Matías - Actualización: 18/07/2024
- Se realizaron validaciones para admin y usuario.
- Se instalaron las librerías `JsonWebToken` y `ExpressSession`.
- Se implementó la verificación de roles para administrar distintos tipos de admins (supervisor, contador, general, etc.).
- Se crearon archivos de definición de tipos para solucionar errores de tipado.
- Próximos pasos: Implementar controladores de login y registro para usuarios, y también para el logout.

## Prieto Matías - Actualización: 22/07/2024
- Se agregaron controladores para la creación y login de administradores.
- Se modificó el uso de los tipos en `Request` (se dejó `index.d.ts` sin uso por ahora).
- Se identificó un error al crear administradores.

## Prieto Matías - Actualización: 23/07/2024
- Se creó y probó el controlador de logout.
- Se probó el controlador de login.
- Se creó una carpeta llamada "Requests" para realizar solicitudes HTTP con la extensión "REST Client" de VS Code.
- Se solucionó el error que impedía la creación de administradores.

## Prieto Matías - Actualización: 29/07/2024
- Creado controladores de actualizar, eliminar y obtener todos los admins.
- Bug que impide las validaciones de los campos próximo a corregir.  
- Controladores de login, logout creados para usuario.
- Cambios en la interfaz de `tokePlayload` y en la función  `generateToken` para que permita rol nulo
- Controladores sin testear por falta de tiempo.
- Rutas protegidas sin comprobar 


## Prieto Matías - Actualización: 30/07/2024
- Probado los endpoints y rutas protegidas.
- Bug que no me permite crear los usuarios porque campos figuran como incompletos o invalidos
- `user.http` creado para solicitudes

## Prieto Matías - Actualización: 31/07/2024
- Agregado endpoint y protección a rutas de productos *(Agregado, modificacion, edición...)*
- Agregado un solo controlador de carritos, y rutas protegias de carrito