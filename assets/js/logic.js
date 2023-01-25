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

let result = document.querySelector("#result");


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

   



let thanksTitle = document.createElement("h1")
let scoreL = document.createElement("ol");


thanksTitle.textContent = "Thanks for playing!"


feedbackscreen.append(thanksTitle);
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
    
 const correctSound = new Audio('./assets/sfx/correct.wav');
 
 correctSound.play();

}
function incorrectNoise () {
    
    const incorrectSound = new Audio('./assets/sfx/incorrect.wav');
    incorrectSound.play();

   }


function incorrectAnswer() { 
   incorrectNoise ()   
    time -= 10;
        result.textContent = "Incorrect!";
        result.setAttribute("style", "color: red; font-weight: bold; font-size: 40px; text-align: center;")
    ifDone()
    
}

function correct() {
   
    correctscore++;
    correctNoise ()
    result.textContent = "Correct!";
    result.setAttribute("style", "color: green; font-weight: bold; font-size: 40px; text-align: center;")
ifDone()
        
}

function resetQs() {

    if (currentQ > Questions.length) {
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
    
    colorChoices()


}




function colorChoices() {
// initial set base color 
    li1.setAttribute(
        "style", "color: white; background-color: purple; margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold");
        li2.setAttribute(
            "style", "color: white;background-color: purple; margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold");  
            li3.setAttribute(
                "style", "color: white; background-color: purple; margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold");  
                li4.setAttribute(
                    "style", "color: white; background-color: purple; margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold");
    
// set mouse on color change 

li1.addEventListener('mouseover', (event) => {
    li1.setAttribute("style", "background-color: rgb(126, 126, 68); margin: 20px; padding: 15px ; border-radius: 25px; font-weight: bold; cursor: pointer")
});
li2.addEventListener('mouseover', (event) => {
    li2.setAttribute("style", "background-color: rgb(126, 126, 68); margin: 20px; padding: 15px ; border-radius: 25px; font-weight: bold; cursor: pointer")
});
li3.addEventListener('mouseover', (event) => {
    li3.setAttribute("style", "background-color: rgb(126, 126, 68); margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold; cursor: pointer")
});
li4.addEventListener('mouseover', (event) => {
    li4.setAttribute("style", "background-color: rgb(126, 126, 68); margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold; cursor: pointer")
});

// set mouse off color change 

li1.addEventListener('mouseout', (event) => {
    li1.setAttribute("style", "color: white; background-color: purple; margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold")
});
li2.addEventListener('mouseout', (event) => {
    li2.setAttribute("style", "color: white; background-color: purple; margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold")
});
li3.addEventListener('mouseout', (event) => {
    li3.setAttribute("style", "color: white;background-color: purple; margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold")
}); 
li4.addEventListener('mouseout', (event) => {
    li4.setAttribute("style", "color: white;background-color: purple; margin: 20px; padding: 15px; border-radius: 25px; font-weight: bold")
});

}


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

colorChoices()

li1.addEventListener("click", function(){
  
    userchoice = 0
    if (currentAnswer == 0)  {
        correct(li1)   }
          else if (currentAnswer != 0) {
            incorrectAnswer(li1);
          }
  
    }
    )
li2.addEventListener("click", function(){
 
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
    let capitalInitial = UserInitial.toUpperCase()

userProfile.push(capitalInitial, correctscore);


leaderboard.push(userProfile)


// sort leaderboard array by largest first, converted to JSON and then reuploaded to local storage
leaderboard = leaderboard.sort((a, b) => a[1] - b[1]).reverse();
localStorage.setItem("leaderboard", JSON.stringify(leaderboard))
console.log(leaderboard);
})


