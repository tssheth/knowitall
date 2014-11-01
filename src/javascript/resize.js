/* 
 * YHack 2014
 */

var resultElementArray = document.getElementsByClassName('post_results');
var numberOfElements = resultElementArray.length;
var elementWidth = resultElementArray[0].style.width;

function getBrowserWidth() {
    if (self.innerHeight) {
        return self.innerWidth;
    }
    
    if (document.documentElement && document.documentElement.clientHeight) {
        return document.documentElement.clientWidth;
    }
    
    if (document.body) {
        return document.body.clientWidth;
    }
}

function resize() {
    var browserWidth = getBrowswerWidth;
    
    if (browserWidth < (elementWidth * numberOfElements + numberOfElements * 40)) {
        for (var i = 0; i <= numberOfElements; i++) {
            resultElementArray[i].setProperty('rss_num', "4");
        }
    }
}
