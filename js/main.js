// Initialize Firebase
 //var config = {
   // apiKey: "AIzaSyDIQDfBPBeOliB0gz2AqmfbwKp4JdP_Zso",
   // authDomain: "unit-9.firebaseapp.com",
   // databaseURL: "https://unit-9.firebaseio.com",
   // storageBucket: "unit-9.appspot.com",
   // messagingSenderId: "817856317849"
 // };
 // firebase.initializeApp(config);

 // var database = firebase.database();


//Handlebars
// $('#add-items').on('submit',function(event){
//     event.preventDefault();

//     var userInput = {
//                     name: $('#name').val(),
//                     date: $('#date').val()
//                  };



//     var source = $("#reservationOutput").html();

//     var template = Handlebars.compile(source);

//     var newListItemHTML = template(userInput);

//     $('.reservations').append(newListItemHTML);
// });





// Google Maps
      function initMap() {
        var uluru = {lat: 40.8054491, lng: -73.9654415};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru,
          scrollwheel: false

          //zoomControl: false,
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }