/* 
 * YHack 2014
 */

var storage = chrome.storage.local;

function retrieve(key) {
    url = storage.get(key, function(result) {
       return result; 
    });
    
    return url;
}

function retrieveUserData() {
    urls = storage.get("userList", function(result) {
       return result; 
    });
    return urls;
}

function gatherData() {
    var news = retrieve("news");
    var sports = retrieve("sports");
    var market = retrieve("market");
    var userData = retrieveUserData();
    
    document.write(news);
}