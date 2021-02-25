# MONO Store
## Descripción del proyecto
El proyecto es un prototipo de un e-commerce con datos traidos desde una [API de Mercado Libre](https://api.mercadolibre.com/sites/MLA/search?q={query})
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
Componente que se muestra al abrir la página.
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
Catalogo contiene los componentes `NavBar`, `Filter`, `Results`, `Pagination` y `Footer`.

## ¿Como correr el proyecto?
1. Abrir el bash de git en la carpeta en la que se quiera clonar el repositorio.
2. Ejecutar `git clone https://github.com/ValentinNicheglod/MONO.git`.
3. Esperar que la tarea haya finalizado.
4. Ejecutar `npm install` en las carpetas *frontend* y *backend*.
5. Esperar que se instalen las dependencias.
6. Una vez instaladas, ejecutar `npm start` en las carpetas *frontend* y *backend*.
>Puede visualizar el proyecto en [localhost:3000](https://localhost:3000)
