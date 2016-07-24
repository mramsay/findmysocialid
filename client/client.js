// typeahead = new Mongo.Collection("typeahead");
apiAccounts = new Mongo.Collection("maapiAccountsin");
BigCollection = new Meteor.Collection('bigcollection');
BigTypeaheadCollection = new Meteor.Collection('typeahead');

//Typeahead Helper Template
Template.typeaheadTemplate.helpers({
    search: function(query, sync, callback) {
      Meteor.call('search', query, {}, function(err, res) {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res);
        callback(res.map(function(v){ return {value: v.name};}));
      });
    }
  });

//Meteor Startup Stuff
Meteor.startup(function() {
  if(Meteor.isClient){
      return SEO.config({
        title: 'Find your Facebook, YouTube, Instagram, or Twitter ID',
        meta: {
          'description': 'Easily retrieve your Facebook, YouTube, Instagram, or Twitter ID.'
        },
        og: {
          'image': '/favicons/apple-touch-icon-120x120.png?v=2'
        }
      });
    }

  //prerenderio serch SEO authentication and injection
  prerenderio.set('prerenderToken', 'jkLknHHhARpdi1hinyz4');

  //meteor typeahead injection
  Meteor.typeahead.inject();
  WebFontConfig = {
    google: { families: [ 'Roboto Slab:700,400:latin', 'Oswald:400', 'Mouse Memoirs' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
});

//Spinner Package Options
Meteor.Spinner.options = {
    lines: 10, // The number of lines to draw
    length: 4, // The length of each line
    width: 2, // The line thickness
    radius: 4, // The radius of the inner circle
    corners: 0.6, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#FFFFFF', // #rgb or #rrggbb
    speed: 2, // Rounds per second
    trail: 20, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: true, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    top: 'auto', // Top position relative to parent in px
    left: 'auto' // Left position relative to parent in px
};

//Typeahead rendered helper
Template.typeaheadTemplate.rendered = function() {
    Meteor.typeahead.inject();
};

//rendered body
Template.body.rendered = function() {
  $('head').append('<script type="text/javascript" src="/js/5jquery.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/2bootstrap.min.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/3jquery.easing.min.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/4jquery.fittext.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/6wow.min.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/9creative.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/7cbpAnimatedHeader.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/8classie.js"></script>');
  $('head').append('<script type="text/javascript" src="/js/1bootstrap.js" ></script>');
  $('head').append('<script type="text/javascript" src="/js/loadingContainer.js" ></script>');
  $('head').append('<script type="text/javascript" src="/js/rotatingExamples.js" ></script>');
  $('head').append('<script type="text/javascript" src="/js/10stars.js" ></script>');
  $('head').append('<script type="text/javascript" src="/js/11fadein.js" ></script>');
  $('head').append('<script type="text/javascript" src="/js/12centermodal.js" ></script>');
  $('head').append('<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png?v=2">');
  $('head').append('<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png?v=2">');
  $('head').append('<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png?v=2">');
  $('head').append('<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png?v=2">');
  $('head').append('<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png?v=2">');
  $('head').append('<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png?v=2">');
  $('head').append('<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png?v=2">');
  $('head').append('<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png?v=2">');
  $('head').append('<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png?v=2">');
  $('head').append('<link rel="icon" type="image/png" href="/favicons/favicon-32x32.png?v=2" sizes="32x32">');
  $('head').append('<link rel="icon" type="image/png" href="/favicons/favicon-194x194.png?v=2" sizes="194x194">');
  $('head').append('<link rel="icon" type="image/png" href="/favicons/favicon-96x96.png?v=2" sizes="96x96">');
  $('head').append('<link rel="icon" type="image/png" href="/favicons/android-chrome-192x192.png?v=2" sizes="192x192">');
  $('head').append('<link rel="icon" type="image/png" href="/favicons/favicon-16x16.png?v=2" sizes="16x16">');
  $('head').append('<link rel="manifest" href="/favicons/manifest.json">');
  $('head').append('<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5">');
  $('head').append('<meta name="fragment" content="!">');
  $('head').append('<!-- start Mixpanel --><script type="text/javascript">(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);mixpanel.init("9718a7a0b85b9d28bc9486b82eba2d8b");</script><!-- end Mixpanel -->');
  $('head').append('<meta name="description" content="Find your alphanumeric or numeric YouTube, Vine, Instagram, Twitter or Facebook ID for admins, social plugins, and more"/>')
};

  //Helper template that returns client data to the html/
  Template.resultModal.helpers({
    text: function () { return Session.get('myMethodResult')},
    avatarPath: function () { return "modalImages/facebook.png" + this.avatar}



  });

  Template.resultModal.rendered = function() {
  $('#resultModal').val('');

    if (Session.equals('platformType','youtube')) {
      $('#bodytest').addClass('modal-youtube');
      $('#imageid').append('<img class="socialImage" src="/youtube.png" height="70" width="70"/>');

    };
    if (Session.equals('platformType','facebook')) {
      $('#bodytest').addClass('modal-facebook');
      $('#imageid').append('<img class="socialImage" src="/facebook.png" height="70" width="70"/>');
    };
    if (Session.equals('platformType','vine')) {
      $('#bodytest').addClass('modal-vine');
      $('#imageid').append('<img class="socialImage" src="/vine.png" height="70" width="70"/>');
    };
    if (Session.equals('platformType','instagram')) {
      $('#bodytest').addClass('modal-instagram');
      $('#imageid').append('<img class="socialImage" src="/instagram.png" height="70" width="70"/>');
    };
    if (Session.equals('platformType','twitter')) {
      $('#bodytest').addClass('modal-twitter');
      // $('#bodytest').addClass('test3');
      $('#imageid').append('<img class="socialImage" src="/twitter.png" height="70" width="70"/>');
      // $('#test3').append('<h2 class="test3"/>');
    };
  };

Template.resultModal.jobsLoaded = function () {
  return Session.equals('jobsLoaded', true);
};

 Template.body.events({

//when form is submitted, it triggers a function that takes in the value of the form.
"submit .new-task": function (event) {
  // Session.set('userSubReady', 'userSubReady');
  // Session.set('jobsLoaded', true);

  // Prevent default browser form submit
  event.preventDefault();

  Meteor.call('getIPLocation', function(error, result){
    if (error) {
      console.log(error);
    }
    else {
      console.log(result);
    }
  });

    //creating a variable that holds the value of whatever is inputted into the form
    // var textInput = event.target.text.value;
    var textInput = $(event.target).find('[name=search]').val().toLowerCase()
    // var textInput = textInput.toLowerCase();
    console.log(textInput)
    //snagging the ip address of the session user

    //insert the variable into the API collection

    if (textInput.indexOf("youtube.com") !== -1) {
        Session.set('platformType',"youtube")

        if (textInput.indexOf("watch?v") !== -1) {

          var re = /(.*)((youtube.com\/)|(user\/)|(channel\/))(\w*)(\?v=*)(.*)/;
          Session.set('jobsLoaded', false);
          var usernames = re.exec(textInput);
          var username = usernames[8];
          username3 = username
          Session.set('myMethodResult', username3);

          setTimeout(function(){Modal.show('resultModal')}, 500)
          Session.set('jobsLoaded', true);
        }

        else {
          setTimeout(function(){ Modal.show('resultModal') }, 500)
            Session.set('jobsLoaded', false);
            //invoke the server method, passing textInput to sever also, note there is a call back
            Meteor.call('getYoutubeID', textInput, function(error, results) {
            Session.set('myMethodResult', results);
            Session.set('jobsLoaded', true);
            // Session.set('jobsLoaded', false);

           });
        }
     }

    if (textInput.indexOf("facebook.com") !== -1) {
      Session.set('platformType',"facebook")
      setTimeout(function(){
          ;    Modal.show('resultModal');
          }, 500)
      Session.set('jobsLoaded', false);
      if (!textInput.match(/^[a-zA-Z]+:\/{2}/)){           /// \/\// doesn't work replaced with two slashes {2} repetition
            textInput = 'https://' + textInput;
        }
      Meteor.call('getFacebookID',textInput, function(error, results) {
      Session.set('myMethodResult', results);
      Session.set('jobsLoaded', true);
     });
    }

    // if (textInput.indexOf("instagram.com") !== -1) {
    //   Session.set('platformType',"instagram")
    //   setTimeout(function(){
    //       ;    Modal.show('resultModal');
    //       }, 500)
    //   Session.set('jobsLoaded', false);
    //   if (!textInput.match(/^[a-zA-Z]+:\/{2}/)){           /// \/\// doesn't work replaced with two slashes {2} repetition
    //         textInput = 'https://' + textInput;
    //     }
    //   Meteor.call('getInstagramID',textInput, function(error, results) {
    //   Session.set('myMethodResult', results);
    //   Session.set('jobsLoaded', true);
    //  });
    // }


    if (textInput.indexOf("twitter.com") !== -1) {
      Session.set('platformType',"twitter")
      setTimeout(function(){
          ;    Modal.show('resultModal');
          }, 500)
      Session.set('jobsLoaded', false);
      if (!textInput.match(/^[a-zA-Z]+:\/{2}/)){           /// \/\// doesn't work replaced with two slashes {2} repetition
            textInput = 'https://' + textInput;
        }
      Meteor.call('getTwitterID',textInput, function(error, results) {
      Session.set('myMethodResult', results);
      Session.set('jobsLoaded', true);
     });
    }

    if (textInput.indexOf("vine.") !== -1) {
      Session.set('platformType',"vine")
      setTimeout(function(){
          ;    Modal.show('resultModal');
          }, 500)
      Session.set('jobsLoaded', false);
      if (!textInput.match(/^[a-zA-Z]+:\/{2}/)){           /// \/\// doesn't work replaced with two slashes {2} repetition
            textInput = 'https://' + textInput;
        }
      Meteor.call('getVineID',textInput, function(error, results) {
      Session.set('myMethodResult', results);
      Session.set('jobsLoaded', true);
     });
    }
    //
    // if (textInput.indexOf("youtube.com") && textInput.indexOf("?v=")!== -1) {
    //   Session.set('myMethodResult', "That looks like a video, support for videos is in the works!");
    // }

    if (textInput.indexOf("tinyurl") !== -1) {
      Session.set('myMethodResult', "Sorry, tiny URLs are not currently supported!");
    }

    if (textInput.indexOf("bit.ly") !== -1) {
      Session.set('myMethodResult', "Sorry, bit.ly links are not currently supported!");
    }

    // if (textInput == "vine.co" || textInput == "vine.com" || textInput == "https://vine.com") {
    //   Session.set('myMethodResult', "please enter a valid URL");
    // }

    if (textInput.indexOf(".com") === -1) {
      //remove the https:// that was appended above

      var res = textInput.slice(8);
      Session.set('myMethodResult', "Oops, it doesn't look like " + res + " is a valid URL");
    }
    if (!textInput.value) {
      Session.set('myMethodResult', "Oops, it doesn't look l");
    }

},

"click #about": function() {
    document.getElementById('scrollButton').submit();
}
     });

$(function () {
    // your jQuery code here...
   $(document).ready(function() {
     setInterval(function() {
       $('.btn').animate( { backgroundColor: 'blue' }, 300)
       .animate( { backgroundColor: 'green' }, 300);
     }, 1000);



 });
});
