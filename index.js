const express = require('express')
const cors = require('cors');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000


// middlewhare
app.use(cors())
app.use(express.json())



async function run() {
    try {
        await client.connect();

        




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
