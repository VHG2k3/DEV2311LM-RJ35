//Lấy ra một số thành phần trong mảng/ đối tượng
var arr=[1,2,3,4,6,5,];
var [a,b]=arr;
console.log("a=",a);
console.log("b=",b);
var [a,b,c]=arr;
console.log("a=",a);
console.log("b=",b);
console.log("c=",c);

//Doi tuong
var objPerson={
    name:"Giang",
    age:20,
    address:"Ha Noi"
}
var {name,address,age} = objPerson;
console.log("Name:"+name);
console.log("Age:",age);
