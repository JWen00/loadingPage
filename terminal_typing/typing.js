// Written by Jennifer 24/05/2019

var text = "MORE TESTING <br> MORE RESTING MORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTINGMORE TESTING <br> MORE RESTING"; 
html_element = document.getElementById("text");

var i = -1, isTag;
var showAll = false;
(function type() { 
    tmp = text.slice(0, ++i);

    // Does not show the last character
    if (tmp.length === text.length) return; 

    // SHows the blinker 
    html_element.innerHTML = tmp;
    // `<span class="blingbling"> &#32;</span>`; 
    
    if (showAll == true) { 
        document.getElementById("text").innerHTML = text;
        return;
    } 

    // Check if we're approaching a 'tag' 
    var last_char = tmp.slice(-1);
    if (last_char === "<") isTag = true; 
    if (last_char === ">") isTag = false; 
    if (isTag) {
        type();
    } else setTimeout(type, 50); 
})(); 

document.addEventListener("keydown", toggle);
function toggle() { 
    showAll = true;
    console.log("ShowAll is now true");
};

