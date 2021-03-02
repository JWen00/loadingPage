function getBackgroundColour() { 
	const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
	let new_colour = "#"; 
	for (var i = 0; i < 6; ++i) { 
		new_colour += hex[Math.floor(Math.random() * hex.length)];
	} 
	let container = document.getElementById('colour_container'); 
	// Calculate "darkenss"
	// https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
	var c = new_colour.substring(1);      // strip #
	var rgb = parseInt(c, 16);   // convert rrggbb to decimal
	var r = (rgb >> 16) & 0xff;  // extract red
	var g = (rgb >>  8) & 0xff;  // extract green
	var b = (rgb >>  0) & 0xff;  // extract blue

	var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
	if (luma < 60 || luma > 200) {
		getBackgroundColour();
	} else { 
		container.style.backgroundColor = new_colour; 
		document.getElementById('colour-hex').innerHTML = new_colour;
	}
}
window.onLoad = getBackgroundColour(); 
const randomise_btn = document.getElementById('randomise-colour-btn');
randomise_btn.addEventListener("click", () => { 
	getBackgroundColour();
})
