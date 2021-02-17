var startButton = document.querySelector("#startButton")
var title = document.querySelector("#title");
var instructions = document.querySelector("#wording");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var questionNumber = 0;
var points = 0;
var correctAnswer;

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

function showButtons()
{
    document.getElementById("option1").style.display='block';
    document.getElementById("option2").style.display='block';
    document.getElementById("option3").style.display='block';
    document.getElementById("option4").style.display='block';
}

startButton = document.addEventListener("click", function()
{
    
    questionNumber = 0;
    playQuiz();
    
});

function showQuestion(num)
{
    document.getElementById("startButton").style.display='none';
    showButtons();

    correctAnswer = myQuestions[num].correctAnswer;
    instructions.remove();
    
    title.textContent = myQuestions[num].question;
    option1.textContent = myQuestions[num].answers.a;
    option2.textContent = myQuestions[num].answers.b;
    option3.textContent = myQuestions[num].answers.c;
    option4.textContent = myQuestions[num].answers.d;

}

function playQuiz()
{
    if(questionNumber < myQuestions.length)
    {
        showQuestion(questionNumber);

        document.getElementById('option1').onclick = function checkAnswer()
        {
            if(option1.textContent === correctAnswer)
            {
                outcome = "Correct!";
                points = points + 10;
                questionNumber++;
                showResults(outcome);
                
            }
            else
            {
                outcome = "Wrong!";
                points = points - 10;
                questionNumber++;
                showResults(outcome);
                
            }
        }
        document.getElementById('option2').onclick = function checkAnswer()
        {
            if(option2.textContent === correctAnswer)
            {
                outcome = "Correct!";
                points = points + 10;
                questionNumber = questionNumber + 1;
                showResults(outcome);
                
            }
            else
            {
                outcome = "Wrong!";
                points = points - 10;
                questionNumber = questionNumber + 1;
                showResults(outcome);
                
            }
        }
        document.getElementById('option3').onclick = function checkAnswer()
        {
            if(option3.textContent === correctAnswer)
            {
                outcome = "Correct!";
                points = points + 10;
                questionNumber = questionNumber + 1;
                showResults(outcome);
                
            }
            else
            {
                outcome = "Wrong!";
                points = points - 10;
                questionNumber = questionNumber + 1;
                showResults(outcome);
                
            }
        }
        document.getElementById('option4').onclick = function checkAnswer()
        {
            if(option4.textContent === correctAnswer)
            {
                outcome = "Correct!";
                points = points + 10;
                questionNumber = questionNumber + 1;
                showResults(outcome);
                
            }
            else
            {   
                outcome = "Wrong!";
                points = points - 10;
                questionNumber = questionNumber + 1;
                showResults(outcome);
                
            }
        }

    }
    else
    {
        showResults(outcome);
    }
   
    

    
    
}

function showResults(results)
{
    if(questionNumber < myQuestions.length)
    {
       
       var outcome = document.querySelector('#outcome')
       outcome.textContent = results;
       playQuiz();
        
    }
    else
    {
        var outcome = document.querySelector('#outcome')
        outcome.textContent = results;
    }
}

