function openProject(evt, projectName) {
    var content = document.getElementsByClassName("project-container");
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
  }