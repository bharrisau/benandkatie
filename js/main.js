/*
    Name: Mountain
    Description: Responsive Coming Soon Page
    Version: 1.1
    Author: MountainTheme

    TABLE OF CONTENTS
    ---------------------------
     1. Loading
     2. Scroll Reveal
     3. Smooth scroll
     4. Backstretch Image Background
         4.1 Backstretch Slideshow Background
     5. Countdown
     6. Contact form 
     7. Ajax mailchimp
     8. Player Youtube Controls
*/


/* ================================= */
/* :::::::::: 1. Loading ::::::::::: */
/* ================================= */

 
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".player").hide();
    $(".player-controls").hide();
  } 

$(window).load(function() {

    $(".loader-item").delay(500).fadeOut();
    $("#page-loader").delay(700).fadeOut("slow");
 
    setTimeout(function() {
    $(".title").delay(1000).css({display: 'none'}).fadeIn(1000);
    $(".arrow").delay(1000).css({display: 'none'}).fadeIn(1000);
    });


});


/* ================================= */
/* :::::::: 2. Scroll Reveal ::::::: */
/* ================================= */

     (function($) {

        'use strict';

        window.sr= new scrollReveal({
          reset: true,
          move: '10px',
          mobile: false
        });

      })();

/* ================================= */
/* :::::::: 3. Smooth scroll ::::::: */
/* ================================= */

 smoothScroll.init();


/* ================================= */
/* ::::::::: 4. Backstretch :::::::: */
/* ================================= */

/* Active Single Image Background  */  
  
 $("#top").backstretch("images/background2.jpg");

// ==== SLIDESHOW BACKGROUND ====
// Set URLs to background images inside the array
// Each image must be on its own line, inbetween speech marks (" ") and with a comma at the end of the line
// Add / remove images by changing the number of lines below
// Variable fade = transition speed for fade animation, in milliseconds
// Variable duration = time each slide is shown for, in milliseconds
          

 /* ↓ Remove comments if you want to use the slideshow  ↓  */ 

   /*$("#top").backstretch([
        "images/background1.jpg", 
        "images/background2.jpg", 
        "images/background3.jpg", 
        "images/background4.jpg"
    ],{duration: 3000, fade: 750});  */ 


/* ================================= */
/* :::::::::: 5. Countdown ::::::::: */
/* ================================= */


    // To change date, simply edit: var endDate = "Dec 01, 2015 20:39:00";

   $(function() {
   var endDate = "Dec 01, 2015 20:39:00";
  $('.countdown').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div>"  + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hours</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>minutes</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>seconds</span></div>");
          }
        });
   });

/* ================================= */
/* :::::::: 6. Contact form :::::::: */
/* ================================= */

$(function(){
      $('#contact-button').click(function() {  
           // validate and process form here 
           $("#ajax-contact-form").validate({
             
                  rules:{

                        name:{
                            required: true,
                        },

                        email:{
                            required: true,
                            email: true,
                        },

                        msg:{
                            required: true,
                        },
                   },

                   messages:{

                         name:{
                            required: "<i class='fa fa-exclamation-triangle'></i>",
                        },

                        email:{
                            required: "<i class='fa fa-exclamation-triangle'></i>",
                            email: "<i class='fa fa-exclamation-triangle'></i>",
                        },

                          msg:{
                            required: "<i class='fa fa-exclamation-triangle'></i>",
                        },

                   },

                // JQuery's awesome submit handler.
                submitHandler: function(form) {

                     // Create variables from the form
                     var name = $('input#name').val(); 
                     var email = $('input#email').val();  
                     var msg = $('textarea#msg').val();

                     // Create variables that will be sent in a URL string to contact.php
                     var dataString = '&name='+ name + '&email=' + email + '&msg=' + msg;
        
                        $.ajax({
                            type: "POST",
                            url: "php/contact.php",
                            data: dataString,
                            success: function(data) {
                                  if(data === 'OK') { $("#ajax-contact-form").find('input[type=text], input[type=email], textarea').val(""); } 
                                  if(data == 'OK') {
                                    result = '<div class="notification_ok"><i class="fa fa-check"></i> Your email was sent. Thanks!</div>';
                                   
                                  } else {
                                  result = data;
                                 }
                          $('#note').html(result);
           
                          }
                         
                      });
                     return false;
               }
          });
    });
});


/* ================================= */
/* :::::::: 7. Ajax mailchimp :::::: */
/* ================================= */

    // Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    $('#subscribe').ajaxChimp({
      language: 'eng',
      url: 'http://stevedogs.us9.list-manage.com/subscribe/post?u=df0aa2ea10f32337b29b342d4&id=41ddc569b4'
    });

    // Mailchimp translation
    //
    // Defaults:
    //'submit': 'Submitting...',
    //  0: 'We have sent you a confirmation email',
    //  1: 'Please enter a value',
    //  2: 'An email address must contain a single @',
    //  3: 'The domain portion of the email address is invalid (the portion after the @: )',
    //  4: 'The username portion of the email address is invalid (the portion before the @: )',
    //  5: 'This email address looks fake or invalid. Please enter a real email address'

    $.ajaxChimp.translations.eng = {
      'submit': 'Submitting...',
      0: '<i class="fa fa-check"></i> We will be in touch soon!',
      1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
      2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
      5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
    }

/* ================================= */
/* :: 8. Player Youtube Controls ::  */
/* ================================= */
    
    $(function(){
      $(".player").mb_YTPlayer();
    });

   // player controls
    $('#play').on( "click", function(){
          $('.player').playYTP()

    });

  $('#pause').on( "click", function(){
          $('.player').pauseYTP()

    });


