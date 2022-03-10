const http = require('http')

const server =http.createServer((req, res)=> {
    if (req.url === '/'){
        res.end('Welcome to our Home Page')
    }

    if (req.url === '/about'){
        res.end('A short history about about!')
    }

    res.end(`
    <h1> Oops! </h1>
    <p> Can't seem to find what you are looking for!
    <br>
    <a href="/"> Back Home </a>
    `)
})

server.listen(5000);