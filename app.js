import express from 'express'
import * as url from 'url';
import hbs from 'hbs';
import * as dotenv from 'dotenv'

dotenv.config()

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

const app = express()
const port =process.env.PORT

app.set('view engine', 'hbs');

app.use(express.static('public'))

/*app.get('/', function (req, res) {
  res.send('Home page')
})*/

app.get('/', function (req, res) {
    res.render('home',{
        nombre:'Nicolas Gonzalez Raggi',
        titulo:'Curso de Node'
    })
})

app.get('/generic', function (req, res) {
    res.render( 'generic',{
        nombre:'Nicolas Gonzalez Raggi',
        titulo:'Curso de Node'
    })
})

app.get('/elements', function (req, res) {
    res.render( 'elements',{
        nombre:'Nicolas Gonzalez Raggi',
        titulo:'Curso de Node'
    })
})

app.get('/hola-mundo', function (req, res) {
    res.send('Holla mundo desde su respectiva pagina')
})

app.get('*', function (req, res) {
    res.sendFile( __dirname + '/public/404.html')
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
