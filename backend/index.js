const express = require('express');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");

app = express();
app.use(bodyParser.json());

app.get("/api/search", (req, res) => {
    let search = req.query.q
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
        res.send(products);
    })
});

app.listen(3001, () => {
    console.log('Listening at 3001');
});