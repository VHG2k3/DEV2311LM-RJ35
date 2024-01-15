//Tham so mac dinh
// tham so tuy chon
function add(num1, num2=1){
    return(num1+num2);
}
//su dung
console.log(add(100)); // tham so num2 mac dinh=1
console.log(add(100,200));

function show(name){
    name=name || "Devmaster";
    console.log("Wellcome to,",name);
}
show();
show("Giang");