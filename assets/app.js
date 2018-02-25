(function() {
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
      {
        question: "Who is the strongest?",
        answers: {
          a: "Superman",
          b: "The Terminator",
          c: "Waluigi, obviously"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the best site ever created?",
        answers: {
          a: "SitePoint",
          b: "Simple Steps Code",
          c: "Trick question; they're both the best"
        },
        correctAnswer: "c"
      },
      {
        question: "Where is Waldo really?",
        answers: {
          a: "Antarctica",
          b: "Exploring the Pacific Ocean",
          c: "Sitting in a tree",
          d: "Minding his own business, so stop asking"
        },
        correctAnswer: "d"
      },

      {
        question: "Which hormone controls the supply of sugar between muscles and blood? ",
        answers: {
          a: "insulin",
          b: "protein-c",
          c: "protein-s",
          d: "peptides"
        },
        correctAnswer: "a"
      },

      {
        question: "In Japanese, what is the word for goodbye?",
        answers: {
          a: "suzuki",
          b: "jitsu",
          c: "Sayonara.",
          d: "chao"
        },
        correctAnswer: "c"
      },

      {
        question: "whose statue in Red Square was pulled down in 1991?",
        answers: {
          a: "putin",
          b: "Breznez",
          c: "yeltsin",
          d: "lenin"
        },
        correctAnswer: "d"
      }

    // {
    //     question: "What do you call the smell which wine gives off?",
    //     answers: {
    //       a: "season",
    //       b: "bouquet",
    //       c: "meme",
    //       d: "sanofi"
    //     },
    //     correctAnswer: "b"
    //   }

    ];
  
    // display quiz right away
    buildQuiz();
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
  })();