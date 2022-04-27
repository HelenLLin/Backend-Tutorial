const express = require("express");
const router = express.Router();
let Ship = require("../../models/Ship");

/**
 * Run this code when receiving a GET request at /getShip/secondaryBattery
 */
router.get("/getShip/secondaryBattery", function(req, res){
    // look up document(s) in MongoDB by name
    Ship.find({secondaryBattery: req.body.secondaryBattery}, function(error,doc){
        //error finding the ship(s)
        if(error){
            res.status(500).send({error: "Error finding ship(s)"});
        }
        //no ships with secondary batteries
        else if(!doc){
            res.status(404).send({error: "No ships with secondary batteries"});
        }
        //document for ship exists, return ship(s)
        else{
            res.send(doc);
        }
    });
});

module.exports = router;