// Initialize Firebase
var config = {
  apiKey: "AIzaSyCa7iFaQEI7u0jzeHP79u7JA_W7GefZtyY",
  authDomain: "restaurant-site.firebaseapp.com",
  databaseURL: "https://restaurant-site.firebaseio.com",
  storageBucket: "restaurant-site.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

// create reservationData object which will be populated with user input
var reservationData = {};

// set the day when an option is clicked on
$('.reservation-day li').on('click', function() {
  reservationData.day = $(this).text();
});

// when submitted, the name data should be set
// and all data should be sent to your database
$('#add-items').on('submit',function(event){
  event.preventDefault();

  reservationData.name = $('.reservation-name').val();
  reservationData.day = $('.reservation-day').val();


  // create a section for reservations data in your db
  var reservationsReference = database.ref('reservations');

  reservationsReference.push(reservationData);
});


// retrieve reservations data when page loads and when reservations are added
function getReservations() {

  // use reference to database to listen for changes in reservations data
  database.ref('reservations').on('value', function(results) {

    // Get all reservations stored in the results we received back from Firebase
    var allReservations = results.val();

    // remove all list reservations from DOM before appending list reservations
    $('.reservations').empty();

    // iterate (loop) through all reservations coming from database call
    for (var reservation in allReservations) {

      // Create an object literal with the data we'll pass to Handlebars
      var context = {
        name: allReservations[reservation].name,
        day: allReservations[reservation].day,
        reservationId: reservation
      };


      // Get the HTML from our Handlebars reservation template
      var source = $("#reservation-template").html();

      // Compile our Handlebars template
      var template = Handlebars.compile(source);

      // Pass the data for this reservation (context) into the template
      var reservationListItem = template(context);

      // Append newly created reservation to reservations list.
      $('.reservations').append(reservationListItem);

    }

  });

}

// When page loads, get reservations
getReservations();