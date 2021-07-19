//Must use date utility library to work with date and time, example from class and in readme is moment but check links from Nathan due to moment being chopped.
//timeblocks go in <div class = "container"
//Displays the current date at the top of the calendar--moment website--use the docs.

var today = moment();
$('#currentDay').text(today.format('dddd Do, YYYY'));
//Displays timeblocks for standard business hours--bootstrap+moment.

var timeBlocks = $('.container');



//When viewing the timeblocks for that day, each is color coded for past, present, future---moment+jquery?+maybe bootstrap I don't know.




//When a timeblock is clicked, user can enter an event--probably bootstrap.





//save button for timeblock, for saving event to local storage, maybe need to get it on page load or something? will use JSON I'm sure >.> eww I hate it(will take me like all week).




//When refreshed, the saved events "persist" lmao, "are still there".