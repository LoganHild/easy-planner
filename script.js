//Must use date utility library to work with date and time!
//Displays the current date at the top of the calendar.
var today = moment();
var currentTime = today.format('LT');
$('#currentDay').text(today.format('dddd Do, YYYY'));
$('#currentTime').text(currentTime);

//When a timeblock is clicked, user can enter an event.
//using date library to add times, having trouble displaying AM and PM?
var nine = today.hour(9).minute(0).format("H:mm")
$("#nineAM").text(nine);
var ten = today.hour(10).minute(0).format("HH:mm");
$("#tenAM").text(ten);
var eleven = today.hour(11).minute(0).format("HH:mm");
$("#elevenAM").text(eleven);
var twelve = today.hour(12).minute(0).format("HH:mm");
$("#twelvePM").text(twelve);
var one = today.hour(1).minute(0).format("H:mm");
$("#onePM").text(one);
var two = today.hour(2).minute(0).format("H:mm");
$("#twoPM").text(two);
var three = today.hour(3).minute(0).format("H:mm");
$("#threePM").text(three);
var four = today.hour(4).minute(0).format("H:mm");
$("#fourPM").text(four);
var five = today.hour(5).minute(0).format("H:mm");
$("#fivePM").text(five);
function test() {
moment([2007, 0, 29]).fromNow();
}

//When viewing the timeblocks for that day, each is color coded for past, present, future.

function textareaColor() {
    $('.textarea').each(function textarea() {
        var dataHour = $(this).data("hour");
        if (currentTime === dataHour) {
            $(this).addClass('present');
        } else if (currentTime > dataHour) {
            $(this).addClass('past');
        } else if (currentTime < dataHour) {
            $(this).addClass(future);
        }
    })
}

//grid
$('span').addClass("col-lg-1");
$('textarea').addClass("col-lg-10 description");
$('button').addClass("col-lg-1");

//changing save button on mouseover
$('.alert-success').on('mouseenter mouseleave', function(event) {
    $(this).addClass("alert-success");
})

//save button for timeblock, for saving event to local storage
var save = $('button');

function formSave(event) {
    event.preventDefault();

    var input = $(this).siblings(".textarea");
    if (input.val() !== null) {
        $('#alert').text("You have saved an event to localStorage!")
        localStorage.setItem(input.data("hour"),input.val());
    } 
}

save.on('click', formSave);

//Displaying saved Events.
$('#nine').text(localStorage.getItem("9"));
$('#ten').text(localStorage.getItem("10"));
$('#eleven').text(localStorage.getItem("11"));
$('#twelve').text(localStorage.getItem("12"));
$('#one').text(localStorage.getItem("13"));
$('#two').text(localStorage.getItem("14"));
$('#three').text(localStorage.getItem("15"));
$('#four').text(localStorage.getItem("16"));
$('#five').text(localStorage.getItem("17"));