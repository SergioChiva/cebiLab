# Backend CebiLab

Backend simple para gestión de cocios usando Node.js, Express y MongoDB.

## Requisitos

- Node.js (v18 o superior)
- MongoDB instalado y corriendo localmente, o MongoDB Compass

## Instalación

1. Navega a la carpeta backend:
```bash
cd backend
```

2. Instala las dependencias:
```bash
npm install
```

## Configuración

El archivo `.env` ya está configurado para conectar a MongoDB local:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/cebilab
```

## Uso

### Iniciar el servidor

```bash
npm start
```

O en modo desarrollo (con auto-reload):
```bash
npm run dev
```

El servidor se ejecutará en `http://localhost:3000`

### Ver la base de datos con MongoDB Compass

1. Abre MongoDB Compass
2. Conecta usando la URI: `mongodb://localhost:27017`
3. Verás la base de datos `cebilab` con la colección `cocios`

## API Endpoints

- **GET** `/api/cocios` - Obtener todos los cocios
- **POST** `/api/cocios` - Crear o actualizar un cocio
- **DELETE** `/api/cocios/:key` - Eliminar un cocio

## Estructura

```
backend/
├── models/
│   └── Cocio.js      # Modelo de MongoDB
├── server.js          # Servidor Express
├── package.json
└── .env              # Configuración
```

## Modelo de Datos

Cada cocio tiene:
- `key`: Identificador único (tipo-fila-columna)
- `proveedor`: Nombre del proveedor
- `referencia`: Referencia del material
- `cantidad`: Cantidad en Kg
- `fecha`: Fecha de registro
