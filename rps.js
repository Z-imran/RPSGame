let player_score = 0;
let comp_score = 0;

function getCompChoice() {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            return "ROCK";
            break;
        case 1: 
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Choose: ROCK || PAPER || SCISSORS");
    return choice.toUpperCase();
}

function playRound(human_choice, comp_choice) {
    if ((human_choice == "ROCK" && comp_choice == "SCISSORS") ||
        (human_choice == "PAPER" && comp_choice == "ROCK") || 
        (human_choice == "SCISSORS" && comp_choice == "PAPER")) {
            player_score++;
    } else if ( (human_choice == "ROCK" && comp_choice == "PAPER") ||
                (human_choice == "PAPER" && comp_choice == "SCISSORS") || 
                (human_choice == "SCISSORS" && comp_choice == "ROCK")) {
            comp_score++;
    }
}



function isGameOver() {
    return player_score === 5 || comp_score === 5;
}

function playGame() {
    while (!isGameOver()) {
        playRound(getHumanChoice(), getCompChoice());
        console.log(`Player Score: ${player_score}`);
        console.log(`Comp   Score: ${comp_score}`);
    }
    if (player_score === 5) {
        console.log("You Won");
    } else {
        console.log("You Lost");
    }
}

playGame();