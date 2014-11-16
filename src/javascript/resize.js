var elements = document.getElementsByClassName("subcontainer");

function resizeColumns(columnPercentage, marginPercentage) {
    for(var j = 0; j < elements.length; j++) {
        var currentElement = elements[j];
        if(currentElement.style.display !== "none") {
            currentElement.style.width = columnPercentage+'%';
            currentElement.style.marginLeft = marginPercentage+'%';
            currentElement.style.marginRight = marginPercentage+'%';
        }
    }
}

function counterToColumns(counter) {
    switch(counter) {
        case 1:
            resizeColumns(65, 5);
            break;
        case 2:
            resizeColumns(40, 2.5);
            break;
        case 3:
            resizeColumns(27.333, 2.5);
            break;
        case 4:
            resizeColumns(20, 2);
            break;
        case 5:
            resizeColumns(14, 1.5);
            break;
        case 6:
            resizeColumns(13.75, 1.25);
            break;
        default:
            break;
    }   
}

function resizeCalibrate() {
    var counter = 0;
    
    for(var i = 0; i < elements.length; i++) {
        var currentElement = elements[i];
        if (currentElement.style.display !== "none") {
            counter++;
        }
    }
        
    counterToColumns(counter);
}

function resize() {
    resizeCalibrate();
}