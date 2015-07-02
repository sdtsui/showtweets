var Twitter = require('twitter');
var twitterClient = new Twitter({
  consumer_key: 'bnzNvrZpwC2wkQAqauvCPIfBt',
  consumer_secret: 'xqs953PfR6Zqjj2Q786fpMeQ8Z6NkoFCXK137xVTgtFCnwTVuU',
  access_token_key: '2719284156-FCzrVGXcRUZQKvO0j05BQiNxTeWNx9Tb1areGcP',
  access_token_secret: 'zDpOuxLUTief5qC6hryIYFPIcW2URHOrIVAJ9N0Ve9rYb'
});

var express = require('express');
var tweetRouter = express.Router();

// var Firebase = require('firebase');
// var myRootRef = new Firebase('https://beechallenge.firebaseIO-demo.com/users/seenTweets');
// console.log(myRootRef.set("hello world!"));

var extractTweetData = function(foundTweets, options) {
  var numberToSend = 3;
  var result = [];
  indexesDesired = [0, 1, 2];
  if (options) {
    numberToSend = options.number || 3;
  }
  var makeFormattedTweet = function(tweet){
    return {
      img         : tweet.user["profile_image_url_https"],
      screen_name : tweet.user["screen_name"],
      twitterURL  : 'https://twitter.com/' + tweet.user["screen_name"],
      tweetText   : tweet.text,
      tweetID     : tweet.id ,
      userID      : tweet.user.id
    };
  }
  indexesDesired.forEach(function(idxNum) {
    result.push(makeFormattedTweet(foundTweets[idxNum.toString()]));
  });
  // var userObj = foundTweets.user;
  // console.log('FOUNDTWEETS : ',foundTweets);
  // console.log('foundTweet Length: ', foundTweets.length);
  // console.log('found0-user : ', foundTweets[0].user);
  // console.log('imageurl', userObj.profile_image_url_https);
  // console.log('screenName', userObj.screen_name);
  // console.log('twitterURL', '@' + userObj.screen_name);
  // console.log('tweetText', foundTweets.text);
  console.log('three things : ', result);


  return result;
};

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

    twitterClient.get('search/tweets', {q: 'node.js'}, function(error, tweets, resp){
      console.log(tweets);
      var found  = tweets.statuses;
      console.log("found length!!!!", found.length);
      if (error) {
        console.log("error", error);
        return response.status(500).end(error);
      }
      console.log("Success 201");
      response.status(201);

      var filteredTweetInfo = extractTweetData(found);

      return response.send(filteredTweetInfo);
    });

});


module.exports = tweetRouter;




