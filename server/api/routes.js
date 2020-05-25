const express = require('express')
const vehicleRoutes = require('./vehicles').routes
const mvrRoutes = require('./mvrreport').routes

const router = express.Router({mergeParams: true})
router.use('/report', vehicleRoutes)
router.use('/report', mvrRoutes)

module.exports = router