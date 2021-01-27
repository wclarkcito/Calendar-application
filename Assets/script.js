$(document).ready(function () {

    //global variables
    var workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

    var presentHour = moment().hour();



    function showTime() {
        //loops through the working hours variable to create columns

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

            //conditionals for past present and future color coding of textareas

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
            var colThree = $("<div class='col-md-1'>");
            var saveButton = $("<button>");
            saveButton.addClass("btn btn-dark btn-lg primary  saveButton");
            $(saveButton).text("Save")
            colThree.append(saveButton);

            //save button for values of textareas

            $(saveButton).click(function (event) {
                event.preventDefault();
                console.log(saveButton)
                //array of <textarea> elements
                var textAreas = $("textarea");
                var textvalues = [];
                for (i = 0; i < textAreas.length; i++) {
                    textvalues.push($(textAreas[i]).val())
                    console.log($(textAreas[i]).val(), i)
                    //set variable into local storage


                    localStorage.setItem('textareas', JSON.stringify(textvalues));

                }
                //console.log(textvalues)



            })


            row.append(colOne, colTwo, colThree);
            $("#planner").append(row);

        }


        //retrieves save data from local storage 
    }
    function loadData() {
        var data = JSON.parse(localStorage.getItem('textareas'));
        console.log(data)
        var textAreas = $("textarea");
        console.log(textAreas)
        for (i = 0; i < textAreas.length; i++) {
            textAreas[i].value = data[i]
        }

    }




    showTime();
    loadData()


});


//displays current date and time

var dt = new Date(); var time = dt
var currentdate = new Date(); var datetime = "Now: " + currentdate;


$("#currentDay").html(currentdate)




