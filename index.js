// const name1= {
//     name1:"qazi",age:10, ph:'956548465498'
// }


// const introducer = (name,shirt) => {
//     const person = {
//         name:name ,shirt:shirt, assets:10000, liability:5000, netWorth:function(){
//             return this.assets-this.liability;
//         }
//     }
//     return `hi my name is ${person.name} and ${person.shirt} and my netWorth is ${person.netWorth()}`
// }
// let sum =0;
// let double1 =[];
// const arr=[1,2,3,4,5,];
// for (const item of arr){
//     sum+=item;
//     double1.push(item*2);
// }
// // console.log(double1);
// const sqrarr =(numbers) => {
//     let arr2=[];
//     for (const item of numbers){
//         arr2.push(item ** 2 );
//     }
//     return arr2;
// }

// // console.log(sqrarr([45]));
// const phrase1='hello how are you ?';
// const howmany =(phrase2)=>{
//     let frequency ={};
//     for (const letter of phrase2 ){
//         if (letter in frequency){
//             frequency[letter]+=1;
//         }
//         else{
//             frequency[letter]=1;
//         }
//     }
//     return frequency;
// }


// const howmanywords =(phrase2)=>{
//     phrase2=phrase2.split(' ');
//     return howmany(phrase2);

// }
// let result = [2,3,4,5,6,7,8].map(item => item ** 3);

// const actors =[
//                    {name:'leo',net:10000},
//                    {name:'johny',net:100000},
//                    {name:'bruce',net:500}
//               ];



// let reddiv=document.getElementById("red");
// let yellowdiv=document.getElementById("yellow");
// let greendiv=document.getElementById("green");

// reddiv.onclick = () =>console.log("red");
// yellowdiv.onclick = () =>console.log("yellow");
// greendiv.onclick = () =>console.log("green");

const print =(message)=>{  console.log(message)}

const squares = document.querySelectorAll(".colorbutton");
const messageArea = document.getElementById("messageArea");

const timesClicked ={'rock':0,'paper':0,'scissor':0}
const keys = Object.keys(timesClicked);
let score=0;

function computerChoice (){
    return keys[Math.floor(Math.random () * 3)];
    
}

function winOrLose (userchoice,systemChoice){
    if (keys.indexOf(systemChoice)==keys.indexOf(userchoice)) return [0,"Draw"];
    else if (((keys.indexOf(userchoice)+1)%3)==keys.indexOf(systemChoice)) return [-1,"You Lost"];
    else return [1,"You Won"];

}


squares.forEach(square => {
    square.onclick = () =>{
        timesClicked[square.value]++;
        
        let tempSysChoice=computerChoice();
        let tempStatus=winOrLose(square.value,tempSysChoice);
        score+=tempStatus[0];
        messageArea.innerHTML="Computer Choice: "+tempSysChoice+"</br> "+tempStatus[1]+"</br> score: "+score;
        print(tempSysChoice);
        print(tempStatus)
         print(score);
         print(timesClicked);

    }
})



function clearGame(){
    squares.forEach(square=>{
        timesClicked[square.value]=0;     
        
    })
    score=0;
    messageArea.innerHTML="";
}

const clearGameButton= document.getElementById("clearGameButton");
clearGameButton.onclick=()=>clearGame();












