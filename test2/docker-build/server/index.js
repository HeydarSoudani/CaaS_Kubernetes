const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});
pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS names (name VARCHAR(20) NOT NULL)')
  .catch(err => console.log(err));


// Express route handlers
app.get('/', (req, res) => {
  res.send('Ho');
});

app.get('/names/all', async (req, res) => {
  const values = await pgClient.query('SELECT * from names');

  res.send(values.rows);
});

app.post('/submitName', async (req, res) => {
  const name = req.body.name;
  pgClient.query('INSERT INTO names(name) VALUES($1)', [name]);

  res.send({ working: true });
});

app.listen(5000, err => {
  console.log('Listening');
});
