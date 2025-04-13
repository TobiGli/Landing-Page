# 📌 Objetivo

El objetivo de este challenge es desarrollar una landing page utilizando **Next.js, TypeScript y TailwindCSS**, consumiendo datos desde una API pública. La aplicación debe incluir un diseño simple pero funcional y ser completamente responsive.

## 🛠️ Requerimientos técnicos

- **Framework:** Next.js
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS
- **Consumo de API:** Fetch API o Axios
- **Extras:** Uso de componentes reutilizables y tipado correcto

## 🏗️ Descripción del desafío

Vas a desarrollar una landing page con dos páginas principales que mostrarán información obtenida desde la API de **Google Books**.

### 📂 Páginas requeridas

1. **`/home`** → Página principal con:
    - **Header / Navbar** con el título de la web y navegación entre páginas.
    - **Hero Section** con un título y una imagen destacada.
    - **Sección de contenido** con una breve descripción del sitio.
    - **Sección de videos de YouTube** en iframes (podes elegir videos relacionados desde YouTube).
    - **Footer** con enlaces a redes sociales.
2. **`/books`** → Página de libros con:
    - **Header / Navbar** (mismo que en home).
    - **Lista de libros obtenidos de la API de Google Books**, mostrando:
        - Imagen de portada
        - Título
        - Autor
        - Descripción
    - **Footer** (mismo que en home).

## 🔗 API a utilizar

Se utilizará la **Google Books API** para obtener información sobre libros. Puedes hacer peticiones a:

```
https://www.googleapis.com/books/v1/volumes?q=javascript

```

Ejemplo de respuesta:

```json
{
  "items": [
    {
      "id": "1",
      "volumeInfo": {
        "title": "JavaScript: The Good Parts",
        "authors": ["Douglas Crockford"],
        "description": "Un libro sobre las mejores partes de JavaScript.",
        "imageLinks": {
          "thumbnail": "https://books.google.com/books/content?id=12345&printsec=frontcover&img=1&zoom=1"
        }
      }
    }
  ]
}

```

## 🎯 Criterios de evaluación

- ✅ Uso correcto de **Next.js** y **TypeScript**.
- ✅ Correcta implementación del **Navbar y Footer en ambas páginas**.
- ✅ **Consumo de la API** de Google Books y manejo de datos.
- ✅ Componentes reutilizables (**BookCard.tsx** para los libros, por ejemplo).
- ✅ Uso adecuado de **TailwindCSS** para estilizar la aplicación.
- ✅ Diseño **responsive** (se revisará en móvil y desktop).
- ✅ Manejo adecuado de **estados de carga y errores**.

## 🚀 Entrega

El proyecto debe ser subido a un repositorio de GitHub y compartir el enlace.

---

¡Buena suerte! 🎉
