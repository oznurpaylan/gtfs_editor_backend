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

module.exports.agencyPost = async (req, res) => { //db modele yeni  kayıt oluşturmak
    try {
        console.log(req.body)
        var newData = await agency.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports.calendarPost = async (req, res) => {
    try {
        console.log(req.body)
        var newData = await calendar.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports.routePost = async (req, res) => {
    try {
        var newData = await route.create(req.body)
        console.log(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}

module.exports.stopPost = async (req, res) => {
    try {
        var newData = await stop.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}

module.exports.stopTimePost = async (req, res) => {
    try {
        var newData = await stoptime.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}

module.exports.tripPost = async (req, res) => {
    try {
        var newData = await trip.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}

module.exports.attributionPost = async (req, res) => {
    try {
        var newData = await attribution.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}

module.exports.calendarDatePost = async (req, res) => {
    try {
        var newData = await calendarDate.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareAttributesPost = async (req, res) => {
    try {
        var newData = await fareAttributes.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareRulePost = async (req, res) => {
    try {
        var newData = await fareRule.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.feedInfoPost = async (req, res) => {
    try {
        var newData = await feedInfo.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.frequenciePost = async (req, res) => {
    try {
        var newData = await frequencie.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.levelPost = async (req, res) => {
    try {
        var newData = await level.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.pathwayPost = async (req, res) => {
    try {
        var newData = await pathway.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.shapePost = async (req, res) => {
    try {
        var newData = await shape.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.transferPost = async (req, res) => {
    try {
        var newData = await transfer.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.translationPost = async (req, res) => {
    try {
        var newData = await translations.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.areaPost = async (req, res) => {
    try {
        var newData = await area.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.stopAreaPost = async (req, res) => {
    try {
        var newData = await stopArea.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareTransferRulesPost = async (req, res) => {
    try {
        var newData = await fareTransferRules.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareLegRulesPost = async (req, res) => {
    try {
        var newData = await fareLegRules.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareProductsPost = async (req, res) => {
    try {
        var newData = await fareProducts.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareMediaPost = async (req, res) => {
    try {
        var newData = await fareMedia.create(req.body)
        res.json({ message: "Data kaydedildi" })
    } catch (error) {
        res.json(error)
    }
}

