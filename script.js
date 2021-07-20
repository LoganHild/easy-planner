//Must use date utility library to work with date and time, example from class and in readme is moment but check links from Nathan due to moment being chopped.

//timeblocks go in <div class = "container"
//Displays the current date at the top of the calendar--moment website--use the docs.

var today = moment();
$('#currentDay').text(today.format('dddd Do, YYYY'));

//create timeblocks
//When a timeblock is clicked, user can enter an event--probably bootstrap.
var time = today.format("9");
$("#nineAM").text(time);
var time = today.format("10");
$("#tenAM").text(time);
var time = today.format("11");
$("#elevenAM").text(time);
var time = today.format("12 A");
$("#twelvePM").text(time);
var time = today.format("1 A");
$("#onePM").text(time);
var time = today.format("2 A");
$("#twoPM").text(time);
var time = today.format("3 A");
$("#threePM").text(time);
var time = today.format("4 A");
$("#fourPM").text(time);
var time = today.format("5 A");
$("#fivePM").text(time);

//When viewing the timeblocks for that day, each is color coded for past, present, future---moment+jquery?+maybe bootstrap I don't know.



//grid
$('span').addClass("col-lg-1");
$('input').addClass("col-lg-10");
$('button').addClass("col-lg-1 alert-success");


//changing save button on mouseover
$('.alert-success').on('mouseenter mouseleave', function(event) {
    $(this).addClass("alert-success");
})

//save button for timeblock, for saving event to local storage, maybe need to get it on page load or something? will use JSON

var save = $('button');

function formSave(event) {
    event.preventDefault();
    console.log($(this).siblings(".textarea").data("hour"));

    var input = $(this).siblings(".textarea");
    console.log(event)
    if (input.val() !== null) {
        
        localStorage.setItem(input.data("hour"),input.val());
        // localStorage.getItem('event');
    }

}


save.on('click', formSave);



//When refreshed, the saved events persist.

function renderEvents() {
    
    
}
renderEvents();