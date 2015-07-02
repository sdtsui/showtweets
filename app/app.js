var __DEV__ = false;

var seenTweets = [];
var updateSeenTweets = function() {
  var oldSeenTweets = JSON.parse(localStorage.getItem('seenTweets'));
  if (oldSeenTweets){
    seenTweets.concat(oldSeenTweets); 
  }
};

var updateLocal = function() {
  var seen = JSON.stringify(seenTweets);
  var oldTweets = JSON.parse();//...
  localStorage.setItem('seenTweets', seens);
}

var ratedTweets = {
  ratings : [],
  lastIndex: 0
};

var enqueuedTweets = [];


var currentTweet = {
  tweetID: null,
  rating: null
};
var clearCurrentTweet = function() {
  currentTweet = {
    tweetID: null,
    rating: null
  };
}

var getSomeTweets = function () {
    updateSeenTweets();
    console.log('attempted request');
    if (!!__DEV__){return ;}
    var request = $.ajax({
      url: "/getTweets",
      type: "GET",
      // data: {id : menuId},
      // dataType: "html"
    });

    request.done(function(res, type) {
      console.log("DONE :", res);
      console.log('type :', type);
      enqueuedTweets = res.filter(function(newTweet) {
        var found = false;
        seenTweets.forEach(function(seenTweet) {
          if (seenTweet.tweetID === newTweet.tweetID){
            found = true;
          }
        });
        return !found; //want the ones that are not found
      });

      
      processNewQueue();
    });

    request.fail(function(e1,e2) {
      console.log('errors messages? :', e1, e2);
    });
};



var processNewQueue = function () {
  if (enqueuedTweets.length === 0){
    return new Error('no tweets to process');
  }
  rerenderMainCard(enqueuedTweets.pop());
  console.log('processed some tweets');
}

var rerenderMainCard = function(singleTweet) {
  console.log("RENDERING : ", singleTweet);
  currentTweet.tweetID = singleTweet.tweetID;
  console.log(currentTweet.tweetID);
  $($('.profile-pic > img'))
    .attr('src', singleTweet.img);
  $($('#name > a'))
    .attr('href', singleTweet.twitterURL)
    .text(singleTweet['screen_name']);
  $($('.tweet')).text(singleTweet.tweetText);
  if (enqueuedTweets.length === 0){
    getSomeTweets();
  }
}


$('.like').on('mousedown', function(e){
  console.log('like', e);
  currentTweet.rating = true;
  seenTweets.push({
    tweetID : currentTweet.tweetID,
    rating : currentTweet.rating
  });
  clearCurrentTweet();
  rerenderMainCard(enqueuedTweets.pop());
})

$('.nolike').on('mousedown', function(e){
  console.log('nolike', e);
  currentTweet.rating = false;
  seenTweets.push({
    tweetID : currentTweet.tweetID,
    rating : currentTweet.rating
  });
  clearCurrentTweet();
  rerenderMainCard(enqueuedTweets.pop());
})

/**
 * Breaker
 */

console.log("Application Loaded!");
setTimeout(getSomeTweets,1000);