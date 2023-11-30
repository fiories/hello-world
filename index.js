const app=require('express')();
const myserveur=require('http').createServer(app);
const io =require('socket.io')(myserveur);
app.get('/',(req,res)=>{res.sendFile(`${__dirname}/public/index.html`)});
io.on('connection',(socket)=>{
	console.log('un user connecter');
	//socket.on('chat message',msg)=>{
	//	consol.log('message :  '+msg);
		io.emit('chat message',"merrde");
	//}
	

});

myserveur.listen(3000,()=>{console.log('Ecoute le port 3000');});
