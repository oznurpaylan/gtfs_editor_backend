const { agency } = require('../models/agencyModel.js')
const { calendar } = require('../models/calendarModel.js')
const { route } = require('../models/routeModel.js')
const { stoptime } = require('../models/stopTimeModel.js')
const { stop } = require('../models/stopModel.js')
const { trip } = require('../models/tripModel.js')
const { attribution } = require('../models/attributionsModel.js')
const { calendarDate } = require('../models/calendarDateModel.js')
const { fareAttributes } = require('../models/fareAttributesModel.js')
const { fareRule } = require('../models/fareRulesModel.js')
const { feedInfo } = require('../models/feedInfoModel.js')
const { frequencie } = require('../models/frequenciesModel.js')
const { level } = require('../models/levelsModel.js')
const { pathway } = require('../models/pathwaysModel.js')
const { shape } = require('../models/shapesModel.js')
const { transfer } = require('../models/transferModel.js')
const { translations } = require('../models/translationsModel.js')
const { area } = require('../models/areasModel.js')
const { stopArea } = require('../models/stopAreasModel.js')
const { fareTransferRules } = require('../models/fareTransferRulesModel.js')
const { fareLegRules } = require('../models/fareLegRulesModel.js')
const { fareProducts } = require('../models/fareProductsModel.js')
const { fareMedia } = require('../models/fareMediaModel.js')

module.exports.agencySearchPost = async (req, res) => { //db  kayıtlarını getirmek için

    try {
        const session=req.params.name //filenmae olarak gönderiliyor db de session id file name
        console.log(req.params)
        const searchData = await agency.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.calendarSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await calendar.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.routeSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await route.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.stopSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await stop.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.stopTimeSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await stoptime.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.tripSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await trip.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.attributionSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await attribution.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.calendarDateSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await calendarDate.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareAttributesSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await fareAttributes.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareRuleSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await fareRule.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.feedInfoSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await feedInfo.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.frequencieSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await frequencie.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.levelSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await level.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.pathwaySearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await pathway.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.shapeSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await shape.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.transferSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await transfer.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.translationSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await translations.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}

module.exports.areaSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await area.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.stopAreaSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await stopArea.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareTransferRulesSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await fareTransferRules.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareLegRulesSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await fareLegRules.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareProductsSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await fareProducts.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareMediaSearchPost = async (req, res) => {

    try {
        const session=req.params.name
        const searchData = await fareMedia.find({session_id:session})
        res.json(searchData)
    } catch (error) {
        res.json(error)
    }
}
