let startScreen = document.querySelector("#start-screen");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time")


let choiceScreen = document.querySelector("#questions");
let questTitle = document.querySelector("#question-title")
let choices = document.querySelector("#choices")
let lis = document.querySelectorAll("li")
time = (Questions.length * 10)
timeEl.textContent = time;
let finaltime;

let listEl = document.createElement("ol");
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let li4 = document.createElement("li")

let endscreen = document.querySelector("#end-screen");
let finalscore = document.querySelector("#final-score");

let initialInput = document.querySelector("#initials");
let submitInitials = document.querySelector("#submit"); 

let scoresList = []

let feedbackscreen = document.querySelector("#feedback");

let userProfile = []
let leaderboard = []

let currentQ = 0
let correctscore = 0; 
let currentAnswer = Questions[currentQ].correctAnswer
let userchoice 

function initScores() {
let storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));

if (storedLeaderboard !== null) {
    leaderboard = leaderboard.concat(storedLeaderboard);
}




}

function thanksScreen() {
    endscreen.classList.add("hide");
    feedbackscreen.classList.remove("hide")

   



let leaderboardTitle = document.createElement("h1")
let scoreL = document.createElement("ol");


leaderboardTitle.textContent = "Thanks for playing!"


feedbackscreen.append(leaderboardTitle);
feedbackscreen.appendChild(scoreL)


}


function timeUp() {
    console.log(correctscore);
}

function scorePage() {
    choiceScreen.classList.add("hide");
    endscreen.classList.remove("hide");
    finalscore.textContent = correctscore;
}

function countdown() {    // init countdown - 10 seconds for each
    let timeInterval = setInterval(function() {

        if (time > 0) {
    timeEl.textContent = time;
    time--;
}


else {

     timeEl.textContent = time;
     clearInterval(timeInterval);
     timeUp();
     scorePage();
} 
    }, 1000);





}




function ifDone() {

    if (currentQ < (Questions.length - 1)) {
        currentQ++;

        resetQs();
    }

 else {
   
    scorePage()
    
 }
    
}

function correctNoise () {
	let correctSound = Audio()
	correctSound.play();
}


function incorrectAnswer(lil) {    
    time -= 5;
    lil.setAttribute(
        "style", "background-color: red");
    currentQ++;
    ifDone()
    
}

function correct(liNo) {
    console.log("correccrttt!");
    correctscore++;
    liNo.setAttribute(
        "style", "background-color: green");
     
        ifDone()
        
}

function resetQs() {

    if (currentQ > 5) {
        return;
    }
 
    questTitle.textContent = Questions[currentQ].question; 
    let option1 = Questions[currentQ].choices[0];
    li1.textContent = option1;
    let option2 = Questions[currentQ].choices[1];
    li2.textContent = option2
    let option3 = Questions[currentQ].choices[2];
    li3.textContent = option3;
    let option4 = Questions[currentQ].choices[3];
    li4.textContent = option4; 


    currentAnswer = Questions[currentQ].correctAnswer
    


    li1.setAttribute(
        "style", "background-color: white");
        li2.setAttribute(
            "style", "background-color: white");  
            li3.setAttribute(
                "style", "background-color: white");  
                li4.setAttribute(
                    "style", "background-color: white");
    
}




console.log(currentAnswer);


function displayQuestion() {

 


questTitle.textContent = Questions[currentQ].question; 
let option1 = Questions[currentQ].choices[0];
li1.textContent = option1;
let option2 = Questions[currentQ].choices[1];
li2.textContent = option2
let option3 = Questions[currentQ].choices[2];
li3.textContent = option3;
let option4 = Questions[currentQ].choices[3];
li4.textContent = option4;

choices.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);



li1.addEventListener("click", function(){
    console.log(option1)
    userchoice = 0
    if (currentAnswer == 0)  {
        correct(li1)   }
          else if (currentAnswer != 0) {
            incorrectAnswer(li1);
          }
  
    }
    )
li2.addEventListener("click", function(){
    console.log(option2)
    userchoice = 1
    if (currentAnswer == 1)  {
        correct(li2)
            return;
    }
    else if (currentAnswer != 1) {
        incorrectAnswer(li2);
    }
        }
        )
    
li3.addEventListener("click", function(){
            console.log(option3)
            userchoice = 2;
            if (currentAnswer == 2)  {
                correct(li3)
                    return;
            }
            else if (currentAnswer != 2) {
                incorrectAnswer(li3); 
            }
            }
            )
li4.addEventListener("click", function(){
         
            userchoice = 3
            console.log(userchoice)
            if (currentAnswer == 3)  {
                correct(li4)
                    return;

            }
            else if (currentAnswer != 3) {
                incorrectAnswer(li4);
            }
                }
                )


}


function orderLeaderboard() {
for (let i = 0; i < 5; i++)
    if (leaderboard[i][1] > leaderboard[i-1][1]) {

        leaderboard[i][1] = leaderboard[i-1][1]
        leaderboard[i][0] = leaderboard[i-1][0]


    }
}

//let storedLeaderboard = JSON.parse(localStorage.getItem("leaderboard"));
//console.log(storedLeaderboard);


initScores()

function startGame() {
countdown() 
displayQuestion()
}



// if currentQ > questions.length || time < 1 -- end game 


startBtn.addEventListener("click", function() {

    console.log("helllooooo");
    startScreen.classList.add("hide")
    choiceScreen.classList.remove("hide")
    startGame();

}
) 

submitInitials.addEventListener("click", function(event) {
    event.preventDefault
    
    thanksScreen()

    let UserInitial = initialInput.value


userProfile.push(UserInitial, correctscore);


leaderboard.push(userProfile)



leaderboard = leaderboard.sort((a, b) => a[1] - b[1]).reverse();
localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
console.log(leaderboard);
})


