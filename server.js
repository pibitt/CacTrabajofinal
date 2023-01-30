const express = require('express')
const app = express()
const hbs = require ('hbs');

const port = 3000

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {   //2 parametros, primero indica el nombre del archivo hbs, el segundo objeto)
    titulo: "Mi página"
  })
})

app.get('/about', (req, res) => {
  res.render('about', {   
    titulo: "Sobre Nosotros"
  })
})

// app.get('/shop', (req, res) => {
//   res.render('shop', {
//     titulo: "Tienda"
//   })
// })

// app.get('/contact', (req, res) => {
//   res.render('contact', {
//     titulo: "Contacto"
//   })
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})