var containers = document.getElementsByClassName('project-container');
for (let i = 0; i < containers.length; ++i) { 
    containers[i].classList.add('section-' + String(i))
    var elem = document.querySelector('.section-' + String(i)); 
    elem.addEventListener('scroll', (e) => { 
        let lastKnownScrollPosition = window.scrollY;
        console.log(lastKnownScrollPosition)
    });
}
// var smoothScrollDown = (target, duration) => { 
//     var target = document.querySelector(target); 
//     var targetPos = target.getBoundingClientRect().top; 
//     console.log(target);
//     var startPos = window.pageYOffset; 
//     console.log(startPos, targetPos);
//     var distance = targetPos - startPos; 
//     var startTime = null; 

//     var animation = (currentTime) => { 
//         if (startTime === null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime; 
//         var run = ease(timeElapsed, startPos, distance, duration); 
//         window.scrollTo(0, run); 
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     // http://www.gizma.com/easing/
//     var ease = (t, b, c, d) => {
//         t /= d/2;
//         if (t < 1) return c/2*t*t*t + b;
//         t -= 2;
//         return c/2*(t*t*t + 2) + b;
//     };

//     requestAnimationFrame(animation);
// }



