require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/phonebook')
const { Mongoose } = require('mongoose')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

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
    Person.find({}).then (persons => {
        response.json(persons)
    })
        .catch(error => next(error))

})

app.post('/api/persons', (request, response, next) => {
    const body = {...request.body}
    if(body.number === "" || body.name === "" || body.number === undefined || body.name === undefined) {
        return response.status(400).send({error: 'Person must have name and number'}).end()
    } 
    if(persons.find(x => x.name === body.name) || persons.find(x => x.number === body.number)) {
        return response.status(400).send({error: "Name and number must have unique values"}).end()
    }

    const person = new Person({...body})

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
        .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response) => {
    const id = String(request.params.id)
    
    Person.findById(id)
        .then(foundPerson => {
            response.json(foundPerson)
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request,response, next) => {
    const id = String(request.params.id)
    
    persons = persons.filter(person => person.id ==! id)

    Person.findByIdAndRemove( id ).then(remove => {
        response.status(204).end()
    })
        .catch(error => next(error))
    
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = {...request.body}

    Person.findByIdAndUpdate(request.params.id, body, { new: true})
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})

app.get('/info', (request, response, next) => {
    Person.estimatedDocumentCount().then(count => {
        response.send("<p>Phonebook has info for " + count + " people <br>" + new Date() + "</p>")
    })
})

const errorHandler = (error, request, response, next) => {
    console.error(error.name)
    console.error(error.message)

    if(error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
