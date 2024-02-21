const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const PORT = 3000

const arreglo = [{taskid:0, tasktitle:'titulodefecto'}]

app.use (bodyParser.json ())

app.get('/', (req, res) => {
        res.send(arreglo)
} )

app.post('/', (req, res) => {
      const datos = req.body  
      console.log (datos) 
      arreglo.push (datos) 
      res.send(arreglo)
} )

app.put('/', (req, res) => {
      const datos = req.body
      arreglo.map (({taskid})=> {
        if (taskid = datos.taskid) {
            arreglo[taskid] = datos 
                res.send (arreglo)
        }
    }) 
} )

app.delete('/', (req, res) => {
        const datos = req.body
        arreglo.splice (datos.taskid,1)
        res.send (arreglo)
} )


app.listen( PORT, () => {
    console.log('Ya prendió')
})