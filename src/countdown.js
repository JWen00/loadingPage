var date = new Date(2021, 6, 15).getTime();
var refresh = setInterval(() => {
    var now = new Date().getTime();
    var distance = date - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-days").innerHTML = days;
    document.getElementById("countdown-hours").innerHTML = hours;
    document.getElementById("countdown-minutes").innerHTML = minutes;
    document.getElementById("countdown-seconds").innerHTML = seconds;
    if (date - now == 0) { 
        document.getElementById("countdown-msg").innerHTML = "Finished!"
    }
}, 1000);
