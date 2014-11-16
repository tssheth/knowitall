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

//function tryAgain() {
//    
//}

function getNonNormal() {
    var urls = new Array();
    document.getElementById("genericInputMaster").setAttribute("class", "hidden");
    var nonNormal = document.getElementsByClassName("rssUrl");
    for (var i = 0; i < nonNormal.length; i++) {
        var current = nonNormal[i].value;
        urls.push(current);
    }
    return urls;
}

function save() {
    var news = selected(newsArray);
    var sports = selected(sportsArray);
    var market = selected(marketArray);
    
    var alienValues = getNonNormal();
    var storage = chrome.storage.local;
    
    // Clears local storage...ADDRESS IT
    storage.clear();
    
    storage.set({"userChoice": "true"});
    storage.set({"news": news});
    storage.set({"sports": sports});
    storage.set({"market": market});
    storage.set({"userLists": alienValues}); 
    
//    var test = "";
//    storage.get("userChoice", function(result) {
//        test = result.userChoice;
//        alert(test);
//    });
}

function fillInTheBlank() {
    var news = "";
    chrome.storage.local.get("news", function(results) {
        news = results.news;
        if(news !== "none" ||  news !== "Select News Network" || news !== false) {
            document.getElementById("news").value = news;
        }
    });
    
    var sports = "";
    chrome.storage.local.get("sports", function(results) {
       sports = results.sports;
       if(sports !== "none" ||  sports !== "Select News Network" || sports !== false) {
            document.getElementById("sports").value = sports;
        }
    });
    
    var market = "";
    chrome.storage.local.get("market", function(results) {
       market = results.market;
       if(market !== "none" ||  market !== "Select News Network" || market !== false) {
            document.getElementById("market").value = market;
        }
    });
}

function saveHandler(element) {
    setTimeout(save, 0);
//    window.location.replace("home.html");
}

document.onload =  function() {
    fillInTheBlank();
}

document.addEventListener("DOMContentLoaded", function() {
   document.querySelector('#save').addEventListener('click', saveHandler); 
});