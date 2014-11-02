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

function save() {
    var news = selected(newsArray);
    var sports = selected(sportsArray);
    var market = selected(marketArray);
    
    if (news === false || sports === false || market === false) {
        tryAgain();
        return;
    }
    else {
        chrome.storage.local.set({
            "news": news,
            "sports": sports,
            "market": market
        }, function() {
            message("Your have been saved.");
            window.location.replace("home.html");
        });
    }
}