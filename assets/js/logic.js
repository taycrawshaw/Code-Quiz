let startScreen = document.querySelector("#start-screen");
let startBtn = document.querySelector("#start");
let timeEl = document.querySelector("#time")


let choiceScreen = document.querySelector("#questions");
let questTitle = document.querySelector("#question-title")
let choices = document.querySelector("#choices")
let lis = document.querySelectorAll("li")
time = (Questions.length * 10)
timeEl.textContent = time;

let listEl = document.createElement("ol");
let li1 = document.createElement("li")
let li2 = document.createElement("li")
let li3 = document.createElement("li")
let li4 = document.createElement("li")



let currentQ = 0
let correctscore = 0; 
let currentAnswer = Questions[currentQ].correctAnswer
let userchoice 

function countdown() {    // init countdown - 10 seconds for each
    let timeInterval = setInterval(function() {
if (time > 1) {
    timeEl.textContent = time;
    time--;
}
else {

     timeEl.textContent = time;
     clearInterval(timeInterval);
} 
    }, 1000);
}

function questdelay() {
    let timeInterval = setInterval(function() {
        if (delay > 1) {
            delay--;
        }
        else {
        
      
             clearInterval(timeInterval);
        } 
            }, 1000);



}


function wait(ms) {
    var time = new Date();
    var millisecs = time.getTime();
    var startTime = millisecs;
    var currentTime = millisecs;
    while(currentTime - startTime < ms) {
    time = new Date();
    currentTime = time.getTime();
    }
  }





function incorrectAnswer(lil) {    
    time -= 5;
    lil.setAttribute(
        "style", "background-color: red");
    currentQ++;
    resetQs()



    
}

function resetQs() {

 
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


function correct(liNo) {
    console.log("correccrttt!");
    correctscore++;
    liNo.setAttribute(
        "style", "background-color: green");
     
        currentQ++;
  
        resetQs();
        
        
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

function nextQuestion() {

}





console.log(Questions[currentQ])



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