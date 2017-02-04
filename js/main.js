$('#add-items').on('submit',function(event){
    event.preventDefault();
    //b
    //var item = $('#value').val();
    //var cost = $('#cost').val();
    /*var userInput = {item: $('item').val(),
                       cost: $('cost').val()}; */

    var userInput = {name: $('#name').val(),
                     date: $('#date').val()};
    //c
    var source = $("#reservationOutput").html();
    //d
    var template = Handlebars.compile(source);
    //e
    var newListItemHTML = template(userInput);
    //f
    $('.reservations').append(newListItemHTML);
});

