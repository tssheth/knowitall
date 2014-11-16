var results = document.getElementsByClassName('post_results');

function resizeY() {
    var height = window.innerHeight - 188;
    var counter = 0;
    
    for(var i = 0; i < results.length; i++) {
        if(results[i].style.display !== "none") {
            counter++;
        }
    }
    
//    if(counter < 4) {
        for(var k = 0; k < results.length; k++) {
            results[k].style.height = height+'px';
        }  
//    }
//    if(counter => 4) {
//        for(var j = 0; j < results.length; j++) {
//            results[j].style.height = (height)/2+'px';
//        }
//    }
//    counter = 0;
}

//function resizeX() {
//    var container = document.getElementById('container');
//    var width = window.innerWidth;
//    var listItems = document.getElementsByTagName('li');
//    
//    if(width < 1165) {
//        for(var i = 0; i < listItems.length; i++) {
//            listItems[i].style.height = '85px';
//            
//            results[i].style.width = '280px';
//            results[i].style.height = '350px';
//        }
//    }
//    if(width >= 1165) {
//       for(var i = 0; i < listItems.length; i++) {
//            listItems[i].style.height = '60px';
//            
//            results[i].style.width = '350px';
//        } 
//    }
//}

function resizeMaster() {
    var width = window.innerWidth;
    var numberOfResults = results.length;
    if(numberOfResults > 4) {
        numberOfResults = 4;
    }
    else {
        netWidth = width - (80*numberOfResults);
        for(var i = 0; i < numberOfResults; i++) {
            results[i].style.width = netWidth / numberOfResults;
        }
    }
}

function resize() {
    resizeY();
//    resizeX();
    resizeMaster();
}