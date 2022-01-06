const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5050;
const helmet = require("helmet");
const { join } = require("path");

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));
app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});

//////////below from Auth0 server.js file:

// const port = process.env.SERVER_PORT || 3000;
// app.listen(port, () => console.log(`Server listening on port ${port}`));
