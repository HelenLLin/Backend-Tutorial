const express = require("express");
const router = express.Router();
let Ship = require("../../models/Ship");

/**
 * Run this code when receiving a GET request at /getShip/name
 */
router.get("/getShip/name", function(req, res){
    // look up document in MongoDB by name
    Ship.findOne({name: req.body.name}, function(error,doc){
        //error finding the ship
        if(error){
            res.status(500).send({error: "Error finding ship"});
        }
        //ship does not exist
        else if(!doc){
            res.status(404).send({error: "Ship does not exist"});
        }
        //document for ship exists, return ship
        else{
            res.send(doc);
        }
    });
});

module.exports = router;