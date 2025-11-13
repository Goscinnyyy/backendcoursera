const express = require("express");
const bodyParser = require("body-parser");

const { general } = require("./routes/general");
const { auth } = require("./routes/auth");

const app = express();
app.use(bodyParser.json());

app.use("/", general);
app.use("/", auth);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
