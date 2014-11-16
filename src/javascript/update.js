/* 
 * YHack 2014
 */

var storage = chrome.storage.local;

var links = new Array();
links['cnn'] = 'http://rss.cnn.com/rss/cnn_topstories.rss';
links['bbc'] = 'http://feeds.bbci.co.uk/news/rss.xml?edition=us';
links['nyt'] = 'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml';
links['yahoonews'] = 'http://rss.news.yahoo.com/rss/topstories';
links['fox'] = 'http://feeds.foxnews.com/foxnews/latest';
links['googlenews'] = 'https://news.google.com/?output=rss';
links['espn'] = 'http://sports.espn.go.com/espn/rss/news';
links['yahoosports'] = 'https://sports.yahoo.com/top/rss.xml';
links['mlb'] = 'http://mlb.mlb.com/partnerxml/gen/news/rss/mlb.xml';
links['nfl'] = 'http://www.nfl.com/rss/rsslanding?searchString=home';
links['nba'] = 'http://www.nba.com/rss/nba_rss.xml';
links['nhl'] = 'http://www.nhl.com/rss/news.xml';
links['cnnmoney'] = 'http://rss.cnn.com/rss/money_topstories.rss';
links['yahoofinance'] = 'http://finance.yahoo.com/rss/topfinstories';
links['cnbc'] = 'http://www.cnbc.com/id/10000664/device/rss/rss.html';
links['forbes'] = 'http://www.forbes.com/markets/feed/';
links['marketwatch'] = 'http://feeds.marketwatch.com/marketwatch/topstories?format=xml';

var selectors = document.getElementsByClassName('select');
var columns = 3;

function setColumns(change) {
//    elements = document.getElementsByClassName("subcontainer" + columns);
    columns += change
//    for (var i = 0; i < elements.length; i++) {
//        elements[i].class = "subcontainer" + columns;
//    }
}

function setColumnsFinal() {
    elements = document.getElementsByClassName("subcontainer" + columns);
    for (var i = 0; i < elements.length; i++) {
        elements[i].class = "subcontainer" + columns;
    }
}

function updateNews() {
    var choice = "";
    storage.get("news", function(result) {
        choice = result.news;
        if(choice === "none" ||  choice == "Select News Network" || choice === false) {
            setColumns(-1);
            document.getElementById("newsSub").style.display = "none";
        }
        else {
            setColumns(1);
            document.getElementById('news').setAttribute("rss_url", links[choice]);
        }
    });
}

function updateSports() {
    var choice = "";
    storage.get("sports", function(result) {
        choice = result.sports;
        if(choice === "none" ||  choice == "Select Sports Network" || choice === false) {
            setColumns(-1);
            document.getElementById("sportsSub").style.display = "none";
        }
        else {
            setColumns(1);
            document.getElementById('sports').setAttribute("rss_url", links[choice]);
        }
    });
}

function updateMarket(){
    var choice = "";
    storage.get("market", function(result) {
        choice = result.market;
        if(choice === "none" ||  choice == "Select Market Network" || choice === false) {
            setColumns(-1);
            document.getElementById("marketSub").style.display = "none";
        }
        else {
            setColumns(1);
            document.getElementById('market').setAttribute("rss_url", links[choice]);
        }
    });
}

function updateOthers() {
    var choice = '';
    storage.get("userLists", function(results) {
        var array = results.userLists;
        
        if(array.length > 3) {
            var counter = 3;
        }
        else {
            counter = array.length;
        }
        if(counter !== 1) {
            for (var i = 0; i < counter; i++) {
                var currentUrl = array[i + 1];
                setColumns(1);
                document.getElementById("usersub" + i).style.display = "inline-block";
                document.getElementById("user" + i).setAttribute("rss_url", currentUrl);
            }    
        }
    });
}

function update() {    
    updateNews();
    updateSports();
    updateMarket();
    updateOthers();
    setColumnsFinal();
}