# Offside Sports 🧢⚽

E-commerce hecho con **React** para vender indumentaria de fútbol (camisetas, shorts, buzos). Permite **listar productos**, **ver detalle**, **agregar al carrito**, **modificar cantidades** y **finalizar la compra** (persistiendo órdenes en Firebase).

---

## ✨ Características

- 🛍️ Listado y detalle de productos por categoría  
- 🧮 Carrito con sumar/restar/eliminar y total en vivo  
- ✅ Checkout con validaciones y creación de orden en Firestore  
- 🔄 SPA Routing (Home, Categorías, Detalle, Carrito, Checkout)  
- 📱 UI responsiva con Bootstrap/React-Bootstrap

---

## 🧩 Funcionalidades

- **Catálogo**: visualización de camisetas, shorts y buzos, con filtro por categoría.  
- **Detalle de producto**: imágenes, descripción, precio y control de cantidad.  
- **Carrito**:
  - Agregar/Quitar productos y actualizar cantidades.
  - Cálculo de subtotal, total y unidades.
  - Limpieza completa del carrito.
- **Checkout**:
  - Formulario con validaciones de datos.
  - Generación y persistencia de **órdenes** en **Firestore**.
  - Confirmación de compra con ID de orden.
- **Navegación**: rutas amigables (`/`, `/category/:id`, `/item/:id`, `/cart`, `/checkout`).  
- **UI responsiva**: componentes de **React-Bootstrap**

---

## 🧰 Stack & Dependencias

- **React** `^19.1.1` — [Documentación](https://react.dev/)
- **react-dom** `^19.1.1` — [APIs de react-dom](https://react.dev/reference/react-dom)
- **react-router** `^7.9.1` — [Documentación v7](https://reactrouter.com/en/main)
- **Bootstrap** `^5.3.8` — [Docs 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- **React-Bootstrap** `^2.10.10` — [Documentación](https://react-bootstrap.github.io/)
- **Firebase (Web SDK)** `^12.3.0` — [Comenzar en Web](https://firebase.google.com/docs/web/setup)

---
