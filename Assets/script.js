var startButton = document.querySelector("#startButton")
var title = document.querySelector("#title");
var instructions = document.querySelector("#wording");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var finalResults = document.querySelector("#finalResults")
var highScores = document.querySelector("#viewHighscores");
var questionNumber = 0;
var points = 0;
var correctAnswer;

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
    playQuiz();
    
});

function showButtons()
{
    document.getElementById("option1").style.display='block';
    document.getElementById("option2").style.display='block';
    document.getElementById("option3").style.display='block';
    document.getElementById("option4").style.display='block';
}


function playQuiz()
{
    
    
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
                points = points - 10;
                questionNumber++;
                showResults(outcome, questionNumber);
                
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
                points = points - 10;
                questionNumber = questionNumber + 1;
                showResults(outcome, questionNumber);
                
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
                points = points - 10;
                questionNumber = questionNumber + 1;
                showResults(outcome, questionNumber);
                
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
                points = points - 10;
                questionNumber = questionNumber + 1;
                showResults(outcome, questionNumber);
                
            }
        }

    }
    else
    {
        showResults(outcome, questionNumber);
        endOfGame(points);

    }
   
    

    
    
}

function endOfGame(finalPoints)
{
    document.getElementById("finalResults").style.display='block';
    title.textContent = "Great Job!"

    if(finalPoints <= 0)
    {
        finalResults.textContent = "Better luck next time! You didn't get any points this time.";

    }
    else
    {
        finalResults.textContent = "Your total points for this round was: " + finalPoints;
    }
    
    
}

function showResults(results, questionNumber)
{
    if(questionNumber < myQuestions.length)
    {
       
       var outcome = document.querySelector('#outcome')
       outcome.textContent = results;
       playQuiz(questionNumber);
        
    }
    else
    {
        var outcome = document.querySelector('#outcome')
        outcome.textContent = results;
        document.getElementById("option1").style.display='none';
        document.getElementById("option2").style.display='none';
        document.getElementById("option3").style.display='none';
        document.getElementById("option4").style.display='none';
        endOfGame(points);
    }
}




