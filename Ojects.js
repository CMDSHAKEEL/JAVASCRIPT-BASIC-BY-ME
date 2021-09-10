var a= {
    fname : 'cmd',
    sname : 'shakeel',
    phonenumber : 9581477386,
    email : 'cmdshakeel21@gmail.com'
}
var b = {
    fname : 'cmd',
    sname : 'abid',
    phonenumber : 8374757047,
    email : 'cmdshakeel3377@gmail.com',
    //can use Arrays innit
    favMovies : ['bahubali','dhoom-3','sahoo','Dangal','pk'],
    //can use Functions in it
    salary : function(){
        return 35000;
    },
    fullname : function(){
        return this.fname +" "+this.sname
    },
    // creating objects inside the object
    living : {
        city : 'Adoni',
        state : 'AndhraPradesh'
    }
}
console.log(a,"two objects",b);
console.log(b.favMovies[0]);
console.log(b.salary());
console.log(b.fullname());
console.log(b.living.state);