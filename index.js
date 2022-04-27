const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const DB = require("./db");

const app = express();
const PORT = 3000;
app.listen(PORT, () => console.info('Server has started on', PORT));

let newShip = require("./routes/newShip");
//get ship by name
let getShipName = require("./routes/getShip/name");
//get ship by secondary battery
let getShipSecondaryBattery = require("./routes/getShip/secondaryBattery")
//update ship characteristics
let updateShip = require("./routes/updateShip")

// on every request, parse the request body using this library.
app.use(bodyParser.json());
// on a request to /, use the newShip code.
// note that the entire URL including the one declared in the file must match.
app.use("/",updateShip);
