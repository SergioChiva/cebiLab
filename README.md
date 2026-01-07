# 🏭 CebiLab - Sistema de Gestión Industrial

Sistema web completo y moderno para la gestión de inventarios industriales, diseñado inicialmente para el sector cerámico pero **100% adaptable a cualquier tipo de negocio**.

###Inicio de sesión
- Utiliza la contraseña : **vinagre**
- Dale a iniciar sesión

## 🚀 Características Principales



### 📦 Gestión de Estanterías de Materiales
- **Creación dinámica** de estanterías con filas y columnas personalizables
- **Sistema CRUD completo** para materiales (cocios/esmaltes)
- **Gestión de proveedores** integrada
- **Filtros avanzados** por proveedor, referencia y cantidad
- **Interfaz visual** tipo grid para mejor organización
- **Edición y eliminación** de estanterías y materiales
- **Validación de datos** y feedback visual

### 🔥 Gestión de Hornos Cerámicos
- **Registro de hornos** con nombre personalizado
- **Control de temperatura** (°C)
- **Velocidad del horno** configurable
- **CRUD completo** (Crear, Leer, Actualizar, Eliminar)
- **Tarjetas visuales** con diseño moderno
- **Validación** de nombres únicos

### 🎨 Interfaz Moderna y Responsive
- Diseño limpio y profesional
- Gradientes y animaciones suaves
- Adaptable a móviles, tablets y desktop
- Sidebar colapsable en dispositivos móviles
- Estados de carga y estados vacíos
- Feedback visual en todas las acciones

## 🛠️ Stack Tecnológico

- **Frontend**: [Astro](https://astro.build/) - Framework web ultrarrápido
- **Backend**: API REST con Astro
- **Base de Datos**: MongoDB Atlas (cloud)
- **ODM**: Mongoose para modelado de datos
- **Despliegue**: Vercel
- **Estilos**: CSS moderno con gradientes y animaciones

## 📋 Requisitos Previos

- Node.js y npm
- Cuenta en MongoDB Atlas
- Git


## 📁 Estructura del Proyecto

```
cebilab/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Login.astro
│   │   ├── Dashboard.astro
│   │   ├── Estanterias.astro
│   │   └── Hornos.astro
│   ├── models/             # Modelos de MongoDB
│   │   ├── Cocio.ts        # Modelo de materiales
│   │   ├── Estanteria.ts   # Modelo de estanterías
│   │   ├── Proveedor.ts    # Modelo de proveedores
│   │   └── Horno.ts        # Modelo de hornos
│   ├── pages/              # Páginas y rutas
│   │   ├── index.astro     # Página principal
│   │   └── api/            # Endpoints API REST
│   │       ├── cocios/
│   │       ├── estanterias/
│   │       ├── proveedores/
│   │       └── hornos/
│   └── lib/
│       └── db.ts           # Conexión a MongoDB
├── public/                 # Archivos estáticos
├── .env                    # Variables de entorno (no incluido en git)
├── .env.example            # Plantilla de variables de entorno
├── astro.config.mjs        # Configuración de Astro
├── package.json
└── tsconfig.json
```

## 🎯 Cómo Usar

### Acceso Inicial
1. Abre la aplicación en tu navegador
2. Inicia sesión (por ahora usa cualquier credencial)
3. Accede al dashboard principal

### Gestión de Estanterías
1. Haz clic en "Nueva Estantería"
2. Define nombre, filas y columnas
3. Añade materiales a cada posición
4. Filtra y busca materiales fácilmente
5. Edita o elimina cuando lo necesites

### Gestión de Hornos
1. Ve a la sección "Hornos Cerámicos" 🔥
2. Haz clic en "Nuevo Horno"
3. Establece nombre, temperatura y velocidad
4. Edita los valores según necesites
5. Elimina hornos que ya no uses

## 🔌 API REST

### Estanterías
- `GET /api/estanterias` - Listar todas
- `POST /api/estanterias` - Crear nueva
- `GET /api/estanterias/[id]` - Obtener una
- `PUT /api/estanterias/[id]` - Actualizar
- `DELETE /api/estanterias/[id]` - Eliminar

### Cocios (Materiales)
- `GET /api/cocios` - Listar todos
- `POST /api/cocios` - Crear nuevo
- `GET /api/cocios/[key]` - Obtener uno
- `PUT /api/cocios/[key]` - Actualizar
- `DELETE /api/cocios/[key]` - Eliminar

### Proveedores
- `GET /api/proveedores` - Listar todos
- `POST /api/proveedores` - Crear nuevo

### Hornos
- `GET /api/hornos` - Listar todos
- `POST /api/hornos` - Crear nuevo
- `GET /api/hornos/[id]` - Obtener uno
- `PUT /api/hornos/[id]` - Actualizar
- `DELETE /api/hornos/[id]` - Eliminar

## 🔄 Adaptación a Otros Negocios

Este sistema es **completamente adaptable**. Aquí algunos ejemplos:

### 🏪 Para un Almacén General
- Cambia "Estanterías" por "Zonas de Almacenamiento"
- Cambia "Cocios" por "Productos"
- Cambia "Hornos" por "Equipos" o "Vehículos"

### 🍷 Para una Bodega
- "Estanterías" → "Bodegas"
- "Cocios" → "Vinos"
- "Hornos" → "Barricas"

### 🏥 Para un Laboratorio
- "Estanterías" → "Almacenes"
- "Cocios" → "Muestras"
- "Hornos" → "Equipos de Análisis"

### 📚 Para una Biblioteca
- "Estanterías" → "Estanterías de Libros"
- "Cocios" → "Libros"
- "Hornos" → "Salas de Lectura"

**Para adaptar:**
1. Modifica los modelos en `src/models/` según tus necesidades
2. Actualiza los componentes en `src/components/`
3. Cambia los textos y emojis en la interfaz
4. Ajusta los campos de formulario según tu caso de uso


## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT. Siéntete libre de usarlo, modificarlo y distribuirlo.

## 👨‍💻 Autor

**Sergio Chiva**
- GitHub: [@SergioChiva](https://github.com/SergioChiva)

## 🙏 Agradecimientos

- Desarrollado para Cebimar
- Construido con Astro y MongoDB
- Inspirado en necesidades reales de gestión industrial

