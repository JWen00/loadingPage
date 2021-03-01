var sample_text = "This teminal-styled typing effect is <b>really</b> cool!"; 
var html_element = document.getElementById("text");
var blinker = document.getElementById("blinker");

var i = -1, isTag;
var showAll = false;
var typer = setInterval(function type() { 
    tmp = sample_text.slice(0, ++i);

    // Does not show the last character
    if (tmp.length === sample_text.length) return; 

    // Shows the blinker 
    html_element.innerHTML = tmp + "|";
    if (tmp == sample_text.slice(0, sample_text.length - 1)) { 
        showAll = true;
    } 

    if (showAll) { 
        html_element.innerHTML = sample_text;
    }


    // Check if we're approaching a 'tag' 
    var last_char = tmp.slice(-1);
    if (last_char === "<") isTag = true; 
    if (last_char === ">") isTag = false; 
    if (isTag) {
        type();
    } else setTimeout(type, 70); 
}, 1200);


document.addEventListener("click", toggle);
function toggle() { 
    showAll = true;
};

