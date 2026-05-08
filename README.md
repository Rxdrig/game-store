# Game Store

Game Store es una aplicación web de e-commerce digital desarrollada para demostrar habilidades en desarrollo frontend y backend. La aplicación permite explorar un catálogo de juegos por plataforma, ver detalles de cada título, administrar un carrito de compras y registrar el historial de compras de cada usuario

El objetivo del proyecto es mostrar una experiencia de compra clara y visualmente atractiva, utilizando una interfaz moderna y una arquitectura separada entre frontend y backend

## Funcionalidades

- Inicio con hero carousel y selección de juegos destacados
- Navegación por plataformas: PlayStation, Nintendo y Xbox
- Filtros por plataforma, género y precio
- Vista de detalle de cada videojuego
- Carrito de compras con drawer lateral y página dedicada
- Registro e inicio de sesión de usuarios
- Historial de compras por usuario
- Confirmación de compra y generación de claves de juego
- Backend con persistencia basada en archivos JSON para datos de usuarios, juegos y compras

## Tecnologías utilizadas

### Frontend
- React
- Vite
- React Router DOM
- CSS modular por componente y páginas
- Bootstrap para estructura visual y grillas

### Backend
- Node.js
- Express
- Nodemailer
- CORS
- Nodemon en desarrollo

## Arquitectura

- Frontend: interfaz de usuario, navegación, catálogo, carrito y autenticación visual
- Backend: API REST para autenticación, consulta de juegos y registro de compras

### Estructura general

- backend: servidor y lógica de API
- frontend: aplicación React

## Endpoints principales

### Autenticación
- POST /register: registra un usuario nuevo
- POST /login: valida credenciales

### Juegos
- GET /juegos: devuelve el catálogo de videojuegos

### Compras
- POST /comprar: procesa una compra
- GET /compras?email=correo@ejemplo.com: obtiene el historial de compras de un usuario

## Instalación y ejecución

### Backend
1. Entrar en la carpeta backend
2. Instalar dependencias
3. Ejecutar el servidor en desarrollo con npm run dev o en producción con npm start

### Frontend
1. Entrar en la carpeta frontend
2. Instalar dependencias
3. Ejecutar la app con npm run dev

## Enfoque de diseño

La interfaz busca transmitir una identidad moderna y dinámica, con énfasis en la navegación por catálogo, la jerarquía visual de los juegos destacados y una experiencia fluida tanto en desktop como en dispositivos móviles


## Notas del proyecto

Game Store fue desarrollado principalmente para demostrar conocimientos en desarrollo frontend y backend, organización de aplicaciones full stack y construcción de interfaces modernas utilizando React, Node.js y Express

El proyecto no busca representar una plataforma comercial completa, sino una simulación funcional de una tienda digital de videojuegos orientada a mostrar arquitectura, lógica de aplicación y experiencia de usuario

Algunas funcionalidades fueron implementadas de forma simplificada:

- El sistema de autenticación utiliza persistencia local mediante archivos JSON
- Los usuarios, juegos y compras se almacenan localmente
- El inicio de sesión y registro funcionan como una simulación de autenticación básica
- Las compras y pagos son simulados y no procesan transacciones reales
- El enfoque principal del proyecto está orientado a la experiencia frontend, consumo de API REST y separación entre cliente y servidor