const express = require('express');
const app = express();
const port = 4000;
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./db.js');
const cors = require('cors');

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(__dirname + '/../public'));



app.get('/action/:id', function(req, res) {
    let id = req.params.id;
    db.getOne(parseInt(id), (err, result) => {
      if(err) {
        console.log('ERROR IN SERVER', err);
      } else {
        console.log('Response IN SERVER',result);
        res.send(result);
      }
    });
    // console.log(req);
    // res.send('hola');
    // res.end();
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

