//sync
// console.log("first");
// console.log("second");
// console.log("third");
// console.log("first");
// setTimeout(function () {
//     console.log("it will after 2sec");
// },2000)
// console.log("second");
// setTimeout(function () {
//     console.log("it will after 4sec");
// },4000)


//setinterval()
// setInterval(function(){
//     console.log("it will run after 2 sec")
    
// },2000 )

let count=0;
let intervalID=setInterval(function(){
    count++;
    console.log(`my count is: ${count}`);
    if(count===10){
        clearInterval(intervalID);
        console.log('task completed');
    }
},1000)
    