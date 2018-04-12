require("dotenv").config();
var Twitter =require("twitter");
// var spotify = require("spotify");
// var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");

tweetsArray = [];
var thirdInput = process.argv[2];
var forthInput = process.argv[3];






 
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
  //-----------------------------------------------------------------
  function commandProcess(thirdInput,forthInput){
if (thirdInput==="my-tweets"){
    getTweets();
}

  }
 //---------------------------------------------------------------

 function getTweets(){
var params = {screen_name: 'Gaghusoon',count:20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    console.log(response);
  }

});
 };