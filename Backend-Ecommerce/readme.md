# Prieto Matias- Primer commit: 05/07/2024
Me encargue de hacer la base del servidor, de agregar un par de controladores, 
y de conectar a base de datos. IMPORTANTE: para que trabajemos eficientemente te recomiendo
a vos, gordito, agarrar la cadena conección, descargar mongodb for vscode y colocarla ahí para que tengamos el mismo acceso a todos los datos y puedamos trabajar eficiente mente.
En este mismo repositorio voy a colocar la carpeta del frontend.

---

# Prieto Matias- Actualización: 06/07/2024
Realizados los schemas restantes tales como:
1-schemaCart: Documento para el carrito
2-schemaOrder:Documento para las ordenes de compra
3-schemaReview:Documento para las reviews en los productos
4-schemaSuppliers: Documento para los proveedores
5-schemaInventory:Documento para ver todos los productos en general en inventario
6-schemaConfig: Documento para la configuración del sitio
7-schemaUser: Documento para los usuarios
8-schemaProducts: Documentos para la estructura general de los productos
Los modelos ya están hechos, solo falta testeo.

---

# Prieto Matias- Actualización: 09/07/2024
Agregado un par de controladores en usuario y admin

---

# Prieto Matias- Actualización: 12/07/2024
Testeo de controladores de usuario y corrección al momento de crear usuario


# Prieto Matias- Actualización: 18/07/2024
Después de una semana me encargué de hacer las validaciones para el admin y el usuario
instalé dos librerías más, 'JsonWebToken' y 'ExpressSession'. verifico roles para ver si es admin y que clase de admin es (si es supervisor, contador, general, etc) para delegar funciones y demás. 
Hice dos archivos que define los tipos de un par de cosas para que deje de dar errores de tipado.
Lo siguente que voy hacer es hacer los controladores de login y de registro para usuario, también hay que hacer del deslogueo.

---

# Prieto Matias- Actualización: 22/07/2024
Agregada los controladores de crear y login de administradores, modificación del uso de los tipos de los Request (index.d.ts quedó inutilizada, algún uso le daremos más adelante). Hay un error en al momento de crear el admin.

# Prieto Matías- Actualización: 23/07/2024
Creada el controlador y testeado de logout, testeado el controlador de login.
También he creado una carpeta de "Requests" que sirve para realizar solicitudes http con la extensión "REST Client" de vs code. Solicionado el error que no dejaba crear admin.