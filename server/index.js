const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
let app = express();

app.use(cors());
app.use(express.static('client/dist'));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

