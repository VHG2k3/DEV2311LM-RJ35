var x=10;
if(x==10){
    var x=15;
    console.log("x bên trong if: ",x);
    var y=100;
    console.log("y ben trong if:",y);
}
console.log("x bên trong if: ",x);
console.log("y ben trong if:",y);

function test(){
    var z=100;
    console.log("z ben trong ham",z);
}
test();
console.log("z ben ngoai ham",z);
