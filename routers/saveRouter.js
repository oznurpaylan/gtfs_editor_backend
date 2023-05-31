const express=require('express')
const { agencySave, calendarSave, routeSave, stopSave, stopTimeSave, tripSave, attributionSave, fareAttributesSave, fareRuleSave,
    feedInfoSave, frequencieSave, levelSave, pathwaySave, shapeSave, transferSave, translationSave, areaSave, stopAreaSave, 
    fareTransferRulesSave, fareMediaSave, fareProductsSave, fareLegRulesSave,calendarDateSave } = require('../contollers/saveModuleController')
const { saveZip, zipDowload } = require('../contollers/saveZipContoller')

const saveRouter=express.Router()

//dbden session id ye göre arama yaparak dosyaya kaydetme (db ye kaydettiği aynı dosya üzerine yazar)
saveRouter.route('/agency/:session').post(agencySave)
saveRouter.route('/calendar/:session').post(calendarSave)
saveRouter.route('/route/:session').post(routeSave)
saveRouter.route('/stop/:session').post(stopSave)
saveRouter.route('/stoptime/:session').post(stopTimeSave)
saveRouter.route('/trip/:session').post(tripSave)
saveRouter.route('/attribution/:session').post(attributionSave)
saveRouter.route('/calendardate/:session').post(calendarDateSave)
saveRouter.route('/fareattributes/:session').post(fareAttributesSave)
saveRouter.route('/farerule/:session').post(fareRuleSave)
saveRouter.route('/feedinfo/:session').post(feedInfoSave)
saveRouter.route('/frequencie/:session').post(frequencieSave)
saveRouter.route('/level/:session').post(levelSave)
saveRouter.route('/pathway/:session').post(pathwaySave)
saveRouter.route('/shape/:session').post(shapeSave)
saveRouter.route('/transfer/:session').post(transferSave)
saveRouter.route('/translations/:session').post(translationSave)
saveRouter.route('/area/:session').post(areaSave)
saveRouter.route('/stoparea/:session').post(stopAreaSave)
saveRouter.route('/faretransferrules/:session').post(fareTransferRulesSave)
saveRouter.route('/faremedia/:session').post(fareMediaSave)
saveRouter.route('/fareproduct/:session').post(fareProductsSave)
saveRouter.route('/farelegrules/:session').post(fareLegRulesSave)

//kaydedilen txt dosyalarını zip klasörüne çevirip indirme
saveRouter.route('/zip/:name').post(saveZip)
saveRouter.route('/zipdowload/:name').get(zipDowload)

module.exports={saveRouter}