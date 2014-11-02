var results = document.getElementsByClassName('post_results');

function resizeY() {
    var height = window.innerHeight - 50;
    for(var k = 0; k < results.length; k++) {
        results[k].style.height = height+'px';
    }    
}

function resizeX() {
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

function resize() {
    resizeY();
    resizeX();
}