var bodyParser = require('body-parser');
var cors = require('cors');


var express      = require('express');
var app          = express();
var port         = process.env.PORT || 9000;


/**
 * [bodyParser description]
 * @type {[type]}
 */

var getTweetsRouter = require('./routes/getTweets');
// var metaRouter = require('./routes/metaRouter');
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());



app.use(express.static(__dirname));


app.use('/getTweets', getTweetsRouter);


app.listen(port);

console.log('Listening on PORT ' + port + '....');

