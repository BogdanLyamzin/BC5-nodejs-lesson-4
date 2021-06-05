const http = require("http");

const server = http.createServer((req, res)=> {
    res.setHeader("Content-type", "text/html; charset=utf-8");

    if(req.url === "/"){
        res.write("<h2>Home page</h2>")
    }
    else if(req.url === "/contacts"){
        res.write("<h2>Contact page</h2>")
    }
    res.end();
})

// const server = http.createServer((request, response)=> {
//     // console.log(`URL: ${request.url}`);
//     // console.log(`Method: ${request.method}`);
//     // console.log(`Browser: ${request.headers["user-agent"]}`);

//     response.setHeader("Content-type", "text/html; charset=utf-8");
//     response.write("<h2>Welcome to Hell!</h2>");
//     response.end();
// });

server.listen(3000);
