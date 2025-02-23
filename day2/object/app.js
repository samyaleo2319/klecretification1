//object
// let person={
//     name:'Darshana',
//     age:21,
//     favcolor:'black'
// }
// //console.log(person);
// console.log(person.age);
// person.name='Darshana Bhadule';
// console.log(person);

// person.gender='female';
// console.log(person);
//delete
// delete person.favcolor;
// console.log(person);

//advance object
let person = {
    name:'Darshana',
    age:21,
    favcolor:'black',
    fun:function (){
        return('my nam is ${this . name} and my age is ${this.age}');

    },
    newobj:{
        gender:"female",
        address: "kle clg"
    }
}
// console.log(person.fun());
console.log(person.newobj.address);