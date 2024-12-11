const delay = 3000; // 3 seconds
let timeRemaining = delay / 1000;

const countdown = setInterval(() => {
    console.log(`Time remaining: ${timeRemaining--} seconds`);
    if (timeRemaining < 0) {
        clearInterval(countdown);
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Generated Random Number:", randomNumber);
    }
}, 1000);
