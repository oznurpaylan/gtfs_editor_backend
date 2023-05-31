const express = require('express')
const { agencyAdd, calendarAdd, routeAdd, stopAdd, stoptimeAdd, tripAdd, attributionAdd, calendarDateAdd, fareAttributesAdd, fareRuleAdd,
    feedInfoAdd, frequencieAdd, levelAdd, pathwayAdd, shapeAdd, transferAdd, translationAdd, areaAdd, stopAreaAdd, fareTransferRulesAdd, 
    fareMediaAdd, fareProductsAdd, fareLegRulesAdd } = require('../contollers/addModelContoller')

//zipden çıkarılan txt dosyaları için db kayıt işlemi
const addRouter = express.Router()

addRouter.route('/agency/:name').post(agencyAdd) //extract içindeki filename göre çalışıyor name olarak filename gönderilmeli
addRouter.route('/calendar/:name').post(calendarAdd)
addRouter.route('/route/:name').post(routeAdd)
addRouter.route('/stop/:name').post(stopAdd)
addRouter.route('/stoptime/:name').post(stoptimeAdd)
addRouter.route('/trip/:name').post(tripAdd)
addRouter.route('/attribution/:name').post(attributionAdd)
addRouter.route('/calendardate/:name').post(calendarDateAdd)
addRouter.route('/fareattributes/:name').post(fareAttributesAdd)
addRouter.route('/farerule/:name').post(fareRuleAdd)
addRouter.route('/feedinfo/:name').post(feedInfoAdd)
addRouter.route('/frequencie/:name').post(frequencieAdd)
addRouter.route('/level/:name').post(levelAdd)
addRouter.route('/pathway/:name').post(pathwayAdd)
addRouter.route('/shape/:name').post(shapeAdd)
addRouter.route('/transfer/:name').post(transferAdd)
addRouter.route('/translations/:name').post(translationAdd)
addRouter.route('/area/:name').post(areaAdd)
addRouter.route('/stoparea/:name').post(stopAreaAdd)
addRouter.route('/faretransferrules/:name').post(fareTransferRulesAdd)
addRouter.route('/faremedia/:name').post(fareMediaAdd)
addRouter.route('/fareproduct/:name').post(fareProductsAdd)
addRouter.route('/farelegrules/:name').post(fareLegRulesAdd)

module.exports = { addRouter }