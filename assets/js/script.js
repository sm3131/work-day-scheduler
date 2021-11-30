var currentDate = $("#currentDay").text(moment().format("dddd, MMMM Do"));


var tasksArray = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
]

$(".save").on("click", saveClick);
$(document).ready(reloadTasks)

function saveClick(event) {
    if(event.target.matches(".save")) {
        var clickTarget= $(event.target).attr("id");
    }
    console.log(clickTarget);

    textId = clickToText(clickTarget);
    console.log($("#" + textId).val())

    arrayIndex = clickToIndex(clickTarget)
    tasksArray[arrayIndex] = $("#" + textId).val()
    console.log(tasksArray);

    localStorage.setItem("calendarTasks", JSON.stringify(tasksArray));
}

function reloadTasks() {
    var savedTasks = localStorage.getItem("calendarTasks")

    if(!savedTasks) {
        return false;
    }
    savedTasks = JSON.parse(savedTasks);
    console.log(savedTasks);

    for (var i = 0; i < savedTasks.length; i++) {
        $(".task" + i).text(savedTasks[i]);
    }

};

function clickToText(clickTask) {
    switch (clickTask) {
        case "click9":
            text = "task9"
            break;

        case "click10":
            text = "task10"
            break; 

        case "click11":
            text = "task11"
            break;

        case "click12":
            text = "task12"
            break;

        case "click1":
            text = "task1"
            break;

        case "click2":
            text = "task2"
            break;

        case "click3":
            text = "task3"
            break;

        case "click4":
            text = "task4"
            break;

        case "click5":
            text = "task5"
            break;
    };
    return(text);
    };


    function clickToIndex(clickIndex) {
        switch(clickIndex) {
            case "click9":
                clickArrIndex = 0
                break;

            case "click10":
                clickArrIndex = 1
                break;

            case "click11":
                clickArrIndex = 2
                break;

            case "click12":
                clickArrIndex = 3
                break;

            case "click1":
                clickArrIndex = 4
                break;

            case "click2":
                clickArrIndex = 5
                break;

            case "click3":
                clickArrIndex = 6
                break;

            case "click4":
                clickArrIndex = 7
                break;

            case "click5":
                clickArrIndex = 8
                break;
        }
        return (clickArrIndex);
    }



    
// function textSelection() {
//     var textArea = $("textarea");
//     time2Index(textArea);
// }