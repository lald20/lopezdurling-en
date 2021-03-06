$(document).ready(function () {

    "use strict";

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Intro Height  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    function introHeight() {
        var wh = $(window).height();
        $('#intro').css({height: wh});
    }

    introHeight();
    $(window).bind('resize',function () {
        //Update slider height on resize
        introHeight();
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* contact form init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#result").slideUp(300,function() {
            $('#result').hide();
            $('#submit')
                .attr('disabled','disabled');
            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    comments: $('#comments').val(),
                },
                function(data){
                    document.getElementById('result').innerHTML = data;
                    $('#result').slideDown('slow');
                    $('#submit').removeAttr('disabled');
                    if(data.match('success') != null) $('#contactform').slideUp('slow');
                }
            );

        });

        return false;

    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* click switched with touch for mobile  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    $('.gallery-inner img').bind('touchstart', function() {
        $(this).addClass('.gallery-inner  .captionWrapper');
    });

    $('.gallery-inner  img').bind('touchend', function() {
        $(this).removeClass('.gallery-inner  .captionWrapper');
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Parallax init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(function() {
            $('.captionWrapper.valign').css({
                top: '120px'
            });

            $('.parallaxLetter').css({
                display: 'none'
            });
        });


    }
    else{
        $(window).stellar({
            responsive: true,
            horizontalOffset: 0,
            horizontalScrolling:false
        });
    }

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* fitvids */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('body').fitVids();


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Isotope */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var $container = $('.gallery').imagesLoaded( function() {
        $container.isotope({
            // options
        });
    });


    $('#filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    $container.isotope({
        filter: '*' // IF YOU WANT TO DISPLAY AT FIRST ONLY ONE FILTER, FOR EXAMPLE DESIGNS: SUBSTIUTE '*' WITH '.designs'
    });


    //    masonry 3 columns
    $( function() {
        var $container2 = $('.blogPostsWrapper');
        // initialize Masonry after all images have loaded
        $container2.imagesLoaded(function () {
            $container2.isotope({
                itemSelector: '.blogPost',
                masonry: {
                    columnWidth: '.grid-sizer-blog-3'
                }
            });
        });
    });


    //    masonry 2 columns
    $( function() {
        var $container3 = $('.blogPostsWrapper2');
        // initialize Masonry after all images have loaded
        $container3.imagesLoaded(function () {
            $container3.isotope({
                itemSelector: '.blogPost2',
                masonry: {
                    columnWidth: '.grid-sizer-blog-2'
                }
            });
        });
    });




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* overlay portfolio */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $("a.overlay-ajax").click(function(){
        var url = $(this).attr("href");
        $(".overlay-section").load(url + ' #transmitter');
        $('.overlay-close img').tooltip();
        return false;
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* smoothscroll */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    smoothScroll.init({
        speed: 1000,
        offset: 70
    });



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* scrollreveal */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
    }

    else{
        window.scrollReveal = new scrollReveal();
    }


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* owl-carousels */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $("#owl-team").owlCarousel({
        singleItem:	true,
        autoPlay:	true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-4x'></i>",
            "<i class='fa fa-angle-right fa-4x'></i>"
        ]
    });



    $("#owl-clients").owlCarousel({
        items:4,
        navigation: false,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,3],
        itemsMobile : [479,2],
        autoPlay:	true
    });


    $("#owl-testimonials").owlCarousel({
        singleItem:	true,
        autoPlay:	true
    });


    $("#owl-item").owlCarousel({
        singleItem:	true,
        autoPlay:	true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-2x itemNav'></i>",
            "<i class='fa fa-angle-right fa-2x itemNav'></i>"
        ]
    });


    $("#owl-featured").owlCarousel({
        items:3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,2],
        itemsMobile : [479,1],
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-2x featuredNav'></i>",
            "<i class='fa fa-angle-right fa-2x featuredNav'></i>"
        ]
    });

    $("#owl-blog-single").owlCarousel({
        singleItem:	true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-2x blogNav'></i>",
            "<i class='fa fa-angle-right fa-2x blogNav'></i>"
        ]
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* timers */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#text-separator-timers').waypoint(function() {
        "use strict";
        // first timer
        $('.timer1').countTo({

            from: 0, // the number you want to start
            to: 8679, // the number you want to reach
            speed: 4000,
            refreshInterval: 100

        });

        // second timer
        $('.timer2').countTo({

            from: 0,// the number you want to start
            to: 340,// the number you want to reach
            speed: 2500,
            refreshInterval: 50

        });


        // third timer
        $('.timer3').countTo({

            from: 0,// the number you want to start
            to: 100,// the number you want to reach
            speed: 2000,
            refreshInterval: 10
        });


        // fourth timer
        $('.timer4').countTo({

            from: 0,// the number you want to start
            to: 3456,// the number you want to reach
            speed: 4000,
            refreshInterval: 10,


        });


    }, { offset: 500 });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* shortcodes */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $('#myTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show');
    });

    $('#myTabPills a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

//
//    $('.collapse').collapse();

  /*
  PAYMENT FORM LOGIC
  */
  var $payment_success_message = $("#payment_success")
  var $payment_failure_message = $("#payment_failure")
  var $payment_button = $("#paymentForm #submit")
  var $spinner_box = $("#spinner")

  $payment_button.click(function(e){

    // Shows the corresponding alert message
    var message_listener = function($alert_box, text){
      $payment_button.show()
      $alert_box.show();
      $spinner_box.hide('fast');
      if (text){
        $alert_box.find(".feedback").text(text)
      } else {
        $alert_box.find(".feedback").text('')
      }
    }

    $payment_success_message.hide()
    $payment_failure_message.hide()
    $payment_button.hide()
    $spinner_box.show('fast');

    var params = {
      "ccn":$("#ccn").val(),
      "cvv2":$("#cvv2").val(),
      "expiration":$("#expiration").val(),
      "amount":$("#amount").val(),
      "name": $("#name").val(),
      "address":$("#address").val(),
      "email": $("#email").val(),
      "city":$("#city").val(),
      "country": $("#country").val()
    }

    // Must accept terms of service
    if(!document.getElementById("checkbox_accept_tos").checked){
      var text = "Debe aceptar los Términos del Servicio"
      alert(text)
      message_listener($payment_failure_message, text)
      return
    }

    // Fast fail if it has no "proforma" value
    if(!$("#proforma").val()){
      message_listener($payment_failure_message, "Por favor escriba un número de proforma")
      return
    }

    var backend_url = "https://kxi4h3cy99.execute-api.us-east-1.amazonaws.com/prod/lopezdurling"
      + "?proforma=" + $("#proforma").val()

    $.ajax({
      url: backend_url,
      method: "post",
      data: JSON.stringify(params),
      crossDomain: true,
      processData: false,
      dataType: "json",
      contentType:"application/json"
    })
      .done(function(msg){
        // If the message has no ballot number, then it failed
        if (msg.ballot && msg.response_code == "00"){
          message_listener($payment_success_message, msg.response_message)
        } else {
          message_listener($payment_failure_message,
            '. Codigo: ' + msg.response_code + ". " + msg.response_message
          )
        }
      })
      .fail(function(msg){
        message_listener($payment_failure_message, msg.response_message)
      })
  })


});
