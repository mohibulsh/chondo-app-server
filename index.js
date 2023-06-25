const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('running server app ...........')
})
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ChondoApp:rvUHQV9yNFVPgtEP@cluster0.khyx0yo.mongodb.net/?retryWrites=true&w=majority";
//ChondoApp
//rvUHQV9yNFVPgtEP
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`runnig the server app on port  ${port}`)
})