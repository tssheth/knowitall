/* 
 * YHack 2014
 */

var counter = 0;

function moreForms() {
    counter++;
    
    var newFields = document.getElementById('genericInputMaster').cloneNode(true);
    newFields.id = '';
    newFields.style.display = 'block';
    var newField = newFields.childNodes;
    for (var i = 0; i < newField.length; i++) {
        var theName = newField[i].name
        if (theName)
            newField[i].name = theName + counter;
    }
    var insertHere = document.getElementById("write");
    insertHere.parentNode.insertBefore(newFields, insertHere);
}

window.onload = moreForms;