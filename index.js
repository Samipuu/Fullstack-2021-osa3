const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

morgan.token('body', (req, res) => {
    return JSON.stringify(req.body)
})


app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))




let persons = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
    },
    {
      id: 4,
      name: "Mary Poppendick",
      number: "39-23-6423122"
    }
  ]

app.get('/api/persons', (request,response) => {
    
    response.json(persons)
})

app.post('/api/persons', (request, response) => {
    const person = {...request.body}
    if(person.number === "" || person.name === "" || person.number === undefined || person.name === undefined) {
        return response.status(400).send({error: 'Person must have name and number'}).end()
    } 
    if(persons.find(x => x.name === person.name) || persons.find(x => x.number === person.number)) {
        return response.status(400).send({error: "Name and number must have unique values"}).end()
    }


    person.id =  Math.floor(Math.random() * 1000000)
    persons.push(person)
    response.json(person)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if(person) {
        return response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    
    persons = persons.filter(person => person.id ==! id)

    response.status(204).end()
})

app.get('/info', (request, response) => {
    response.send("<p>Phonebook has info for " + persons.length + " people <br>" +
    new Date() + "</p>")
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
