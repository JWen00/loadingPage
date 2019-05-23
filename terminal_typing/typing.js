// Written by Jennifer 24/05/2019

var text = "MORE TESTING <br> MORE RESTING MORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTING"; 
html_element = document.getElementById("text");
console.log(html_element)

console.log(text.length)
var i = -1, isTag;
(function type() { 
    tmp = text.slice(0, ++i);
    

    
    // Check if finished typing 
    console.log(tmp.length) 
    // ERROR hERE.. It keeps calling type()
    // Does not show the last character
    if (tmp.length === text.length) return; 
    html_element.innerHTML = tmp + `<span class="blingbling"> &#32;</span>`; 

    // Check if we're approaching a 'tag' 
    var last_char = tmp.slice(-1);
    if (last_char === "<") isTag = true; 
    if (last_char === ">") isTag = false; 
    if (isTag) return type(); 
    setTimeout(type, 50); 
})(); 

html_element.addEventListener("keypress", showAll())

function showAll() { 
    console.log("CLickEd BUTTON!")
    document.getElementById("text").innerHTML = text;
};

