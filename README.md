# Amigo Secreto 🎉

Este proyecto es una aplicación web interactiva para realizar el sorteo de un **amigo secreto** de manera sencilla y divertida. Es ideal para pequeños grupos que deseen asignar al azar un amigo secreto, como en reuniones familiares o entre amigos.

## Índice

1. [Descripción](#descripción)
2. [Características](#características)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Dependencias](#dependencias)
7. [Problemas conocidos](#problemas-conocidos)
8. [Contribuciones](#contribuciones)
9. [Licencia](#licencia)

---

## Descripción

El objetivo principal de este proyecto es fortalecer las habilidades en lógica de programación mediante el desarrollo de una pequeña aplicación que permita:
- Añadir nombres de amigos a una lista.
- Sortear un amigo secreto al azar entre los nombres proporcionados.

---

## Características

- **Interfaz amigable:** Diseño sencillo y accesible.
- **Uso interactivo:** Permite añadir nombres y realizar el sorteo con botones interactivos.
- **Resultados claros:** Muestra el nombre del amigo secreto sorteado de forma destacada.

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/amigo-secreto.git
   ```
2. Abre el archivo `index.html` en tu navegador favorito.

---

## Uso

1. Escribe el nombre de un amigo en el campo de texto.
2. Haz clic en el botón **"Añadir"** para agregarlo a la lista.
3. Una vez añadidos todos los nombres, haz clic en **"Sortear amigo"**.
4. El resultado será mostrado en la parte inferior de la página.

---

## Estructura del proyecto

```
📁 amigo-secreto
├── 📁 assets
│   └── amigo-secreto.png
│   └── play_circle_outline.png
├── app.js
├── index.html
├── style.css
└── README.md
```

- **`index.html`:** Contiene la estructura principal de la aplicación.
- **`app.js`:** Lógica del funcionamiento para añadir amigos y realizar el sorteo.
- **`style.css`:** Estilo visual de la página.
- **`assets`:** Recursos visuales como imágenes o íconos.

---

## Dependencias

Este proyecto utiliza:

- Google Fonts: Fuentes `Inter` y `Merriweather`.
- Navegador web moderno para ejecutar JavaScript.

---

## Problemas conocidos

1. Si no se añaden nombres antes de realizar el sorteo, se muestra un mensaje vacío.
   - **Solución:** Asegúrate de añadir al menos un nombre antes de sortear.
2. La lista no se guarda al recargar la página.
   - **Mejora futura:** Implementar almacenamiento local (`localStorage`) para preservar los datos.

---

## Contribuciones

¡Contribuciones son bienvenidas! Si deseas colaborar:

1. Haz un fork del proyecto.
2. Crea una rama nueva para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Envía un pull request para revisión.

---
