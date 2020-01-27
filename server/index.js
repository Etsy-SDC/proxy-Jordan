const express = require('express');
const bodyparser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

let port = 1336;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

