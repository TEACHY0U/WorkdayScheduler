// setting variables

var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#1");
var hour2 = $("#2");
var hour3 = $("#3");
var hour4 = $("#4");
var hour5 = $("#5");
var time = moment();

function setPlanner() {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

setPlanner();


// save button function
var saveButton = $(".saveButton");

saveButton.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

// Past, Present , Future color function to time-block

function timeBlockColor() {
    hour = time.hours();
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));

        if (currentHour > hour) {
            $(this).addClass("future");

        }
        else if (currentHour === hour) {
            $(this).addClass("present");

        }
        else
        {
            $(this).addClass("past");
        }
    })

}

timeBlockColor();