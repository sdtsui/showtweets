var Twitter = require('twitter');
var twitterClient = new Twitter({
  consumer_key: 'bnzNvrZpwC2wkQAqauvCPIfBt',
  consumer_secret: 'xqs953PfR6Zqjj2Q786fpMeQ8Z6NkoFCXK137xVTgtFCnwTVuU',
  access_token_key: '2719284156-FCzrVGXcRUZQKvO0j05BQiNxTeWNx9Tb1areGcP',
  access_token_secret: 'zDpOuxLUTief5qC6hryIYFPIcW2URHOrIVAJ9N0Ve9rYb'
});

var express = require('express');
var tweetRouter = express.Router();

tweetRouter
  .get('/', function(request, response){
    var params = {screen_name: 'sdtsui'};
    // twitterClient.get('statuses/user_timeline', params, function(error, tweets, response){
    //   if (!error) {
    //     console.log(tweets);
    //   }
    //   console.log('req attempted:');
    // });

    console.log('search tweets :');
    twitterClient.get('search/tweets', {q: 'node.js'}, function(error, tweets, response){
      var found  = tweets.statuses;
      console.log("found length!!!!", found.length);

      if (error) {
        console.log("error", error);
        return response.status(500).end(error);
      }
      console.log("Success 201");
      return response.status(201).json(found);

      // console.log("first tweet", found[0]);
      // console.log("1 tweet", found[1]);
      // console.log("found:", found);
      // console.log('________________________________');
      // console.log('stringified: ', JSON.stringify(found));
    });
    // scheduleController.bookTeeTime(request.body, function(error, result){
    //   if (error) {
    //     console.log("error", error);
    //     return response.status(500).end(error);
    //   }
    //   console.log("Success 201");
    //   return response.status(201).json(result);
    // });
  
});


module.exports = tweetRouter;




