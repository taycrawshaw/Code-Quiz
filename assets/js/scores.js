let leaderboard = [];
let storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));
let clearButton = document.querySelector("#clear");

function displayScores() {
    
    let scoreOl = document.querySelector("#highscores")
    
    for (i=0; i < 5; i++) {
        let li = document.createElement("li");
    
        li.textContent = leaderboard[i][0] + ": " + leaderboard[i][1]
    
        scoreOl.appendChild(li)
    }
    }



function clearLocalStorage() {
        localStorage.clear();
        location. reload()
    }



if (storedLeaderboard !== null) {
    leaderboard = leaderboard.concat(storedLeaderboard);
}


clearButton.addEventListener("click", function() {
    clearLocalStorage()
})





    displayScores()