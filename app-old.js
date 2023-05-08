
import http from "http"

http.createServer((req,res)=>{

    //res.writeHead(200,{'Content-Type':'application/json'})
    res.writeHead(200,{'Content-Disposition':'attachment;file'})
    res.writeHead(200,{'Content-Type':'application/csv'})

    res.write("id , persona\n")
    res.write('1 , Nicolas\n')
    res.write('2 , Maria\n')
    res.write('3 , Juan\n')
    res.write('4 , Pedro\n')

    res.end()
})
.listen(8080)

console.log('eschuchando en el puerto ', 8080)