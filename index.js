const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000


// middlewhare
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ah0b9.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {

    try {
        await client.connect();

        const userCollection = client.db("luma").collection("userData");
        const eventCollection = client.db("luma").collection("event");

        // post data into database
        app.post('/userData', async (req, res) => {
            const data = req.body;
            // console.log(data)
            const result = await userCollection.insertOne(data)
            res.send(result)
        })

        // get data
        app.get('/allData', async (req, res) => {
            const result = await userCollection.find().toArray()
            res.send(result)
        })

        // get event
        app.get('/event', async (req, res) => {
            const result = await eventCollection.find().toArray()
            res.send(result)
        })

        // get single event
        // -----------------
        // app.get('/event/:eventId', async (req, res) => {
        //     const id = req.params.eventId
        //     console.log(id)
        //     const query = { _id: ObjectId(id) }
        //     const result = await eventCollection.findOne(query)
        //     res.send.json(result)
        // })


    } finally {
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('Hello From  Shoonyaio Tech LLP!')
})

app.listen(port, () => {
    console.log(`Shoonyaio Tech LLP app listening on port ${port}`)
})
