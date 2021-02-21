var startButton = document.querySelector("#startButton")
var title = document.querySelector("#title");
var instructions = document.querySelector("#wording");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var finalResults = document.querySelector("#finalResults");
var highScores = document.querySelector("#viewHighscores");
var outcome = document.querySelector('#outcome')
var questionNumber = 0;
var points = 0;
var correctAnswer;
var submitButton = document.querySelector("#submit");
var timer = document.querySelector("#timer");
var time = 75;
var form = document.querySelector("#form");

highScores.addEventListener('click', function()
{
    showHighScores();
});

document.getElementById("finalResults").style.display='none';

var myQuestions = 
[
    {
        question: "Commonly used data types DO NOT include:",
        answers: 
        {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        answers: 
        {
            a: "quotes",
            b: "curly brackets",
            c: "parenthesis",
            d: "square brackets"
        },
        correctAnswer: "parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: 
        {
            a: "numbers & strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: 
        {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis"
        },
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: 
        {
            a: "JavaScript",
            b: "terminal / bash",
            c: "for loops",
            d: "console.log"
        },
        correctAnswer: "console.log"
    },
]



startButton.addEventListener("click", function()
{
    
    instructions.remove();
    
    document.getElementById("startButton").style.display='none';
    showButtons();
    playQuiz(outcome);
    
});

function showButtons()
{
    document.getElementById("option1").style.display='block';
    document.getElementById("option2").style.display='block';
    document.getElementById("option3").style.display='block';
    document.getElementById("option4").style.display='block';
}


function playQuiz(outcome)
{
    setInterval(startTimer, 1000);
    
    if(questionNumber < myQuestions.length)
    {
        correctAnswer = myQuestions[questionNumber].correctAnswer;
        title.textContent = myQuestions[questionNumber].question;
        option1.textContent = myQuestions[questionNumber].answers.a;
        option2.textContent = myQuestions[questionNumber].answers.b;
        option3.textContent = myQuestions[questionNumber].answers.c;
        option4.textContent = myQuestions[questionNumber].answers.d;

        document.getElementById('option1').onclick = function checkAnswer()
        {
            if(option1.textContent === correctAnswer)
            {
                outcome = "Correct!";
                points = points + 10;
                questionNumber++;
                showResults(outcome, questionNumber);
                

                
            }
            else
            {
                outcome = "Wrong!";
                questionNumber++;
                showResults(outcome, questionNumber);
                time = time - 10;
                
            }
        }
        document.getElementById('option2').onclick = function checkAnswer()
        {
            if(option2.textContent === correctAnswer)
            {
                outcome = "Correct!";
                points = points + 10;
                questionNumber = questionNumber + 1;
                showResults(outcome, questionNumber);
                
            }
            else
            {
                outcome = "Wrong!";
                questionNumber++;
                showResults(outcome, questionNumber);
                time = time - 10;
                
            }
        }
        document.getElementById('option3').onclick = function checkAnswer()
        {
            if(option3.textContent === correctAnswer)
            {
                outcome = "Correct!";
                points = points + 10;
                questionNumber = questionNumber + 1;
                showResults(outcome, questionNumber);
                

                
            }
            else
            {
                outcome = "Wrong!";
                questionNumber++;
                showResults(outcome, questionNumber);
                time = time - 10;
                
            }
        }
        document.getElementById('option4').onclick = function checkAnswer()
        {
            if(option4.textContent === correctAnswer)
            {
                outcome = "Correct!";
                points = points + 10;
                questionNumber = questionNumber + 1;
                showResults(outcome, questionNumber);
                
            }
            else
            {   
                outcome = "Wrong!";
                questionNumber++;
                showResults(outcome, questionNumber);
                time = time - 10;
                
            }
        }

    }
    else
    {
        showResults(outcome, questionNumber);
        endOfGame(points);

    }
   
    
    
}

function showResults(results, questionNumber)
{
    if(questionNumber < myQuestions.length)
    {
       
       
       outcome.textContent = results;
       playQuiz(questionNumber);
        
    }
    else
    {
        
        outcome.textContent = results;
        document.getElementById("option1").style.display='none';
        document.getElementById("option2").style.display='none';
        document.getElementById("option3").style.display='none';
        document.getElementById("option4").style.display='none';
        endOfGame(points);
    }
}

function endOfGame(finalPoints)
{
    outcome.style.display = 'none';
    timer.remove();
    finalResults.style.display='block';
    title.textContent = "All done!"
    form.style.display = 'block';

    if(finalPoints <= 0)
    {
        finalResults.textContent = "Better luck next time! You didn't get any points this time.";

    }
    else
    {
        finalResults.textContent = "Your final score is " + finalPoints + ".";
    }
    
    

    submitButton.addEventListener('click', function(event)
    {
        var scores = [];
        scores.push(finalPoints);
        localStorage.setItem('scores', JSON.stringify(scores));

        finalResults.style.display = 'none';
        event.preventDefault();
        var players = [];
        players.push(initials.value);
        localStorage.setItem('players', JSON.stringify(players));
        showHighScores(finalPoints);
    });
    
    
}

function showHighScores(finalPoints)
{
    title.textContent = 'High Scores';
    var backBtn = document.querySelector("#backToGame");
    backBtn.style.display = 'block';
    
    startButton.style.display = 'none';
    wording.style.display = 'none';
    finalResults.style.display = 'none';
    initials.style.display = 'none';
    outcome.style.display = 'none';
    submitButton.style.display = 'none';
    form.style.display = 'none';

    var storedNames = JSON.parse(localStorage.getItem("players"));
    
    for (var i = 0; i < storedNames.length; i++){

        
        var storedScores = JSON.parse(localStorage.getItem("scores"));

        var playerScoreSheet = document.createElement("li");
        playerScoreSheet.textContent = storedNames[i] + ": " + storedScores[i];
        document.querySelector("#playerScores").appendChild(playerScoreSheet);

    }

    backBtn.addEventListener('click', function()
    {
        title.textContent = "Coding Quiz Challenge";
        wording.style.display = 'block';
        wording.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

        startButton.style.display = 'block';
        finalResults.style.display = 'none';
        initials.style.display = 'block';
        outcome.style.display = 'block';
        submitButton.style.display = 'none';
        form.style.display = 'none';
        backBtn.style.display = 'none';
        playerScoreSheet.style.display = 'none';
        // playQuiz();
    });

}

function clearHighScores()
{
    window.localStorage.clear();
}

function startTimer()
{
    time--;
    timer.textContent = time;

    if(time === 0)
    {
        
        endOfGame();
    }
    
}

