let userScore=0;
let computerScore=0;
let userScoreSpan=document.getElementById("user-score");
let computerScoreSpan=document.getElementById("comp-score");
let scoreBoardDiv=document.querySelector(".score-board");
let resultDiv=document.querySelector(".result > p "); 
const rockdiv= document.getElementById("r");
const paperdiv=document.getElementById("p");
const scissorsdiv=document.getElementById("s");

function getComputerChoice(){
    let choices=['r','p','s'];
    let randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}


function win(userChoice, computerChoice){
    userScore++;
    console.log("winscoreuser");
    userScoreSpan.innerHTML=userScore;
    computerScoreSpan.innerHTML=computerScore;
    resultDiv.innerHTML=userChoice+" beats "+ computerChoice +" you win ";
}

function lose(userChoice,computerChoice){
    computerScore++;
    console.log("winscorecomputer");
    userScoreSpan.innerHTML=userScore;
    computerScoreSpan.innerHTML=computerScore;
    resultDiv.innerHTML=userChoice+" beats "+ computerChoice +" you losse ";
}



function game(userChoice){
    let computerChoice=getComputerChoice();
    if(userChoice===computerChoice){
        console.log("wereevenbitch");

    }else if(userChoice>computerChoice){
        console.log("userwins");
        win(userChoice,computerChoice);
    }else if(userChoice<computerChoice){
        console.log("userlose");
        lose(userChoice,computerChoice);
    }

}


function main(){

    rockdiv.addEventListener('click', function(){game("r");})
    paperdiv.addEventListener('click', function(){game("p");})
    scissorsdiv.addEventListener('click', function(){game("s");})
}

main();