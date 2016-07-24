// apiAccounts = new Mongo.Collection("apiAccounts");
BigCollection = new Meteor.Collection('bigcollection');
// typeahead = new Mongo.Collection("typeahead");
BigTypeaheadCollection = new Meteor.Collection('typeahead');


// prerenderio.set('prerenderServiceUrl', 'http://localhost:3000/');
// prerenderio.set('prerenderToken', 'jkLknHHhARpdi1hinyz4');

 Meteor.startup(function() {
    BigCollection._ensureIndex({name: 1});
    BigTypeaheadCollection._ensureIndex({name: 1});
    // typeahead._ensureIndex({Name: 1});         // index by Name
  });
// apiAccounts.allow({
//   insert: function(userId, doc) {
//     // only allow posting if you are logged in
//     return !! userId;
//   }
// });
Meteor.methods({

  'getIPLocation': function(){
      console.log("getIPLocation ran");
       var ip = this.connection.clientAddress;
       console.log("clientAddress " + ip);
       return ip;
   },

  // YouTube API Function
  'getYoutubeID': function (textInput) {
    console.log(textInput);
      // check(username, String);
      var re = /(.*)((youtube.com\/)|(user\/)|(channel\/))(\w*)/;
      if (textInput.indexOf("youtube.com") !== -1) {
      // var subst = "\6"
      // var username = textInput.replace(re, subst)
      // var ip = this.connection.clientAddress;
      // console.log(ip);

      var usernames = re.exec(textInput);
      var username = usernames[6];
      console.log("YouTube Username = " + username);
      var youtubeRequest = "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyBcGqDvEvvzMl6FqfNRBGicEnDF_Jt9gZo&part=id&forUsername="+username;

      //This is where you need to add a check to see if its already in the database
      //IF in DB, return value, ELSE make http request to YouTube API, store value, return value.

      try {
        //make a request to the youtubeID
        var result = Meteor.http.get(youtubeRequest, {timeout:30000});
        var respJson = JSON.parse(result.content);

        // if (respJson['pageInfo']['totalResults'] === 0) { return "could not retrieve YouTube ID Via API"; }
        if (respJson.pageInfo.totalResults === 0) {
          return "could not retrieve YouTube ID Via API";
        } else {
          youtubeID = respJson.items[0].id;
          console.log("YouTube ID from API = " + youtubeID);
          // apiAccounts.insert({
          //     youtubeUrl: textInput,
          //     youtubeUsername: username,
          //     youtubeUID: youtubeID,
          //     createdAt: new Date() // current time
          //   });
          console.log("______________________________");
          // console.log("YouTube ID Added to Database is " + apiAccounts.find().sort({_id:1}));
          return youtubeID;
        }

      }
      catch (e) {
        // something bad happened
        return e;
      }
    } else {
      return "Oops, that doesn't appear to be a valid YouTube URL";
    }
  },

  // Facebook API Function
  'getFacebookID' : function (textInput) {
    console.log(textInput);
    FBGraph.setAccessToken('CAACgSPeiwU0BANZBva5GqX1PsDFjlv2LL5REPw1szUNWYQaxXKrjZACfTXARI1YSfA3cQtadlZCs8VoZC1JMZBLJ9Fjm8gE079yUUyQXG8ZCbiaVAx68ox8WgyJSFobhHmzjLciz7ZAGSxNDlOBsf3vM9CJ2lECSgUDvKFfw5sK2qyO8tZBYq0lvfGQuCwa4sAoZD');
    Future = Npm.require('fibers/future');
    var fbFuture = new Future();
    var re = /(.*)((facebook.com\/)|(user\/)|(channel\/))(\w*)/;
    var usernames = re.exec(textInput);
    var username = usernames[6];
    console.log("Facebook Username = " + username);

      try {
        FBGraph.get(username, function(err, res, body) {
          console.log("The following error was returned: " + err);

          if (err) {
            req = request.defaults({
              jar: true,                 // save cookies to jar
              rejectUnauthorized: false,
              followAllRedirects: true   // allow redirections
            });

            // scrape the page
            req.get({
                url: textInput,
                headers: {
                  'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
                  'Content-Type' : 'application/x-www-form-urlencoded'
                 }
              }, function(err, resp, body) {
              console.log("Running Facebook Scrape Method");

              //insert some form of error handing in here
              var totalSource = cheerio.load(body);
              fbSource = totalSource.html();
              var regularExp = /"entity_id":"([0-9]+)"/;
              var IDArr = regularExp.exec(fbSource);
              if (IDArr !== null) {
                var facebookIDREG = IDArr[1];
                console.log("Facebook Scraped ID = " + facebookIDREG);
                console.log("______________________________");
                fbFuture.return(facebookIDREG);
              }
              else {
                fbFuture.return("Error");
              }
            });

          }

          else {
            console.log("Facebook ID from Page (API)");
            facebookID = res.id;
            console.log("Facebook ID from API = " + facebookID);
            console.log("______________________________");
            fbFuture.return(facebookID);
          }

        });
        return fbFuture.wait();
        }

            catch (e) {
            console.log(e);
            console.log("celeryCats");
            return e;
            }
  },

  'getInstagramID' : function (textInput) {
    Future = Npm.require('fibers/future');
    var igFuture = new Future();
    // var re = /(?:(?:http|https):\/\/)?(?:www.)?(?:vine.co|vine.com)\/([A-Za-z0-9-_]+)\/([A-Za-z0-9-_]+)/igm;
    var re = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am)\/([A-Za-z0-9-_]+)/igm;
    var usernames = re.exec(textInput);
    var username = usernames[1];
    console.log("Instagram Username = " + username);

    try {
      req = request.defaults({
            jar: true,                 // save cookies to jar
            rejectUnauthorized: false,
            followAllRedirects: true   // allow redirections
          });
          req.get({
            url: textInput,
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
              'Content-Type' : 'application/x-www-form-urlencoded'
             }
              }, function(err, resp, body) {
                    console.log("Running Instagram Scrape Method");

                    //insert some form of error handing in here
                    var totalSource = cheerio.load(body);
                    igSource = totalSource.html();
                    // console.log(igSource);
                    if (igSource.indexOf("Sorry, this page") === -1) {
                      console.log("Page Exists");

                    try {
                      var regularExp = /("owner":{)"id":"([0-9]+)"/;
                      var IDArr = regularExp.exec(igSource);
                      var instagramIDREG = IDArr[2];
                      console.log("Instagram No Block Scraped ID = " + instagramIDREG);
                      console.log("______________________________");
                      igFuture.return(instagramIDREG);

                    } catch (err) {
                      if (err.name === 'TypeError')
                      {
                        var regularExp = /("id":)"([0-9]+)"/;
                        var IDArr = regularExp.exec(igSource);
                        var instagramIDREG = IDArr[2];
                        console.log("Instagram Block Scraped ID = " + instagramIDREG);
                        console.log("______________________________");
                        igFuture.return(instagramIDREG);
                      }
                      else
                      {
                        var returnValue = "could not retrieve ID from API"
                        igFuture.return(returnValue);
                      }
                    }
                  }
          });

            return igFuture.wait();
    } catch (e) {
      return "could not retrieve ID from API";
    }


  },

  // Vine API Function
  'getVineID' : function (textInput) {
    Future = Npm.require('fibers/future');
    var vnFuture = new Future();
    // var re = /(?:(?:http|https):\/\/)?(?:www.)?(?:vine.co|vine.com)\/([A-Za-z0-9-_]+)\/([A-Za-z0-9-_]+)/igm;
    var re = /(?:(?:http|https):\/\/)?(?:www.)?(?:vine.co|vine.com)\/([A-Za-z0-9-_.]+)/igm;
    var usernames = re.exec(textInput);
    var username = usernames[1];
    console.log("Vine Username = " + username);


        req = request.defaults({
              jar: true,                 // save cookies to jar
              rejectUnauthorized: false,
              followAllRedirects: true   // allow redirections
            });
            req.get({
              url: textInput,
              headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36',
                'Content-Type' : 'application/x-www-form-urlencoded'
               }
                }, function(err, resp, body) {
                      console.log("Running Vine Scrape Method");

                      //insert some form of error handing in here
                      var totalSource = cheerio.load(body);
                      vnSource = totalSource.html();
                      var regularExp = /(.*)((co.vine.android\/)|(user\/)|(user-id\/))(\w*)/;
                      var IDArr = regularExp.exec(vnSource);

                        var vineIDREG = IDArr[6];
                        console.log("Vine Scraped ID = " + vineIDREG);
                        console.log("______________________________");
                        vnFuture.return(vineIDREG);

            });

              return vnFuture.wait();
  },

  // Twitter API Function
  'getTwitterID' : function (textInput) {
    Twit = new TwitMaker({
    consumer_key:         'mgEoqMWbQ9WYmAJeRkVMceF9K',
    consumer_secret:      'Nt0XgSqIvxgPUwKjqd6Ty6NOSHXpNoyQRZ5XkdqUIgGQTsNWzQ',
    access_token:         '3311265764-UGg9VGGP78g4hDABRHd2Sduijsn2j7QBEqTdiAl',
    access_token_secret:  'c4NnTyBIEIjo3hJ5zzYxYOSGr0L0L4ScgMLiZ8g5pTeEX',
    //twitter scrape regex = /(data-user-id=)"([0-9]+)"/
    });
    Future = Npm.require('fibers/future');
    var TFuture = new Future();
    var re = /(.*)((twitter.com\/)|(u\/)|(channel\/))(\w*)/;
    var usernames = re.exec(textInput);
    var username = usernames[6];
    console.log("Twitter Username = " + username);

    try {
        Twit.get('users/show', { screen_name: username},  function (err, data, response) {

          if (err){
            console.log("The following error was returned: " + err);
            TFuture.return(err);
          }
          else {
            var twitterID = data.id;
            TFuture.return(twitterID);
            console.log("Response Code = " + response.statusCode);
            console.log("Twitter ID = " + twitterID);
            console.log("______________________________");
          }
        });
        return TFuture.wait();
    }
    catch (e) {
      return e;
    }
  },
});
