$(document).ready(function () {

    //global variables
    var workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    var presentHour = moment().hour();



    function showTime() {

        for (var i = 0; i < workingHours.length; i++) {

            //column one

            var row = $("<div class='row'>");
            var colOne = $("<div class='col-md-1'> ");

            var showHours = workingHours[i] + " am";


            if (workingHours[i] >= 12) {
                showHours = workingHours[i] + " pm";
                if (workingHours[i] >= 13) {
                    showHours = workingHours[i] - 12 + " pm";
                }
            }


            colOne.append(showHours);

            //column two

            var colTwo = $("<div class='col-md-10'> ");
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

            //column 3

            var row = $("<div class='row'>");
            var colThree = $("<div class='col-md-1'> ");
            var saveButton = $("<button>");
            saveButton.addClass("btn btn-dark btn-lg form-control");
            colThree.append(saveButton);


            $(saveButton).click(function (event) {
                event.preventDefault();
                //console.log(saveButton);
                var textAreas = $("textarea");
                for (i = 0; i < textAreas.length; i++) {
                    console.log($(textAreas[i]).val(), i)

                }



            })






            //var test = $(this).parent().prev().first().first().val();
            //console.log(test)
            //console.log(this);
            //localStorage.setItem("textarea", saveButton);
            //console.log(saveButton);

            //localStorage.setItem("textarea", JSON.stringify());





            //localStorage.setItem("textarea", textArea.value);








            row.append(colOne, colTwo, colThree);
            $("#planner").append(row);





        }



    }





    showTime();

});


//displays current date and time

var dt = new Date(); var time = dt
var currentdate = new Date(); var datetime = "Now: " + currentdate;


$("#currentDay").html(currentdate)




