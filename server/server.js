const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4848;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/contact", (req, res) => {
    res.status(200).json({
        message: "Successfully post data!",
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
