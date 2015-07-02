var express      = require('express');
var app          = express();
var port         = process.env.PORT || 9000;

app.use(express.static(__dirname));
app.listen(port);

console.log('Listening on PORT ' + port + '....');

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'bnzNvrZpwC2wkQAqauvCPIfBt',
  consumer_secret: 'xqs953PfR6Zqjj2Q786fpMeQ8Z6NkoFCXK137xVTgtFCnwTVuU',
  access_token_key: '2719284156-FCzrVGXcRUZQKvO0j05BQiNxTeWNx9Tb1areGcP',
  access_token_secret: 'zDpOuxLUTief5qC6hryIYFPIcW2URHOrIVAJ9N0Ve9rYb'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
  console.log('req attempted:');
});
