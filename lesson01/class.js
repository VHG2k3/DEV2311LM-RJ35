class Person{
    constructor(){
        this.name ="Vu Huong Giang";
        this.age = 20;
    }

    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    setAge(age){
        this.age=age;
    }
}
var person = new Person();
person.setAge(30);
console.log("Ten: "+person.getName());
console.log("Tuoi: "+person.getAge());

class Student extends Person{
    constructor(name,age,StudentID){
        super(name,age);
        this.studentId="SV01";
    }
    getStudentInfor(){
        return "Ten: "+this.getName()+" Tuoi: "+this.getAge()+" Ma SV:"+this.studentId;
    }
}
var student = new Student();
console.log(student.getStudentInfor());
