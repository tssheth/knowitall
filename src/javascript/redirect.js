/* 
 * YHack 2014
 */

function checkForData() {
    var storage = chrome.storage.local.get('news', function(result) {
        decider = result.news;
        if (decider === null) {
            return false;
        }
        else {
            return true;
        }
    });
}

window.onload = function() {
    if(checkForData() === true) {
        window.location.replace("home.html");
    }
}