const express = require('express')
const app = express()
const hbs = require('hbs');
const productos = require('./data/products.json');

const port = 3000

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) { });

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {   //2 parametros, primero indica el nombre del archivo hbs, el segundo objeto)
        titulo: "Mi página",
        productos: productos.products
    })
})

app.get('/como-comprar', (req, res) => {
    res.render('como-comprar', {      
        titulo: "Cómo comprar",     
    })
})

app.get('/contacto', (req, res) => {
    res.render('contacto', {
        titulo: "Contacto",         
    })
})

app.get('/producto-detalle', (req, res) => {
    res.render('producto-detalle', {
        titulo: "Detalla del producto", 
    })
})

app.get('/sobre-nosotros', (req, res) => {
    res.render('about', {
        titulo: "Sobre Nosotros", 
    })
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})