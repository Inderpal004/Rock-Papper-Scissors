let choices = document.querySelectorAll(".block-img");
let result = document.querySelector(".winner");
let userScoreText = document.getElementById("userScore");
let compScoreText = document.getElementById("compScore");
let loadingScreen = document.querySelector(".loading-screen");

let userScore = 0;
let compScore = 0;

const compChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
};

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        loadingScreen.style.visibility = "visible";

        setTimeout(() => {
            let userChoice = choice.getAttribute("id");
            let computerChoice = compChoice();

            if (userChoice === computerChoice) {
                result.innerText = "It's a Draw, Play Again!";
                result.style.backgroundColor = "gray";
            } else if (userChoice === "rock" && computerChoice === "paper") {
                result.innerText = "Computer Won, Paper Covers Rock";
                compScore++;
                compScoreText.innerText = compScore;
                result.style.backgroundColor = "red";
            } else if (userChoice === "rock" && computerChoice === "scissors") {
                result.innerText = "User Won, Rock Breaks Scissors";
                confettiEffect();
                userScore++;
                userScoreText.innerText = userScore;
                result.style.backgroundColor = "#0fb80f";
            } else if (userChoice === "paper" && computerChoice === "rock") {
                result.innerText = "User Won, Paper Covers Rock";
                confettiEffect();
                userScore++;
                userScoreText.innerText = userScore;
                result.style.backgroundColor = "#0fb80f";
            } else if (userChoice === "paper" && computerChoice === "scissors") {
                result.innerText = "Computer Won, Scissors Cut Paper";
                compScore++;
                compScoreText.innerText = compScore;
                result.style.backgroundColor = "red";
            } else if (userChoice === "scissors" && computerChoice === "rock") {
                result.innerText = "Computer Won, Rock Breaks Scissors";
                compScore++;
                compScoreText.innerText = compScore;
                result.style.backgroundColor = "red";
            } else if (userChoice === "scissors" && computerChoice === "paper") {
                result.innerText = "User Won, Scissors Cut Paper";
                confettiEffect();
                userScore++;
                userScoreText.innerText = userScore;
                result.style.backgroundColor = "#0fb80f";
            }

            loadingScreen.style.visibility = "hidden"; 

        }, 1500);
    });
});

let count = 10;
let defaults = {
  origin: { y: 0.9 }
};

const colors = ['#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF']

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio),
    colors: colors 
  });
}

function confettiEffect() {
  const duration = 600;
  const end = Date.now() + duration;

  (function frame() {
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}
