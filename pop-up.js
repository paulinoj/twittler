

   $(document).ready(function ()
   {


            
      $("section.tweets").on("click", "a", function (e)
      {
         ShowDialog($(this).data("user"));
         e.preventDefault();
      });

      $("#btnShowSimple").click(function (e)
      {
         ShowDialog(false);
         e.preventDefault();
      });


      $("#btnClose").click(function (e)
      {
         HideDialog();
         e.preventDefault();
      });

      $("#btnSubmit").click(function (e)
      {
         var brand = $("#brands input:radio:checked").val();
         $("#output").html("<b>Your favorite mobile brand: </b>" + brand);
         HideDialog();
         e.preventDefault();
      });

   });

   function ShowDialog(user)
   {
        $('body').css({overflow: 'hidden'});    
        postUserTweets(user);
//      $("div#dialog").html(user);
 //     var newNode = ($'<div>HELLO</div>');
//      $("#overlay").append(newNode);
   
      $("#overlay").show();
      $("#dialog").fadeIn(300);

      $("#overlay").click(function (e)
      {
         HideDialog();
      });
   

   }

   function HideDialog()
   {
      $("body").css({overflow: 'scroll'});
      $("#overlay").hide();
      $("#dialog").fadeOut(300);
   } 

  /*     
  function postUserTweets(user) {
//    updateRelativeTimes();

    var lastIndex = streams.users[user].length - 1;
    var index = 0;
    while(index <= lastIndex){
      var tweet = streams.users[user][index];
      var $tweet = $('<article></article>');
      $tweet.text(': ' + tweet.message);
      $tweet.addClass("tweet");

      var $user = $('<a></a>');
      $user.attr("href", "#");
      $user.text('@' + tweet.user);
      $user.addClass("user");
      $user.attr("data-user", tweet.user);
      $tweet.prepend($user);
      $('div#dialog').prepend($tweet);

      var $dateBlock = $('<div></div>');
      $dateBlock.addClass("date");
      $dateBlock.appendTo($tweet);

      var $date = $('<p></p>');
      var date = moment(tweet.created_at);
      $date.text(date.format('MMM Do YYYY, h:mm:ss a'));
      $date.appendTo($dateBlock);

      var $relativeDate = $('<p></p>');
      $relativeDate.text(date.fromNow());
      $relativeDate.appendTo($dateBlock);

      index += 1;

    }
  }
*/
        function postUserTweets(user) {


//          updateRelativeTimes();
          $('#userTweets').html("");

          var lastIndex = streams.users[user].length - 1;
          var index = 0;
          while(index <= lastIndex){
            var tweet = streams.users[user][index];
            var $tweet = $('<article></article>');

            $tweet.addClass("tweet");

            var $userLine = $('<p> - </p>');

            var $user = $('<a></a>');
            $user.attr("href", "#");
            $user.text('@' + tweet.user);
            $user.addClass("user");
            $user.attr("data-user", tweet.user);
            $userLine.prepend($user);
            $tweet.prepend($userLine);
//            $tweetSection.prepend($tweet);
            $('#userTweets').prepend($tweet);
            var $dateSpan = $('<span></span>');
            $dateSpan.addClass("date");
            $dateSpan.appendTo($userLine);

            var date = moment(tweet.created_at);
            $dateSpan.attr("data-date", date.format('MMM Do YYYY, h:mm:ss a'));
            $dateSpan.text(date.fromNow());
            $dateSpan.appendTo($userLine);


            var $textLine = $('<p></p>');
            $textLine.text(tweet.message);
            $tweet.append($textLine);

            index += 1;

          }

        }

