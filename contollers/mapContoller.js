const { route } = require('../models/routeModel.js')
const { stoptime } = require('../models/stopTimeModel.js')
const { stop } = require('../models/stopModel.js')
const { trip } = require('../models/tripModel.js')

module.exports.tripsMapSearch = async (req, res) => { 
    try {
        const id=req.params.id
        const searchData = await trip.find({route_id:id})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.stopTimeMapSearch = async (req, res) => {
    try {
        const id=req.params.id 
        const searchData = await stoptime.find({trip_id:id})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.stopMapSearch = async (req, res) => {
    try {
        const id=req.params.id 
        const searchData = await stop.find({stop_id:id})
       // console.log(searchData)
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

