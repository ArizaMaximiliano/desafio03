Hice un npm install -y 
Instale express 
Cree src y app.js 
Cree product.json con 10 productos del desafio anterior
Abri el sv en el puerto 8080
Despues comprobe:
    http://localhost:8080/products
        me devolvio los 10 productos (tuve problemas con el path de products.json)
        [{"id":1,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":2,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":3,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":4,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":5,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":6,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":7,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":8,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":9,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":10,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25}]
    http://localhost:8080/products?limit=5
        me devolvio 5 productos
        [{"id":1,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":2,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":3,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":4,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25},{"id":5,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25}]
    http://localhost:8080/products/2
        me devolvio el producto con id 2
        {"id":2,"title":"Actualizacion","description":"Actualizacion","price":299,"image":"sin imagen","code":"zzz999","stock":25}
    http://localhost:8080/products/200
        me devolvio ERROR
        {"error":"ERROR: El producto no fue encontrado"}

Ese fue el test que hice!