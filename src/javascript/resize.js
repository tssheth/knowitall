var results = document.getElementsByClassName('post_results');

function resizeY() {
    var height = window.innerHeight - 188;
    for(var k = 0; k < results.length; k++) {
        results[k].style.height = height+'px';
    }    
}

function resizeX() {
    var container = document.getElementById('container');
    var width = window.innerWidth;
    var listItems = document.getElementsByTagName('li');
    
    if(width < 1165) {
        for(var i = 0; i < listItems.length; i++) {
            listItems[i].style.height = '85px';
            
            results[i].style.width = '280px';
            results[i].style.height = '350px';
        }
    }
    if(width >= 1165) {
       for(var i = 0; i < listItems.length; i++) {
            listItems[i].style.height = '60px';
            
            results[i].style.width = '350px';
        } 
    }
}

//function resizeMaster() {
//    var counter = 0;
//    
//    if(document.getElementById("newsSub").style.display !== "none") {
//        counter++;
//    }
//    if(document.getElementById("sportssSub").style.display !== "none") {
//        counter++;
//    }
//    if(document.getElementById("marketSub").style.display !== "none") {
//        counter++;
//    }
//    
//    var subs = document.getElementsByClassName("subcontainer");
//    
//    for(var j = 0; j < subs.length; j++) {
//        if(subs[j].style.display !== "none") {
//            counter++;
//        }
//    }
//    if(counter > 3) {
//        for(var l = 0; l < subs.length; l++) {
//            var height = (window.innerHeight - 188) / 2;
//            subs[l].style.height = height+'px';
//        }
//    }
//}

function resize() {
    resizeY();
    resizeX();
//    resizeMaster();
}