//=======================  START of function Ready =======================//
$(document).ready(function() {

  $(".ba-menu-btn").on("click", function() {
      $(".ba-menu").toggleClass("open");
      $(".ba-menu-btn i").toggleClass("fa-bars fa-times");
      $(this).toggleClass("pushed");
  });

  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      let id  = $(this).attr('href');
      let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
  });
//  ========================  Фильтр Projects  ==============================  //

    $("#showAll").on("click", function() {
      $("#grid-list").removeClass();
      $("#grid-list").addClass("ba-projects-grid--all");
    });

    $("#showHouse").on("click", function() {
      $("#grid-list").removeClass();
      $("#grid-list").addClass("ba-projects-grid--house");
    });

    $("#showCommercial").on("click", function() {
      $("#grid-list").removeClass();
      $("#grid-list").addClass("ba-projects-grid--commercial");
    });

    $("#showPersonal").on("click", function() {
      $("#grid-list").removeClass();
      $("#grid-list").addClass("ba-projects-grid--personal");
    });

    $("#showStudioLab").on("click", function() {
      $("#grid-list").removeClass();
      $("#grid-list").addClass("ba-projects-grid--studio-lab");
    });


//  ========================  Счетчик Like  ==============================  //
function numberOfLikes(projectName) {
  let likesCountText = $(`.${projectName} .ba-heart__counter`).text();
  let likesCountArray = likesCountText.split(" ");
  let likesCountNumber = +likesCountArray[1];
  return likesCountNumber;
}
const likesFondue = numberOfLikes("ba-fondue");
const likesPotter = numberOfLikes("ba-potter");
const likesLouis = numberOfLikes("ba-louis");
const likesP22 = numberOfLikes("ba-p22");
const likesTabano = numberOfLikes("ba-tabano");
const likesSesann = numberOfLikes("ba-sesann");
const likesAlessi = numberOfLikes("ba-alessi");
const likesFiji = numberOfLikes("ba-fiji");

console.log(likesFondue);


//  =================  Функция поиска имени проекта  ====================  //



//  ========================  Кнопка Like  ==============================  //

$(".ba-heart__btn").on("click", function() {

  let projectsName = "ba-" + $(this).closest("div[id]").attr("id");
  console.log("Секция projects:", projectsName);

  /* if (projectsName === 'ba-button-wrapper') {
      projectsName = $(this).parent().parent().parent().attr("class");
  } */

  let buttonHeart = `.${projectsName} .ba-heart__btn > i`;
  //console.log("buttonHeart:", buttonHeart);
  $(buttonHeart).toggleClass("far fas");
  $(buttonHeart).toggleClass("ba-heart__btn_red");

  let likedHeartPlus = numberOfLikes(projectsName);
  let likedHeartMinus;
  switch (projectsName) {
    case "ba-fondue":
      likedHeartMinus = likesFondue;
      break;
    case "ba-potter":
      likedHeartMinus = likesPotter;
      break;
    case "ba-louis":
      likedHeartMinus = likesLouis;
      break;
    case "ba-p22":
      likedHeartMinus = likesP22;
      break;
    case "ba-tabano":
      likedHeartMinus = likesTabano;
      break;
    case "ba-sesann":
      likedHeartMinus = likesSesann;
      break;
    case "ba-alessi":
      likedHeartMinus = likesAlessi;
      break;
    case "ba-fiji":
      likedHeartMinus = likesFiji;
      break;
  }
  likedHeartPlus++;
  //console.log("likedHeartPlus: ", likedHeartPlus);
  //console.log("likedHeartMinus: ", likedHeartMinus);
  if (likedHeartPlus - likedHeartMinus == 1) {
    $(`.${projectsName} .ba-heart__counter`).html("<span>+</span> " + likedHeartPlus);
  } else {
    $(`.${projectsName} .ba-heart__counter`).html("<span>+</span> " + likedHeartMinus);
  }
});


