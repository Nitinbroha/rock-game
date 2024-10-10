let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara =document.querySelector("#user-score")
const compscorepara =document.querySelector("#comp-score")
const reset =document.querySelector("#resetbtn")



const genCompChoice = () =>{
    const options =["rock" , "paper" , "scissors"]
   const randIdx = Math.floor(Math.random()*3)
   return options[randIdx]

}

// const resetGame = () => {
//     // turn0 =true ;
//     resetbtn.addEventListener("click",resetGame)
// }


const drawGame = () =>{
    console.log("game was draw")
       msg.innerText = "Game draw  "
       msg.style.backgroundColor ="green"
}

    const showWinner = (userWin) => {
        if(userWin){
            userscore ++
            userscorepara.innerText=userscore 
            console.log("win");
            msg.innerText = "You Win"
            msg.style.backgroundColor ="skyblue";
            msg.style.color ="black";
        }
        else{
            compscore ++
            compscorepara.innerText=compscore 
            console.log("lose");
             msg.innerText = "You lose"
             msg.style.backgroundColor ="orange"
        }

    }



const playGame = (userChoice) =>{
    console.log("user =",userChoice)
 const compChoice = genCompChoice()
 
 console.log("comp =",compChoice)

 if (userChoice === compChoice){
    drawGame();
 }
else{
    let userWin = true ;
    if(userChoice === "rock")
    {
      userWin =  compChoice ==="paper" ? false :true
    }else if(userChoice === "paper")

        {
            userWin = compChoice ==="scissors" ? false: true
        }
        else{
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin);
}
 
 }



choices.forEach ( (choice) =>
{
    choice.addEventListener("click" ,() => { 
        const userChoice =choice.getAttribute("id")
        playGame(userChoice)
    });
});

