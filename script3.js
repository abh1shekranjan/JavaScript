

var finalAmount=function(){
    var bill=[124,48,268];
    var tip=[];
    for (let i = 0; i < bill.length; i++) {
        var element = bill[i];
        if(element<50){
            tip.push(element*0.20);
        }
        else if(element>=50&&element<200){
            tip.push(element*0.15);
        }
        else{
            tip.push(element*0.10);
        }
    }
    var finalList=[];
    for (let i = 0; i < bill.length; i++) {
        var element = bill[i]+tip[i];
        finalList.push(element);
    }
    return finalList;
}
console.log(finalAmount());
