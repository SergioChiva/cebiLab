# 🚀 Despliegue en Vercel - Guía Rápida

## ✅ Lo que hemos hecho:

- ✅ Convertido el backend a API routes de Astro
- ✅ Todo funciona ahora en UN SOLO proyecto
- ✅ Subido a GitHub
- ✅ Listo para Vercel

---

## 📝 PASOS PARA DESPLEGAR:

### 1️⃣ Ir a Vercel
1. Ve a: https://vercel.com/login
2. Inicia sesión con GitHub

### 2️⃣ Importar el proyecto
1. Click en **"Add New..."** → **"Project"**
2. Busca tu repositorio **"cebiLab"**
3. Click en **"Import"**

### 3️⃣ Configuración
En la pantalla de configuración:

- **Framework Preset**: Astro (detectado automáticamente)
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `dist` (automático)
- **Install Command**: `npm install` (automático)

### 4️⃣ Añadir Variable de Entorno
En la sección **"Environment Variables"**:

1. Click en el desplegable y selecciona **"Production"**, **"Preview"** y **"Development"**
2. Añade:
   - **Key**: `MONGODB_URI`
   - **Value**: `mongodb+srv://cebilab_user:whvsBUxQDoDCVr6p@cluster0.lprvnxj.mongodb.net/cebilab?retryWrites=true&w=majority`
3. Click en **"Add"**

### 5️⃣ Desplegar
1. Click en **"Deploy"**
2. Espera 2-3 minutos
3. ¡Listo! Te dará una URL como: `https://cebi-lab.vercel.app`

---

## ✅ Resultado:

- **Frontend**: `https://tu-proyecto.vercel.app`
- **API**: `https://tu-proyecto.vercel.app/api/cocios`
- Todo en uno, sin complicaciones

---

## 🔄 Para actualizar:

Simplemente haz push a GitHub:
```bash
git add .
git commit -m "Cambios"
git push
```

Vercel se actualiza automáticamente en segundos.

---

## ✨ Ventajas de Vercel:

- ✅ Frontend + Backend en uno
- ✅ Despliegue automático con cada push
- ✅ 100% gratis
- ✅ Rápido y confiable
- ✅ Sin necesidad de Render
- ✅ Funciona perfectamente con MongoDB Atlas

---

## 🎯 ¡Ahora sí debería funcionar sin problemas!
