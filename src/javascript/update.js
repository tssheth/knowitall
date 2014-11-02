/* 
 * YHack 2014
 */

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

function updateNews() {
    var choice = document.getElementById('newsSelect').selectedIndex;
    document.getElementById("news").setAttribute("rss_url", links[choice]);
    alert(choice);   
}

function updateSports() {
    
}

function updateMarket(){
    
}

function update() {    
     
}

