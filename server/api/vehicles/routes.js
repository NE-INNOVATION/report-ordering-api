const express = require('express')
var rn = require('random-number');
const router = express.Router({mergeParams: true})
const dataStore = require('../../data/dataStore')

var gen = rn.generator({
  min:  100000000
, max:  999999999
, integer: true
})

router.route('/vehicle/:vin/:state')
  .get(async (req, res, next) => {
    res.send(JSON.stringify(await getVehicleReport(req.params.vin, req.params.state)))
  })

  router.route('/ping') .get(async (req, res, next) => {
    res.send("running...")
  })
 
  let getVehicleReport = async (vin, state) => {
    console.log('Returning Vehicle report for vin #', vin)
    let vehicleReport = await dataStore.findVehicle(vin,state)
    return vehicleReport
  }
    
module.exports = router;