//  ======================  Кнопка View project  =========================  //

  $(".ba-view__btn").on("click", function() {
    //$(".ba-modal-content-wrapper").append('<p>' + $(this).attr("src") + '</p>');
    
   /*  let imgSrc = $(this).attr("src"),
        $modalImage = $("<img>");
    $modalImage.attr("src", imgSrc);
    $(".ba-modal-content-wrapper").append($modalImage); */
    
    openModal();
    
    $(".ba-modal-picture").not(".slick-initialized").slick();
    $(".ba-modal-picture").slick("refresh");
    $(".ba-modal-picture__slider").not(".slick-initialized").slick();
    $(".ba-modal-picture__slider").slick("refresh");


    let projectsName = "ba-" + $(this).closest("div[id]").attr("id");
    console.log("Секция projects:", projectsName);

    /* if (projectsName === 'ba-button-wrapper') {
        projectsName = $(this).parent().parent().parent().attr("class");
    } */

    let projectsNameInfo = "." + projectsName + "__info";
    console.log("Имя__info:", projectsNameInfo);

    let projectsTitle = $(projectsNameInfo).children(".ba-projects__title").text();
    console.log("Заголовок:", projectsTitle);

    $(".ba-modal__info").children(".ba-modal__title").text(projectsTitle);

    let projectsList = $(projectsNameInfo).children(".ba-projects__list").children();
    console.log("Массив__list:", projectsList);//массив
    
    $(projectsList).clone().appendTo(".ba-modal__list");

    let projectsText1 = $(projectsNameInfo).children(".ba-projects__text_p1").text();
    $(".ba-modal__text_p1").text(projectsText1);

    let projectsText2 = $(projectsNameInfo).children(".ba-projects__text_p2").text();
    $(".ba-modal__text_p2").text(projectsText2);
    
    let pictureList = document.querySelectorAll(".ba-modal-picture__item");
    //console.log("pictureList:", pictureList);
    console.log("pictureList.length: ", pictureList.length);

    let modalPicture = [];
    let index = 3;
    for (let i = 0; i < pictureList.length; i++) {
      modalPicture[i] = document.createElement("img");
      $(modalPicture[i]).attr("src", `images/${projectsName}/${projectsName}-${index%5}.jpg`);
      $(modalPicture[i]).addClass("ba-modal-picture__img ba-img");
      $(modalPicture[i]).attr("alt", projectsName);
      //console.log(modalPicture[i]);
      pictureList[i].appendChild(modalPicture[i]);
      index++;
    }

    let pictureListLarge = document.querySelectorAll(".ba-modal-picture__item_large");
    console.log("pictureListLarge.length:", pictureListLarge.length);

    let modalPictureLarge = [];
    for (let i = 0; i < pictureListLarge.length; i++) {
      modalPictureLarge[i] = document.createElement("img");
      $(modalPictureLarge[i]).attr("src", `images/${projectsName}/${projectsName}-${i%5}.jpg`);
      $(modalPictureLarge[i]).addClass("ba-modal-picture__img ba-modal-picture__img_large");
      $(modalPictureLarge[i]).attr("alt", projectsName);
      //console.log(modalPictureLarge[i]);
      pictureListLarge[i].appendChild(modalPictureLarge[i]);
    } 
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
    //$(".ba-modal-content-wrapper").empty();
    $(".ba-modal__list").empty();
    $(".ba-modal-picture__item").empty();
    $(".ba-modal-picture__item_large").empty();
    $(document).off("keydown", closeModal);
  };

  $(".ba-modal-close").on("click", closeModal);

  $(".ba-modal").on("click", function(e) {
    //Сложный вариант
    /* let modalContent = $(".ba-modal-content");

    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        closeModal();
    } */

    //console.log(e.target);

    if ( $(e.target).hasClass("ba-modal")) {
        closeModal();
    };
  });
//  ======================================================================  //

// ===========  slider  ============  //
  $('.ba-modal-picture').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      fade: true,
      asNavFor: '.ba-modal-picture__slider'
  });
  $('.ba-modal-picture__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      asNavFor: '.ba-modal-picture',
      dots: false,
      arrows: true,
      centerMode: false,
      centerPadding: 0,
      focusOnSelect: true,
  });


});
//  ================ The End of function Ready  ===================//

//=======================  MAP =======================//
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
