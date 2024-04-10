const http=require('http');
const app=http.createServer((req,res)=>{
    console.log('request recieved');
    console.log(req);
});
app.listen(1400);