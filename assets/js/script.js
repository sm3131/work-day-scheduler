var currentDate = $("#currentDay").text(moment().format("dddd, MMMM Do"));


$(".save").on("click", saveClick);
$(document).ready(reloadTasks)

var currentHour = moment().hour();
console.log(currentHour);
colorCode(currentHour);
checkHourOfDay();

function saveClick(event) {
    if (event.target.matches(".save")) {
        var clickTarget = $(event.target).attr("id");
        var textAreaContent = $("#" + clickTarget).prev().val();
    }

    var storedTasksArr = getStoredItems();

    arrayIndex = clickToIndex(clickTarget)
    storedTasksArr[arrayIndex] = textAreaContent;

    localStorage.setItem("calendarTasks", JSON.stringify(storedTasksArr));
}

function reloadTasks() {

    var savedTasks = localStorage.getItem("calendarTasks")

    if (!savedTasks) {
        return false;
    }
    savedTasks = JSON.parse(savedTasks);
    console.log(savedTasks);

    for (var i = 0; i < savedTasks.length; i++) {
        $(".task" + i).text(savedTasks[i]);
    }

};

function getStoredItems() {
    var storedItems = localStorage.getItem("calendarTasks")

    if (!storedItems) {
        return storedItems = ["", "", "", "", "", "", "", "", ""];
    }

    storedItems = JSON.parse(storedItems);

    return storedItems;
}

function clickToIndex(clickIndex) {
    switch (clickIndex) {
        case "click0":
            clickArrIndex = 0
            break;

        case "click1":
            clickArrIndex = 1
            break;

        case "click2":
            clickArrIndex = 2
            break;

        case "click3":
            clickArrIndex = 3
            break;

        case "click4":
            clickArrIndex = 4
            break;

        case "click5":
            clickArrIndex = 5
            break;

        case "click6":
            clickArrIndex = 6
            break;

        case "click7":
            clickArrIndex = 7
            break;

        case "click8":
            clickArrIndex = 8
            break;
    }
    return (clickArrIndex);
}

function checkHourOfDay() {
    // var currentHour = moment().hour();
    setInterval(function() {
        colorCode(currentHour);
        console.log(currentHour);
        if(currentHour === 0) {
            $("textarea").css("background-color", "green");
        }
    }, 60000);
}

function colorCode(currentHour1) {
    for (t = 1; t < 10; t++) {
        //debugger;
        var hourlyTaskString = $(".time" + t).html();
        var hourlyTask = parseInt(hourlyTaskString);
        var militaryTime = standardToMilitary(hourlyTask);

        if (militaryTime === currentHour1) {
            $("#task" + t).css("background-color", "red");
            console.log("equal");

        } else if (militaryTime < currentHour1) {
            console.log("less");
            $("#task" + t).css("background-color", "grey");

        } else if (militaryTime > currentHour1) {
            $("#task" + t).css("background-color", "green");
            console.log("greater");
        }
    }
}

function standardToMilitary(hourly) {
    switch (hourly) {
        case 9:
            military = 9
            break;
        case 10:
            military = 10
            break;
        case 11:
            military = 11
            break;
        case 12:
            military = 12
            break;
        case 1:
            military = 13
            break;
        case 2:
            military = 14
            break;
        case 3:
            military = 15
            break;
        case 4:
            military = 16
            break;
        case 5:
            military = 17
            break;
    }
    return military;
}

$(".clear-btn").on("click", clearTask);

function clearTask(event) {
    for (var c = 0; c < 9; c++) {
        var clearTarget = event.target;
        if (clearTarget.matches(".clear" + c, ".trash" + c)) {
            $(".task" + c).text("");
            
        }
        else if (clearTarget.matches(".trash" + c)) {
            $(".task" + c).text("");
            break;
        }
    }
};

// function testColors() {
//     var time = 0;
//     var dayHour = setInterval(function() {
//         var currentHour = time;
//         colorCode(currentHour);
//         console.log(currentHour);
//         time++;
//         if(currentHour === 24) {
//             time = 0
//         }
//         console.log(time);
//         if (currentHour === 0) {
//             $("textarea").css("background-color", "green");
//         }
//     }, 2000);
// }

// testColors();