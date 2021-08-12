const mongoose = require('mongoose')

const password = process.argv[2]

const url = `mongodb+srv://fullstack2021:${password}@cluster0.x722y.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: Number
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
})

if(process.argv.length > 3) {
    person.save().then(result => {
        console.log(`added ${result.name} ${result.number} to phonebook`)
        mongoose.connection.close()
    })
} else {

    Person.find({}).then(result => {
        console.log("phonebook:")
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
    
}

