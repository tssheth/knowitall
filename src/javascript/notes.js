function store(keyName, data) {
    var obj = {};
    obj[keyName] = data;
    chrome.storage.local.set(obj);
}

function read() {
    var notes = "";
    chrome.storage.local.get('notes', function (result) {
        notes = result.notes;
        alert(notes);
    });
}

document.addEventListener('DOMContentLoaded', function () {
	var el = document.getElementById("addNote");
	el.addEventListener("click", function () {
		store(document.getElementById("noteName").value, document.getElementById("note").value);
    }, false);
    
    var el2 = document.getElementById("readNotes");
	el2.addEventListener("click", function () {
		read();
	}, false);
    
    var el3 = document.getElementById("clearNotes");
	el3.addEventListener("click", function () {
		chrome.storage.local.clear();
	}, false);
});