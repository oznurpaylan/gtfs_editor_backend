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

module.exports.agencyDelete = async (req, res) => { //db id ye göre silem işlemi
    try {
        var id = req.params.id
        console.log(req.params.id)
        var deleteData = await agency.findByIdAndDelete(id)
        res.json({message: ' Data silindi'})
    } catch (error) {
        res.json(error)
    }
}

module.exports.calendarDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await calendar.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}

module.exports.routeDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await route.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}

module.exports.stopDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await stop.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}

module.exports.stopTimeDelete = async (req, res) => {
    try {
        var id = req.params.id
        //var deleteData = await stoptime.remove({})  //tüm verileri silmek
        var deleteData = await stoptime.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}

module.exports.tripDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await trip.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}

module.exports.attributionDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await attribution.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.calendarDateDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await calendarDate.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareAttributesDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await fareAttributes.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareRuleDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await fareRule.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.feedInfoDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await feedInfo.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.frequencieDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await frequencie.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.levelDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await level.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.pathwayDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await pathway.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.shapeDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await shape.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.transferDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await transfer.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.translationDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await translations.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.areaDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await area.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.stopAreaDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await stopArea.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareTransferRulesDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await fareTransferRules.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareLegRulesDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await fareLegRules.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareProductsDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await fareProducts.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}
module.exports.fareMediaDelete = async (req, res) => {
    try {
        var id = req.params.id
        var deleteData = await fareMedia.findByIdAndDelete(id)
        res.json(' Data silindi')
    } catch (error) {
        res.json(error)
    }
}