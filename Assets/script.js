$(document).ready(function () {

    //global variables
    var workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    var presentHour = moment().hour();

    function showTime() {

        for (var i = 0; i < workingHours.length; i++) {

            var row = $("<div class='row'>"); //created a dinamyc row
            var colOne = $("<div class='col-md-3'> ");

            var showHours = workingHours[i] + " a.m.";
            //console.log(showHours);

            if (workingHours[i] >= 12) {
                showHours = workingHours[i] + " p.m.";
                if (workingHours[i] >= 13) {
                    showHours = workingHours[i] - 12 + " p.m.";
                }
            }
            //console.log(showHours);

            colOne.append(showHours);

            var colTwo = $("<div class='col-md-6'> ");
            var textArea = $("<textarea>");
            textArea.attr("id", "textarea" + i);
            textArea.addClass("form-control");

            //console.log(textArea);
            if (presentHour > workingHours[i]) {
                textArea.addClass('bg-secondary');
            }
            if (presentHour === workingHours[i]) {
                textArea.addClass("bg-danger");
            }

            if (presentHour < workingHours[i]) {
                textArea.addClass("bg-success");
            }




            colTwo.append(textArea);

            row.append(colOne, colTwo);
            $("#planner").append(row);

        }



    }


    // var dayButtons = $(".buttons");
    // $(dayButtons).click(function () {
    //     console.log(buttons);

    // })

    // //button for different months

    // var curMonths = $(".Months");
    // $(curMonths).click(function () {
    //     console.log(buttons);

    // })


    showTime();



    //displays current date and time

    // var dt = new Date(); var time = dt
    // var currentdate = new Date(); var datetime = "Now: " + currentdate;

    // $("#currentDay").html(currentdate)


})