const express = require("express");
const app = express();
const port = 4848;
const nodemon = require("nodemon");
app.use(nodemon);

app.post("/mail", (req, res) => {});
app.listen(port, () => {
    console.log("listening on port " + port);
});
