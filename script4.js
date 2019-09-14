var john={
    fullName:"John Smith",
    mass:89,
    height:1.72,
    bmi:function () {
        return this.mass/(this.height*this.height)
    }
}

var mark={
    fullName:"Mark Wahlberg",
    mass:101,
    height:1.84,
    bmi:function () {
        return this.mass/(this.height*this.height)
    }
}

if(mark.bmi()>john.bmi()){
    console.log(mark.fullName,mark.bmi());
}
else if(john.bmi()>mark.bmi()){
    console.log(john.fullName,john.bmi());
}
else{
    console.log("Draw");
}