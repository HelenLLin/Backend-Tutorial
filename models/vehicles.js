const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Schema for vehicles in a fleet
 */
let VehicleSchema = new Schema({
  /**
   * Make of the vehicle
   */
  make: {
    type: String
  },
  /**
   * Model of the vehicle
   */
  model: {
    type: String
  },
  /**
   * Model year of the vehicle
   */
  modelYear: {
    type: Date
  },
  /**
   * Miles per gallon (MPG) or range of the vehicle (EVs)
   */
  mpg: {
    value: {type: Number},
    unit: {type: String, default: "mpg"}
  },
  /**
   * Odometer miles of the vehicle (miles driven)
   */
  odometer: {
    value: {type: Number},
    unit: {type: String, default: "miles"}
  },
  /**
   * Engine type of the vehicle (gas, hybrid, or EV)
   */
  engine: {
    type: String
  },
  /**
   * Display name of the vehicle
   */
  display: {
    type: String
  },
  /**
   * VIN (uniqeu alphanumeric identifier) of the vehicle
   */
  VIN: {
    type: ObjectId
  }
});

let Vehicle = mongoose.model("Vehicle", VehicleSchema);
module.exports = Vehicle;