/* 
 * YHack 2014
 */

function checkForData() {
    var choice = "";
    var decider = false;
    
    chrome.storage.local.get("userChoice", function(result) {
        choice = result.userChoice;
        if(choice !== "") {
            return true;
        }
        else {
            return false;
        }
    });
}

window.onload = function() {
    var choice = "";
//    chrome.storage.local.get("userChoice", function(result) {
//       choice = result.userChoice;
//       if (choice !== null) {
//           window.location.replace("home.html");
//       }
//    });
};