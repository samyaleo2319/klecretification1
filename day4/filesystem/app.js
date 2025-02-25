let fs=require('fs');

//perform CRUD operation
// let data="hii today's weather is cool";

//task-1 create a file and write data into it
//way-1
//  fs.writeFile('demo.txt',data,{encoding:'utf-8'}, (err)=>{
    // if(err) throw err;
    // console.log("file is created sucessfully");

//  });
// fs.writeFileSync('demo.txt',data,(err)=>{
        // if(err) throw err;
        // console.log("file is created sucessufully");

    // });
    //read a file
    // let fileread=fs.readFileSync('demo.txt');
    // console.log(fileread.toString());
    //update a file
    // fs.appendFileSync('demo.txt','sammi')
    //delete data
    // fs.unlinkSync('demo.txt')

    let data="hii darshii";
    fs.writeFileSync('text1.txt',data,(err)=>{
        if (err) throw err;
        console.log("file is created sucessfully");
    });
    let fileread=fs.readFileSync('text1.txt');
    console.log(fileread.toString());
    fs.readFileSync('text1.txt','hello samii')