const csvtojson = require('csvtojson')
const { agency } = require('../models/agencyModel.js')
const { calendar } = require('../models/calendarModel.js')
const { route } = require('../models/routeModel')
const { stop } = require('../models/stopModel.js')
const { stoptime } = require('../models/stopTimeModel.js')
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

//Dosya var mı yok mu dye kontrol yapılmalı

module.exports.agencyAdd = async (req, res) => {
    //session_id ekleme
    const fileName = req.params.name //req params gelen name ile alınıyor 
    csvtojson().fromFile('./folders/extract/' + fileName + '/agency.txt') //session id filename gönderilmeli yol olarak aldık
        .then(csvData => {
            csvData.map(i => i.session_id = fileName) //json map ile data içerisine yazma 
            //console.log(csvData)            
            agency.insertMany(csvData).then(function () {
                res.send({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.calendarAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/calendar.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            calendar.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.routeAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/routes.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            route.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.stopAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/stops.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            stop.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.stoptimeAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/stop_times.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            stoptime.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.tripAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/trips.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            trip.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.attributionAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/attributions.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            attribution.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })

}

module.exports.calendarDateAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/calendar_dates.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            calendarDate.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.fareAttributesAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/fare_attributes.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            fareAttributes.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}



module.exports.fareRuleAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/fare_rules.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            fareRule.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.feedInfoAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/feed_info.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            feedInfo.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.frequencieAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/frequencies.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            frequencie.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.levelAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/levels.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            level.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.pathwayAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/pathways.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            pathway.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.shapeAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/shapes.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            shape.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.transferAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/transfers.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            transfer.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.translationAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/translations.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            translations.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}

module.exports.areaAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/areas.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            area.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}
module.exports.stopAreaAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/stop_areas.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            stopArea.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}
module.exports.fareTransferRulesAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/fare_transfer_rules.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            fareTransferRules.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}
module.exports.fareLegRulesAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/fare_leg_rules.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            fareLegRules.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}
module.exports.fareProductsAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/fare_products.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            fareProducts.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}
module.exports.fareMediaAdd = async (req, res) => {
    const fileName = req.params.name
    csvtojson().fromFile('./folders/extract/' + fileName + '/fare_media.txt')
        .then(csvData => {
            csvData.map(i => i.session_id = fileName)
            fareMedia.insertMany(csvData).then(function () {
                res.json({ message: "dosya kaydedildi" })
            }).catch((error) => {
                console.log(error)
            })
        })
}