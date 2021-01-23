$(document).ready(function () {

    //global variables

    var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
    var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

    //button for days of the week

    var dayButtons = $(".buttons");
    $(dayButtons).click(function () {
        console.log(buttons);

    })
    //button for different months

    var curMonths = $(".Months");
    $(curMonths).click(function () {
        console.log(buttons);

    })






    //displays current date and time

    var dt = new Date(); var time = dt
    var currentdate = new Date(); var datetime = "Now: " + currentdate;

    $("#currentDay").html(currentdate)























})