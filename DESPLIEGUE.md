# 🚀 Guía de Despliegue CebiLab (100% GRATIS)

## Servicios que vamos a usar:
- ✅ **MongoDB Atlas** (Ya lo tienes) - Base de datos
- ✅ **Render.com** - Backend (API)
- ✅ **Vercel** - Frontend (Sitio web)

---

## 📝 PASO 1: Preparar repositorio en GitHub

### 1.1 Crea una cuenta en GitHub (si no tienes)
Ir a: https://github.com/signup

### 1.2 Crear un nuevo repositorio
1. Ve a: https://github.com/new
2. Nombre: `cebilab`
3. Público o Privado (da igual)
4. NO marques ninguna casilla
5. Click en "Create repository"

### 1.3 Subir tu código a GitHub

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
cd c:\Users\sergi\OneDrive\Escritorio\Proyectos-web\CebiLab

# Inicializar git
git init

# Añadir todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit"

# Conectar con tu repositorio (CAMBIA tu-usuario por tu usuario de GitHub)
git remote add origin https://github.com/tu-usuario/cebilab.git

# Subir el código
git branch -M main
git push -u origin main
```

---

## 🔧 PASO 2: Desplegar Backend en Render

### 2.1 Crear cuenta en Render
Ir a: https://render.com/
- Click en "Get Started for Free"
- Registrarse con GitHub (más fácil)

### 2.2 Crear Web Service
1. En el dashboard de Render, click en "New +"
2. Seleccionar "Web Service"
3. Conectar tu repositorio de GitHub `cebilab`
4. Configurar:
   - **Name**: `cebilab-backend`
   - **Region**: Frankfurt (o el más cercano)
   - **Root Directory**: `backend`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: Free

### 2.3 Añadir Variables de Entorno
En la misma página, en "Environment Variables":
- Click en "Add Environment Variable"
- **Key**: `MONGODB_URI`
- **Value**: `mongodb+srv://cebilab_user:vinagre@cluster0.lprvnxj.mongodb.net/?appName=Cluster0`
- Click en "Add"

### 2.4 Desplegar
- Click en "Create Web Service"
- Espera 2-3 minutos a que se despliegue
- Copia la URL que te dan (ejemplo: `https://cebilab-backend.onrender.com`)

---

## 🎨 PASO 3: Desplegar Frontend en Vercel

### 3.1 Crear cuenta en Vercel
Ir a: https://vercel.com/signup
- Registrarse con GitHub (recomendado)

### 3.2 Importar proyecto
1. En el dashboard, click en "Add New..."
2. Seleccionar "Project"
3. Importar tu repositorio `cebilab`
4. Configurar:
   - **Framework Preset**: Astro (lo detecta automáticamente)
   - **Root Directory**: `./` (dejar vacío o poner punto)
   - **Build Command**: `npm run build` (automático)
   - **Output Directory**: `dist` (automático)

### 3.3 Añadir Variable de Entorno
En "Environment Variables":
- **Key**: `PUBLIC_API_URL`
- **Value**: `https://cebilab-backend.onrender.com/api/cocios` (La URL de Render que copiaste antes)
- Click en "Add"

### 3.4 Desplegar
- Click en "Deploy"
- Espera 1-2 minutos
- ¡Listo! Te dará una URL tipo: `https://cebilab.vercel.app`

---

## ✅ ¡TERMINADO!

Ahora tu aplicación está online en:
- **Tu sitio web**: `https://tu-proyecto.vercel.app`
- **Backend**: `https://cebilab-backend.onrender.com`
- **Base de datos**: MongoDB Atlas

### Puedes acceder desde:
- ✅ Cualquier ordenador
- ✅ Móvil
- ✅ Tablet
- ✅ Cualquier lugar del mundo

---

## 🔄 Para actualizar tu sitio:

Simplemente haz cambios en tu código local y ejecuta:

```powershell
git add .
git commit -m "Actualización"
git push
```

Vercel y Render se actualizarán automáticamente.

---

## 💡 IMPORTANTE:

**Render en plan gratuito:**
- El backend se "duerme" después de 15 minutos sin usar
- La primera petición puede tardar 30 segundos en despertar
- Después funciona normal
- Si quieres que esté siempre activo, hay planes de pago ($7/mes)

**Vercel en plan gratuito:**
- Siempre está activo
- Sin límites prácticos para tu uso

---

## 🆘 Si tienes problemas:

1. Revisa los logs en Render (pestaña "Logs")
2. Revisa los logs en Vercel (pestaña "Deployments" → click en el deployment → "View Function Logs")
3. Asegúrate de que la URL del backend en Vercel tenga `/api/cocios` al final
