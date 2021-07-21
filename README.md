# easy-planner

## Description
An easy to use calendar application for busy individuals. Allows the user to manage their time efficiently by saving important events for each hour of the day. Once an event is saved to the local storage, it will remain in the chosen timeslot until the user changes the event. Each timeslot will also display a color depicting if the time of the event has passed, if it is the current time of the event, or if the event is at a future time. 

## Usage
* At the top of the page, the current date and time is displayed for reference.
* When the user scrolls down, they will see timeblocks for a typical 9-5 work day.
* Click on the text area between the displayed time for the block and the save button then enter in events for that timeblock.
* The user is able to enter more than one event in each timeblock
* After an event is entered, click the save button next to the event to be saved.
* At the top of the timeblocks, a message will appear letting the user know the event has been saved to localStorage.
* To remove events the user may delete the current event and save the blank timeblock.
* Once all events for the events for the day have been saved they will remain in that timeblock, even if the user refreshes or exits the page.
* As the time goes by, the background colors of the block will change by the hour according to past, present, and future.
* gray = past
* red = present
* green = future

