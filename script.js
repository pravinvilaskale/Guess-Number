//document.addEventListener("keydown", (e) => { console.log(e); })

let randomNumber = Math.floor(Math.random() * 20);
//alert(randomNumber);
let score = 20;
let highScore = 0;

//play game
document.querySelector(".check").addEventListener("click", () => {
    if (score > 1) {
        score--;
        let guess = Number(document.querySelector(".guess-number").value);
        console.log(guess);
        if (guess > randomNumber) {
            document.querySelector(".afterguess").textContent = "📈 Too High";
        }
        else if (guess < randomNumber) {
            document.querySelector(".afterguess").textContent = "📉 Too Low";
        }
        else {
            document.querySelector(".afterguess").textContent = "🎉 Correct Answer!";
            document.querySelector(".random-number").textContent = String(randomNumber);     
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".guess-number").style.backgroundColor = "#60b347";
            if (score > highScore) {
                highScore = score;
                document.querySelector(".high-score").textContent = "🏆 HighScore: " + score;
            }
        }
        document.querySelector(".score").textContent = "💯 Score: " + score;
    } else {
        document.querySelector(".afterguess").textContent = "💥 You lost the game ";
    }
});

//Restart game
document.querySelector(".again").addEventListener("click", () => {
    //alert("Hey..");
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess-number").style.backgroundColor = "#222";
    randomNumber = Math.floor(Math.random() * 20);
    score = 20;
    document.querySelector(".afterguess").textContent = "Start Guessing..";
    document.querySelector(".score").textContent = "💯 Score: 20";
    document.querySelector(".random-number").textContent = "?";
});





