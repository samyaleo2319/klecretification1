const express=require('express');
const app = express();
//middlewear
// app.use('/home',(req,res)=>{
// //    console.log(req);
//        res.send('<h1>response from server</h1>');
//        console.log(res);
// })


app.get('/thakgaaye',(req,res)=>{
    res.send('<h1> response from my route->thakana mana hain</h1>');
    console.log(res);


})
app.get('/changes',(req,res)=>{
    res.send("<h1>hello ri yan yeth rii</h1>");
})


app.listen(8080,()=>{
    console.log('server is running at port 8080');
})
