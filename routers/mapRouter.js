const express = require('express')
const{tripsMapSearch,stopTimeMapSearch,stopMapSearch}=require("../contollers/mapContoller.js")

const mapRouter = express.Router()

mapRouter.route('/maptrips/:id').post(tripsMapSearch)
mapRouter.route('/mapstoptimes/:id').post(stopTimeMapSearch)
mapRouter.route('/mapstops/:id').post(stopMapSearch)

module.exports = { mapRouter }
