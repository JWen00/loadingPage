var sample_text = "This teminal-styled typing effect is really cool!"; 
html_element = document.getElementById("text");

var i = -1, isTag;
var showAll = false;
(function type() { 
    tmp = sample_text.slice(0, ++i);

    // Does not show the last character
    if (tmp.length === sample_text.length) return; 

    // Shows the blinker 
    html_element.innerHTML = tmp;
    // `<span class="blingblin g"> &#32;</span>`; 
    
    if (showAll == true) { 
        document.getElementById("text").innerHTML = sample_text;
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
};

