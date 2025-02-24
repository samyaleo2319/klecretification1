// function Details() {
//     this.name="Darshana";
//     this.age=21;
//     this.adderess="Borgaon";
// }
// let user=new Details();
// console.log(user.name);
//custom consructor
function Details(naam,umar,place) {
    this.name=naam;
    this.age=umar;
    this.adderess=place;
    this.discription=function () {
        return (`my name is ${this.name} ,my age is${this.age}`)
    }
}
let user=new Details("Darshana",21,"borgaon");
let user1=new Details("Sammrudhi",21,"Manjari");
let user2=new Details("Sanika",21,"borgaon")
console.log(user2);
console.log(user2.discription());
console.log(user);
console.log(user.discription());
console.log(user1);
console.log(user1.discription());

