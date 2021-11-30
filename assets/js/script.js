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
    //debugger;
    if(event.target.matches(".save")) {
        var clickTarget= $(event.target).attr("id");
        var textAreaContent = $("#" + clickTarget).prev().val();
        var textKey = $("#" + clickTarget).prev().attr("id");

        // var tasksObj = {
        //     textKey: textAreaContent
        // };

        // $(tasksArr).push(tasksObj);
       
        console.log(textAreaContent);
        console.log(textKey);

    }


    var storeTasksArr = getStoredItems ();

    //console.log(clickTarget);

    // textId = clickToText(clickTarget);
    // console.log($("#" + textId).val())

    arrayIndex = clickToIndex(clickTarget)
    storeTasksArr[arrayIndex] = textAreaContent;
    console.log(tasksArray);

    localStorage.setItem("calendarTasks", JSON.stringify(storeTasksArr));
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

function getStoredItems () {
    //debugger;
    var storedItems = localStorage.getItem("calendarTasks")

    if(!storedItems) {
        return false;
    }

    storedItems = JSON.parse(storedItems);

    return storedItems;
}

// function clickToText(clickTask) {
//     switch (clickTask) {
//         case "click0":
//             text = "task0"
//             break;

//         case "click1":
//             text = "task1"
//             break; 

//         case "click2":
//             text = "task2"
//             break;

//         case "click3":
//             text = "task3"
//             break;

//         case "click4":
//             text = "task4"
//             break;

//         case "click5":
//             text = "task5"
//             break;

//         case "click6":
//             text = "task6"
//             break;

//         case "click7":
//             text = "task7"
//             break;

//         case "click8":
//             text = "task8"
//             break;
//     };
//     return(text);
//     };


    function clickToIndex(clickIndex) {
        switch(clickIndex) {
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



    
// function textSelection() {
//     var textArea = $("textarea");
//     time2Index(textArea);
// }