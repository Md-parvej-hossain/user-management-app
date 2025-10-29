const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
//user : fristDB
//pas : 0OUP7HcjquGs95Nn
app.use(cors());
app.use(express.json());

// const uri =
//   'mongodb+srv://fristDB:0OUP7HcjquGs95Nn@cluster0.mcpcj.mongodb.net/?appName=Cluster0';
const uri = 'mongodb://localhost:27017';
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    //way 1
    const database = client.db('usersdb');
    const usersCollection = database.collection('users');

    //way 2
    // const database = client.db('usersdb').collection('users');
    //get all data
    app.get('/users', async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    // get one data
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const quary = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(quary);
      res.send(result);
    });

    //post data
    app.post('/users', async (req, res) => {
      console.log('data in the server', req.body);
      const newUser = req.body;
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });
    //updated data
    app.put('/users/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const user = req.body;
      const updatedDoc = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };
      const options = { upsert: true };
      const result = await usersCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });
    //delete data
    app.delete('/users/:id', async (req, res) => {
      console.log(req.params);
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const resuld = await usersCollection.deleteOne(query);
      res.send(resuld);
    });

    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } finally {
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('My frist server is this...');
});

app.listen(port, () => {
  console.log('Server succesfully runing port ', port);
});
