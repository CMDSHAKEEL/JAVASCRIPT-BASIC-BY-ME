
function fullname(fname ="cmd",lname ="shakeel"){
    var a =fname +" "+lname;
    return a;
}
var fn = fullname("cmd" ,"shakeel")
console.log(fn);

//method 2

function sub(maths,physic,chemistery){
    var s =maths+physic+chemistery
    return s;
}
 
function per(tt){
    var per = tt/300*100
    console.log(per)
}

console.log("percenrage is :-")

var total = sub(55,55,55)
per(total);