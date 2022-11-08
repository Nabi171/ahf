// const name = require('./other.js')


// const res = name.sub(4, 1)
// console.log(res);
const url = require('url');
const http = require('http');
const { stringify } = require('querystring');
const server = http.createServer((req, res) => {
    // if (req.url == '/') {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.write(JSON.stringify({ course: "ACC" }));
    //     res.end()

    // }
    // else if (req.url == '/contact') {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.write(JSON.stringify({ course: "ACC" }));
    //     res.end()

    // }
    // if (req.url == '/about') {
    //     res.writeHead(200, { 'Content-Type': 'application/json' })
    //     res.write(JSON.stringify({ course: "ACC" }));
    //     res.end()

    // }
    const address_url = 'http//www.facebook.com'
    const parsed_url = url.parse(address_url.true);
    const queryObject = parsed_url.query
    console.log(queryObject);
    // console.log(parsed_url);
})
console.log(url)
const PORT = 5000;
server.listen(PORT)
console.log(`server is running at ${PORT}`);