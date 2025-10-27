const express = require('express');
const app = express();
const cors = require('cors');
const poat = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const users = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    age: 28,
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    age: 35,
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie.brown@example.com',
    age: 22,
  },
];

app.get('/', (req, res) => {
  res.send('Hello Bangladash');
});

app.post('/users', (req, res) => {
  console.log('user post method');
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  res.send(newUser);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.listen(poat, () => {
  console.log('surver runing poat..', poat);
});
