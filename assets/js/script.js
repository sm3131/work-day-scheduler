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

}

function textSelection() {
    var textArea = $("textarea");
    time2Index(textArea);
}

function clickToText(clickTask) {
    switch (clickTask) {
        case "click9":
            text = "task9"
    
        case "click10":
            text = "task9"
            
        case "click11":
            text = "task9"
            
        case "click12":
            text = "task9"
            
        case "click1":
            text = "task9"
            
        case "click2":
            text = "task9"
            
        case "click3":
            text = "task9"
            
        case "click4":
            text = "task9"
            
        case "click5":
            text = "task9"
    };
    return(text);
    };


    function clickToIndex(clickIndex) {
        switch(clickIndex) {
            case "click9":
                clickArrIndex = 0
        
            case "click10":
                clickArrIndex = 1
                
            case "click11":
                clickArrIndex = 2
                
            case "click12":
                clickArrIndex = 3
                
            case "click1":
                clickArrIndex = 4
                
            case "click2":
                clickArrIndex = 5
                
            case "click3":
                clickArrIndex = 6
                
            case "click4":
                clickArrIndex = 7
                
            case "click5":
                clickArrIndex = 8
        }
        return clickArrIndex;
    }



    
