const express = require('express')
const router = express.Router({mergeParams: true})
const dataStore = require('../../data/dataStore')


router.route('/mvr/:licensenumber/:state')
  .get(async (req, res, next) => {
    res.send(JSON.stringify(await getMvrReport(req.params.licensenumber, req.params.state)))
  })

  router.route('/ping') .get(async (req, res, next) => {
    res.send("running...")
  })
 
  let getMvrReport = async (licensenumber, state) => {
    console.log('Returning Vehicle report for vin #', licensenumber)
    let vehicleReport = await dataStore.findMvrReport(licensenumber,state)
    return vehicleReport
  }
    
module.exports = router;