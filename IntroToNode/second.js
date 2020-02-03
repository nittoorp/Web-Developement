var scores1=[10,20,43,90,24,99,44]
var scores2=[50,60,43,90,24,99,44]

function average(score){
    var tot=0;
    for(var i=0;i<score.length;i++){
        tot+=score[i];
    }
    return Math.round(tot/score.length);
}

console.log(average(scores1))
console.log(average(scores2))