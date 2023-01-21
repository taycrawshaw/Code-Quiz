let startScreen = document.querySelector("#start-screen");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time")





startBtn.addEventListener("click", function() {

    console.log("helllooooo");
    startScreen.classList.add("hide")
}
) 


function countdown() {   
    time = (Questions.length * 10)

    let timeInterval = setInterval(function() {
if (time > 1) {
    timeEl.textContent = time;
    console.log(time)
    time--;
}
else {

     timeEl.textContent = time;
     clearInterval(timeInterval);
} 
    }, 1000);
}

countdown() 