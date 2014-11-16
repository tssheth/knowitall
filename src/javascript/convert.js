function convert(changedInput) {
	var decimal = document.getElementById('decimal').value;
	var hex = document.getElementById('hex').value;
	var binary = document.getElementById('binary').value;
	
	if (changedInput.id == "decimal") {
		document.getElementById('hex').value = parseInt(decimal).toString(16);
		document.getElementById('binary').value = parseInt(decimal).toString(2);
	} else if (changedInput.id == "hex") {
		document.getElementById('decimal').value = parseInt("0x" + hex);
		document.getElementById('binary').value = parseInt("0x" + hex).toString(2);
	} else if (changedInput.id == "binary") {
		document.getElementById('decimal').value = parseInt(binary, 2);
		document.getElementById('hex').value = parseInt(binary, 16);
	}
	
	/*
	hex = document.getElementById('hex').value;
	document.cookie="lastHex='+hex+';";
	*/
}

// After page loads
document.addEventListener('DOMContentLoaded', function () {
	var el = document.getElementById("decimal");
	el.addEventListener("keyup", function () {
		convert(document.getElementById("decimal"));
	}, false);
	
	var el2 = document.getElementById("hex");
	el2.addEventListener("keyup", function () {
		convert(document.getElementById("hex"));
	}, false);
	
	var el3 = document.getElementById("binary");
	el3.addEventListener("keyup", function () {
		convert(document.getElementById("binary"));
	}, false);
	
	/*
	document.getElementById('hex').value = getCookie("lastHex");	
	convert(document.getElementById('hex'));
	*/
});

//on window close
/*
document.addEventListener('unload', function () {
	
});
*/