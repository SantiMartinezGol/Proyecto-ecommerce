# Proyecto ecommerce Enchilados
 

> Proyecto desarrollado con reactJS.
> Subido al Github: https://github.com/SantiMartinezGol/Proyecto-ecommerce.git
> Subido a Vercel: proyecto-ecommerce-xdvf-f9866qs7b-santimartinezgol.vercel.app
> Imagenes y base de datos almacenadas en Firebase.

## Componentes
En inicio se muestran todos los productos, utilizando los siguientes componentes:
- **ItemListContainer :** 
    - Se muestran los productos en grilla utilizando el componente **ItemGrid** utilizando el componente **ItemG** para el renderizado individual de cada producto.
En caso de utilizar la visualizacion en listado se utiliza **ItemList** utilizando el componente **Item** para el renderizado individual de cada producto.
Ruta inicial: '/'
   ---
El renderizado individual de cada producto se realiza a través del:
- **ItemDetailContainer:**
  - Muestra el detalle del producto seleccionado utilizando el componente **ItemDetail** para visualizar las caracteristicas del producto e incorpora a **ItemCount** para añadir al carro el producto.
Ruta del Detalle del producto: '/producto/:id'
   ---
El carro de compras esta compuesto por:
- **ItemCart:**
  - Muestra el listado de los productos añadidos al carrito con los botones de acción 'vaciar carro', 'terminar compra y ' seguir comprando'.
Cada producto es renderizado a través de los componentes **ItemCarro** que incluye al **ItemCountCart** que permite modificar o eliminar el producto.
Ruta del carro de compras: '/cart'
---
Una vez seleccionado el boton 'terminar compra' se solicitan los datos del comprador en el siguiente componente:
- **Checkout:**
   - Contenedor del formulario **Form** el cual nos solicita los datos del comprado e incluye un boton 'generar orden'.
 Ruta del Checkout: '/checkout'
---

# Gif del proyecto funcionando

![Enchilados](https://user-images.githubusercontent.com/106122546/217418960-e33c1306-10c4-44df-9c4c-bed43b1f5e86.gif)