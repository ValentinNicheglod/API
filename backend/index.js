const express = require('express');
const fetch = require("node-fetch");

app = express();

//*cache declaration | declaración de cache
let cache = {};
/* Keys and values of cache | Propiedades y valores de cache  
KEY: search (from query string | desde query string)
VALUE: products (array with results of first response | array con resultados de la primera llamada)*/

app.get("/api/search", (req, res) => {
    //*search declaration | Declaración de search
    let search = req.query.q //Value of SearchBar input | Valor del input de SearchBar
   
    // If cache has a key with the same name of search value sends that key value
    // Si cache tiene una propiedad con el mismo nombre del valor de search, envía el valor de esa propiedad
    if (cache.hasOwnProperty(search)) { 
        res.send(cache[search])
    } else {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
        .then(r => r.json())
        .then(r => {
            let products = r.results.map(product => {
                return {
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    total_price: product.price,
                    currency_id: product.currency_id,
                    available_quantity: product.available_quantity,
                    thumbnail: product.thumbnail,
                    condition: product.condition,
                    shipping: {
                        free: product.shipping.free_shipping,
                        pick_up: product.shipping.store_pick_up
                    }
                };
            });

        //Creates
        Object.defineProperty(cache, search, {
            configurable: true,
            writable: true,
            enumerable: true
        });

        //Assign
        Object.defineProperty(cache, search, {
            value: Array.from(products)
        });

        //Send
        res.send(Array.from(products));
        })
    };
});

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Listening at port: ${port} | https://localhost:${port}`);
});