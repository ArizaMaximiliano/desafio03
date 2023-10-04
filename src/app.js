const express = require('express');
const app = express();
const PORT = 8080;

const ProductManager = require('./ProductManager');
const productManager = new ProductManager('./src/products.json');

app.get('/products', async (req, res) => {
    try {
        const { limit } = req.query;
        const products = await productManager.getProduct();

        if (limit) {
            res.json(products.slice(0, parseInt(limit)));
        } else {
            res.json(products);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'ERROR: ha ocurrido un error interno del servidor' });
    }
});

app.get('/products/:pid', async (req, res) => {
    const { pid } = req.params;

    try {
        const product = await productManager.getProductByID(parseInt(pid));
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'ERROR: El producto no fue encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'ERROR: ha ocurrido un error interno del servidor' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando el puerto: ${PORT}`);
});
