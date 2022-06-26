const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MONGO_CLIENT_EVENTS } = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://projetotera:joaocleilson@cluster0.f8qbd.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri, { useUnifiedTopology: true })
    .then (client => {
        console.log('Connected to Database')
        const db = client.db('user')
        const usersCollection = db.collection('users')

        app.listen(3000, () => {
            console.log('Listening on 3000')
        })
        
        app.use(bodyParser.urlencoded({ extended: true}))
        
        app.post('/users', async (req, res) => {
            const {username, password} = req.body;
            const existUsername = await usersCollection.findOne({username: req.body.username})
            const existEmail = await usersCollection.findOne({email: req.body.email})
            if (!existUsername && !existEmail){
                usersCollection.insertOne(req.body)
                .then(result =>{
                    res.redirect('/')
                })
                .catch(error => console.error(error))
            } else {
                return res.status(400).json({
                    message: "Usuário/Email já cadastrado"
               });
            }
        })
        
        app.use('/css', express.static('css'));
        app.use('/imgs', express.static('imgs'));
        
        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
        })

      })
    .catch(error => console.error(error))

