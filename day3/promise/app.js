let promise=new Promise(function(resolve,reject){
    console.log("wait for promise");
    setTimeout(function(){
        let data="promise is resolve, data mil gaya";
        let err='promise is reject, mai paise nahi dunga';
        resolve(data);
        reject(err);

    },2000)
    
})

promise.then(function(data){
    console.log(data);

}).catch(function(err){
    console.log(err);
})