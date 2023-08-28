

const http=require('http');
http.createServer((req,resp)=>{
  resp.write("<h1> hello aman !</h1>")
  resp.end()
  console.log("server is working")
}).listen(4500)






const http=require('http');
http.createServer((req,resp)=>{
  resp.writeHead(200,{"contact-type":"Application/json"});
  resp.write(JSON.stringify({
    name:'AMAN PATEL',
    Email:'Akp88714725@gmail.com'
  }))
  resp.end()
  console.log("server is working")
}).listen(4500)


