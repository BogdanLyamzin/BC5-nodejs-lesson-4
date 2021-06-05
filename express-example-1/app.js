const express = require("express");

const app = express();

app.use((req, res, next)=> {
    console.log("First Middleware");
    next();
});

app.use((req, res, next)=> {
    console.log("Seond Middleware");
    next();
});

app.get("/", (req, res)=>{
    res.send("<h2>Home page</h2>");
});

app.get("/contacts", (req, res)=> {
    res.send("<h2>Contacts page</h2>");
});


app.listen(3000, ()=> console.log("Server running"));