$(document).ready(function() {

   /*  $(".ba-menu-btn").on("click", function() {
        $(".ba-menu").toggle();
    }); */

  $(".ba-menu-btn").on("click", function() {
      $(".ba-menu").toggleClass("open");
      $(".ba-menu-btn i").toggleClass("fa-bars fa-times");
      $(this).toggleClass("pushed");
  });

  //$(".ba-louis").css("background-image")

  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href');
      let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
  });  
  // ===========  slider  ============  //
  $('.ba-modal-picture').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.ba-modal-picture__slider'
  });
  $('.ba-modal-picture__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.ba-modal-picture',
      dots: false,
      arrows: true,
      centerMode: false,
      focusOnSelect: true
  });
//  ===========================================================================  //

  $(".ba-gallery__img").on("click", function() {
    //$(".ba-modal-content-wrapper").append('<p>' + $(this).attr("src") + '</p>');
    let imgSrc = $(this).attr("src"),
        $modalImage = $("<img>");

    $modalImage.attr("src", imgSrc);

    $(".ba-modal-content-wrapper").append($modalImage);
    openModal();

  });

  let openModal = function() {
    $(".ba-modal").addClass("ba-modal--open");

    $("body").addClass("ba-modal-is-open");

    $(document).on("keydown", function(event) {

        if (event.keyCode == 27) {
            closeModal();
        }

    });
  };

  let closeModal = function() {
    $(".ba-modal").removeClass("ba-modal--open");
    $("body").removeClass("ba-modal-is-open");

    $(".ba-modal-content-wrapper").empty();

    $(document).off("keydown", closeModal);

  };

  $(".ba-modal-close").on("click", closeModal);

  $(".ba-modal").on("click", function(e) {
    //Сложный вариант
    /* let modalContent = $(".ba-modal-content");

    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        closeModal();
    } */

    console.log(e.target);

    if ( $(e.target).hasClass("ba-modal")) {
        closeModal();
    };
  });
//  ===========================================================================  //


});
//  ================ The End of function Ready  ===================//


var map;
function initMap() {
    let coordinates = {lat: 33.7822237, lng: -118.168492};
    let locationOffice = {lat: 33.7652079, lng: -118.1915281};

    map = new google.maps.Map(document.getElementById('map'), 
    {
        center: coordinates,
        zoom: 11.0,
        styles:[
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.business",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            }
          ],
          
    });

    var marker = new google.maps.Marker({
        position: locationOffice,
        map: map,
        icon: "images/PIN_1.png",
      });

}
