var johnScore1=89;
var johnScore2=120;
var johnScore3=103;
var johnAvgScore=(johnScore1+johnScore2+johnScore3)/3;

var markScore1=116;
var markScore2=94;
var markScore3=123;

var markAvgScore=(markScore1+markScore2+markScore3)/3;

var maryScore1=97;
var maryScore2=134;
var maryScore3=105;

var maryAvgScore=(maryScore1+maryScore2+maryScore3)/3;

if(johnAvgScore===markAvgScore){
    if (johnAvgScore===maryAvgScore) {
        console.log("Draw");
    }
    else if(maryAvgScore>johnAvgScore){
        console.log("Mary");
    }
    else{
        console.log("Draw");
    }
}
else if (johnAvgScore>markAvgScore) {
    if (johnAvgScore===maryAvgScore) {
        console.log("Draw");
    } else if (johnAvgScore>maryAvgScore) {
        console.log("John");
    }
    else{
        console.log("Mary");
    }
    
}
else{
    if (markAvgScore===maryAvgScore) {
        console.log("Draw");
    } else if (markAvgScore>maryAvgScore) {
        console.log("Mark");
    }
    else{
        console.log("Mary");
    }
}