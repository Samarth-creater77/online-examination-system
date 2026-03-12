let timeLeft = 600; // 10 minutes

function startTimer() {
    const timerDisplay = document.getElementById('timer');
    const countdown = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        
        if (timerDisplay) timerDisplay.innerHTML = minutes + ":" + seconds;

        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            submitExam(); 
        } else {
            timeLeft--;
        }
    }, 1000);
}

function submitExam() {
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    
    // If answer is right, score is 1. If wrong or empty, score is 0.
    if (q1 && q1.value === "correct") {
        score = 1;
    }
    
    // Send the score to the result page
    window.location.href = "result.html?score=" + score;
}

// Start timer only when on the exam page
if (window.location.pathname.includes('exam.html')) {
    window.onload = startTimer;
}
