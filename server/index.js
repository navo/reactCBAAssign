const express = require("express");
const app = express();

app.get("/addEmployee", function (req, res) {
    console.log(req.query);

    res.send("Hello World");
});

app.listen(7878);
