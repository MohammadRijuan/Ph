const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json())

// user : mongoDBuser
// pass : 0EmFGOsnISAzWDcl

const uri = "mongodb+srv://mongoDBuser:0EmFGOsnISAzWDcl@cluster0.i0ofiio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    await client.connect();
    const userCollection = client.db('usersdb').collection('users');

    app.get('/users',async(req,res)=>{
        const cursor = userCollection.find();
        const result = await cursor.toArray();
        res.send(result)
    })

    app.get('/users/:id',async(req,res)=>{
        const id = req.params.id
        const query = {_id: new ObjectId(id)}
        const result = await userCollection.findOne(query)
        res.send(result)
    })

    app.put('/users/:id',async(req,res)=>{
        const id = req.params.id
        const filter = {_id: new ObjectId(id)}
        const user = req.body

        const updatedDoc = {
          $set : {
            name: user.name,
            email : user.email
          }
        }
        const options = {upsert : true}
        console.log(user)

        const result = await userCollection.updateOne(filter, updatedDoc,options)
        res.send(result)
    })

    // Define route inside the run block
    app.post('/users', async (req, res) => {
      console.log('data in the server', req.body);
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });


    app.delete('/users/:id', async(req,res) =>{
        const id = req.params.id
        // console.log(id)
        const query = {_id: new ObjectId(id)}
        const result = await userCollection.deleteOne(query)
        res.send(result)
    })  

    // Start server here
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}

run().catch(console.dir);

app.get('/',(req,res) =>{
    res.send('simple crud server')
});

app.listen(port, ()=>{
    console.log(`Simple curly bracket server running on ${port}`)
})