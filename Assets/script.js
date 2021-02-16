var startButton = document.querySelector("#startButton")
var title = document.querySelector("#title");
var instructions = document.querySelector("#wording");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");


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

// window.onload=function()
// {
//     document.getElementById("option1").style.display='none';
//     document.getElementById("option2").style.display='none';
//     document.getElementById("option3").style.display='none';
//     document.getElementById("option4").style.display='none';
  
// }

function showButtons()
{
    document.getElementById("option1").style.display='block';
    document.getElementById("option2").style.display='block';
    document.getElementById("option3").style.display='block';
    document.getElementById("option4").style.display='block';
}



startButton = document.addEventListener("click", function()
{
    
    startQuiz();
    
});

function startQuiz()
{
    document.getElementById("startButton").style.display='none';
    showButtons();
    var points = 0;

    var i = 0;

    // for(i = 0 ; i < 1 ; i++)
    // {
        instructions.remove();
        
        title.textContent = myQuestions[i].question;
        option1.textContent = myQuestions[i].answers.a;
        option2.textContent = myQuestions[i].answers.b;
        option3.textContent = myQuestions[i].answers.c;
        option4.textContent = myQuestions[i].answers.d;

        // console.log(myQuestions[i].correctAnswer)

        document.getElementById('option1').onclick = function checkAnswer()
        {
            if(option1.textContent === myQuestions[i].correctAnswer)
            {
                console.log("YAYY");
            }
            else
            {
                console.log("That sucks");
            }
        }
        document.getElementById('option2').onclick = function checkAnswer()
        {
            if(option2.textContent === myQuestions[i].correctAnswer)
            {
                console.log("YAYY");
            }
            else
            {
                console.log("That sucks");
            }
        }
        document.getElementById('option3').onclick = function checkAnswer()
        {
            if(option3.textContent === myQuestions[i].correctAnswer)
            {
                console.log("YAYY");
            }
            else
            {
                console.log("That sucks");
            }
        }
        document.getElementById('option4').onclick = function checkAnswer()
        {
            console.log(myQuestions[i].correctAnswer);
            if(option4.textContent === myQuestions[i].correctAnswer)
            {
                console.log("YAYY");
            }
            else
            {
                console.log("That sucks");
            }
        }

    // }
    
    
    
    
}

function showResults()
{

}