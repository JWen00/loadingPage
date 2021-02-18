const randomise_btn = document.getElementById('randomise_btn');
randomise_btn.addEventListener("click", () => { 
	const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
	let new_colour = "#"; 
	for (var i = 0; i < 6; ++i) { 
		new_colour += hex[Math.floor(Math.random() * hex.length)];
	} 
	let container = document.getElementById('colour_container'); 
	container.style.backgroundColor = new_colour; 
	document.getElementById('colour_hex').innerHTML = new_colour;
})
s	