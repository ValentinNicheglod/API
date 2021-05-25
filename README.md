# Mono
<img src="https://user-images.githubusercontent.com/67331469/119239521-07d9e480-bb20-11eb-8799-b9a14873f39c.png" width="100%"/>

Proyecto personal realizado con react para Henry Labs, es un sitio de e-commerce que utiliza los recursos de una API de Mercado Libre, se pueden ordenar y filtrar productos por condición y tipo de envío.


## 📋 Datos del proyecto...

✔️❌ **Estado:** Finalizado

📅⏰ **Fecha de comienzo y finalización:** 12/2020 - 12/2020

🔣⌨️ **Lenguajes utilizados:** Javascript

👨🏻‍💻 📋 **Tecnologías utilizadas:** Bootstrap, Express, JWT, Material UI, Multer, Passport, PostgreSQL, **React**, Redux, Sequelize.

💻📱 **Tipo:** Página web



## 📎 Descripción del proyecto...
### Backend
Se usa el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}. 
Recibe un queryString con el parámetro `q` con un string que indica el keyword a buscar. La API retorna un JSON con la siguiente forma:
```json
{
  "site_id": "MLA",
  "query": "iphone",
  "paging": {},
  "results": [{
  	"id": "MLA851931164",
    "site_id": "MLA",
    "title": "iPhone 11 128 Gb Morado 4 Gb Ram",
    "seller": {},
    "price": 182240,
    ...
  }],
  "secondary_results": [
    ...
  ],
  "related_results": [
  	...
  ],
  "sort": {
    "id": "relevance",
    "name": "More relevant"
  },
  "available_sorts": [],
  "filters": [],
  "available_filters": []
}
```
> **NOTA**
> 
> En cada llamado a la API, se hará una verificación y se almacenará la respuesta en una propiedad con el nombre de la búsqueda, en caso de que se busque la misma palabra los resultados que se mostrarán vendrán desde el caché, por lo tanto, obtendremos los datos de la API una única vez.

### Frontend

#### Componentes

###### Filter
Filter se encarga de mostrar las opciones de filtrado y ordenamiento en el cátalogo.
###### Footer
Footer con información.
###### Inicio
Componente principal que se muestra al abrir la página.
###### NavBar
Barra de navegación.
###### Pagination
Bloque de botones para paginación (cada 30 productos).
###### ProductCard
Card contenedora de información del producto, recibe props desde `SearchResults`.
###### Results
En caso de que una busqueda no devuelva productos, mostrará un mensaje indicandolo, de lo contrario, renderizará un `ProductCard` por cada producto.
###### SearchBar
Barra de busqueda, se encarga de traer las respuestas desde el backend utilizando su valor como query string.


#### Contenedores
###### Catalogo
Catalogo contiene los componentes `NavBar`, `Filter`, `Results`, `Pagination` y `Footer` y se encargá de la mayoría de la lógica de la página.



## 🖼️ Imágenes del proyecto...
> Inicio.
![inicio](https://user-images.githubusercontent.com/67331469/119192122-faf0be80-ba55-11eb-8d99-d0af08580afc.jpg)


> Catalogo.
![catalogo](https://user-images.githubusercontent.com/67331469/119192114-f926fb00-ba55-11eb-843b-849367900e51.jpg)


> Catalogo con filtros.
![catalogo-filtro](https://user-images.githubusercontent.com/67331469/119192118-f9bf9180-ba55-11eb-8e9f-17fbea5a30d6.jpg)

