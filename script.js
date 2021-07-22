//Must use date utility library to work with date and time!
//Displays the current date at the top of the calendar.
var today = moment();
var now = today.format("LT");
var currentTime = today.format('H');
$('#currentDay').text(today.format('dddd Do, YYYY'));
$('#now').text(now);

//When a timeblock is clicked, user can enter an event.
//When viewing the timeblocks for that day, each is color coded for past, present, future.

function textareaColor() {
    $('textarea').each(function textarea() {
        var dataHour = $(this).data("hour");
        
        if (currentTime == dataHour) {
            $(this).addClass('present');
        } else if (currentTime > dataHour) {
            $(this).addClass('past');
        } else if (currentTime < dataHour) {
            $(this).addClass('future');
        }
    })
}
textareaColor();

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