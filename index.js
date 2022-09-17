let http=require('http');
let fs=require('fs');
let url=require('url');
const server=http.createServer();

server.on('request',(request,response)=>{
 

    let query=url.parse(request.url,true).query
    console.log(request.url)

    response.writeHead(200)
    response.end('salut '+query.name)

   

    fs.readFile('index.html','utf-8',(err,data)=>{
        if(err){
            response.writeHead(404)
            response.end('une erreur produite')
        }else{
            response.writeHead(200,{
                'Content-type':'text/html;charset=utf-8'
            })
            response.end(data)
        }
    })


})


server.listen(8080);
