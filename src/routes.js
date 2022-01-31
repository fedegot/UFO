const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv/config");
var cors = require("cors");
const app = express();
const connection = mysql.createConnection(process.env.DB_URI);

app.use(cors());

connection.connect(function (err) {
  if (err) throw err;
  console.log("connect to the db");
});

// http://localhost:4000/97

app.get("/97", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports1997",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/98", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports1998",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/99", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports1999",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/00", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2000",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/01", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2001",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/02", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2002",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/03", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2003",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/04", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2004",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/05", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2005",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/06", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2006",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/07", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2007",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/08", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2008",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

app.get("/09", function (req, res) {
  connection.query(
    "SELECT * FROM UFOReports2009",
    function (error, results, fields) {
      if (error) throw error;
      res.send(results);
    }
  );
});

// Starting our server.
app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING`);
});
