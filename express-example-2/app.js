const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(cors());

// app.use((req, res, next)=> {
//     res.set("Access-Control-Allow-Origin", "")
// })

app.get("api/v1/products", (req, res)=> {
    // res.send(products);
    res.json(products);
});

app.listen(3000);