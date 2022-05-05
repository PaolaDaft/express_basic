// Usando obejto express
const express = require('express')
// App de Express
const app = express()
// Puerto en el que vamos a ver nuestra app: localhost_3000
const port = 3000

// Path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello World')
})

// Con esto inicializamos esta app
app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})