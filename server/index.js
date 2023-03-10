const express = require("express");
const cors = require("cors");

const joke_routes = require('./routes/joke.js')
const miniMaxSum = require('./algorithm.js')

// eslint-disable-next-line
const PORT = process.env.PORT || 3002;
const app = express();

const domains = [
  "https://zens-assignment-ui.herokuapp.com",
  "http://localhost:3001",
]

const corsOptions = {
  origin: (origin, callback) => {
    if (domains.indexOf(origin) !== -1 || origin === undefined) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET"],
  optionsSuccessStatus: 200
}

app.get("/algorithm", (req, res) => {
  const arr = [4, 2, 3, 1, 5]
  res.json(miniMaxSum(arr))
})

app.listen(PORT, () => {
  console.log(`Test ${PORT}`);
});

app.use('/api/jokes', cors(corsOptions), joke_routes)