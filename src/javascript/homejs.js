/* 
 * YHack 2014
 */

function myGetElementsByClassName(selector) {
    if (document.getElementsByClassName ) {
        return document.getElementsByClassName(selector);
    }
    
    var returnList = new Array();
    var nodes = document.getElementsByTagName('div');
    var max = nodes.length;
    for (var i = 0; i < max; i++) {
        if(nodes[i].className == selector) {
            returnList[returnList.length] = nodes[i];
        }
    }
    return returnList;
}
 
var rssReader = {
    containers: NULL,
    
    init : function(selector) {
        containers = myGetElementsByClassName(selector);
        for(i = 0; i < containers; i++) {
            var rssUrl = containers[i].getAttribute('rssUrl');
            var rssNum = containers[i].getAttribute('rssNum');
            var id = containers[i].getAttribute('id');
            
            var url = encodeURIComponent
        }
    }
}