const http=require('http');
const myserveur = http.createServer();
myserveur.on("request",(req,res)=>res.end("ok 2023"));
myserveur.on("listening",()=>{
	console.log('listening '+myserveur.address().port + myserveur.address().address);
	});
myserveur.listen(8080);

