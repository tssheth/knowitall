/* 
 * YHack 2014
 */

var newsArray = new Array("cnn", "bbc", "nyt", "yahoonews", "fox", "googlenews", "none");
var sportsArray = new Array("espn", "yahoosports", "mlb", "nfl", "nba", "nhl", "none");
var marketArray = new Array("cnnmoney", "yahoofinance", "cnbc", "forbes", "marketwatch", "none");

function selected(array) {
    for (var i = 0; i < array.length; i ++) {
        var currentSelection = array[i];
        if (document.getElementById(currentSelection).selected === true) {
            return currentSelection;
        }
    }
    return false;
}

function tryAgain() {
    
}

function getNonNormal() {
    var urls = new Array();
    document.getElementById("genericInputMaster").setAttribute("class", "hidden");
    var nonNormal = document.getElementsByClassName("genericInput");
    for (var i = 0; i < nonNormal.length + 15; i++) {
        var current = nonNormal[i];
        if (current !== null) {
            urls[urls.length] = current;
        }
    }
    return urls;
}

function save() {
    var news = selected(newsArray);
    var sports = selected(sportsArray);
    var market = selected(marketArray);
    
    if (news === false || sports === false || market === false) {
        tryAgain();
        return;
    }
    else {
        var alienValues = getNonNormal();
        var storage = chrome.storage.local;
        
        storage.set({"news": news});
        storage.set({"sports": sports});
        storage.set({"market": market});
        storage.set({"userLists": alienValues});
        
        window.location.href = "home.html";
    }
}