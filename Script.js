let Pscore = document.querySelector('#Pscore');
let Cscore = document.querySelector('#Cscore');
let winner = document.querySelector('.Winner');
let playerHand = document.querySelector('.PlayerHand');
let pHand = document.querySelector('.Phand');
let computerHand = document.querySelector('.ComputerHand');
let button =  document.getElementsByTagName('button')
let cHand = document.querySelector('.Chand');
let popup = document.querySelector('.popup')
let computerMove = ['rock','paper','scissors']
let Random = '';
let playerScore = 0;
let computerScore = 0;
let sound = new Audio()
sound.src = './Assets/click.mp3'
function pHands(value){
//    pHand.style.animation = "shakePlayer 2s ease"

   pHand.src = `./Assets/${value}.png` 
   pHand.style.animation = "shakePlayer 2s ease"
   cHand.style.animation = "shakeComputer 2s ease"
 
   cHands()
   logic(value,Random)
   sound.play()
}

function cHands(){
    // let Random = computerMove.Math.random() * 3;
    Random = [computerMove[Math.floor(Math.random() * computerMove.length)]];
    cHand.src = `./Assets/${Random}.png` 
    
}

function logic(p,c){
    //console.log(c)
    if(p=='paper'&&c=='rock'||p=='scissors'&&c=='paper'||p=='rock'&&c=='scissors'){
        winner.textContent = 'you win' ;
        Pscore.textContent = ++playerScore
        
    }else if(p=='rock'&&c=='paper'||p=='paper'&&c=='scissors'||p=='scissors'&&c=='rock'){
        winner.textContent = 'computer win' ;
        Cscore.textContent= ++computerScore;
        
    }else{
        winner.textContent = 'tie' ;
    }
    if(computerScore==5||playerScore==5){
        for(i=0;i<button.length;i++){
            button[i].style.display = "none";
        }
        if(computerScore==5){
            popup.children[0].textContent='You loss';
        }if(playerScore==5){
            popup.children[0].textContent='You Win'
         
        }

        popup.style.display='flex'; 
        pHand.style.display='none';
        cHand.style.display='none';
        winner.style.display='none'
                  

}

}





// playerHand.style.animation = "shakePlayer"





















/*sicssor -> paper = sicssor wins
rock -> scissor = rock wins
paper -> rock = paper wins
*/