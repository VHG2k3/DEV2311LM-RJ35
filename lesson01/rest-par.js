//Rest parameter
//Cú pháp: ...namepara
//  là số lượng tham số tùy biến
function add(num1,num2,...num){
    tong=num1+num2;
    num.forEach(element => {
        tong+=element;
    });
    return tong;
}
console.log(add(1,2,3,4));
console.log(add(1,2,3));
console.log(add(1,2,3,10,25,30));
