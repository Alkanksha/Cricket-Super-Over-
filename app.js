//team score
//team name
//team runs
var team1={
    name:"SRH",
    score:0,
    runs:[]
};
var team2={
    name:"RCB",
    score:0,
    runs:[]
};
var score=[0,1,2,3,4,5,6]
console.log(team1)
console.log(team2)

var toss;
window.onload=()=>{
     selectToss();
     updateName();
     updateButtonText();
     updateScores();
}
function selectToss(){
    toss=Math.round(Math.random())+1
    console.log(toss)
}
function updateName(){
    console.log("team 1 name:"+team1.name);
    console.log("team 2 name:"+team2.name);
}
function updateButtonText(){
    console.log(`${toss===1?team1.name:team2.name} Batting`);
    if(team1.runs.length==6 && team2.runs.length==6){
         console.log("DRAW");
    }else{
        toss=team1.runs.length==6?2:
        team2.runs.length===6?1:toss;
    }
}
strike=()=>{
    //console.log("working")
    var runs=score[Math.floor(Math.random()*score.length)]
    console.log(runs)
    if(toss==1){
        team1.runs.push(runs);
        console.log(runs)
        team1.score=calculateScore(team1.runs)
    }else{
        team1.runs.push(runs);
        console.log(runs)
        team2.score=calculateScore(team2.runs)
    }
    updateScores();
}
function updateScores(){
    console.log("team 1 score:"+team1.score)
    console.log("team 2 score:"+team2.score)
}
var calculateScore=(runs)=>{
    return runs.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
}
