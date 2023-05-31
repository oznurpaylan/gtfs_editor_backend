const fs=require('fs')
const { Parser } = require('@json2csv/plainjs');
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

module.exports.agencySave=async(req,res)=>{ //db de yapılan işlemlerden sonra session id ye göre arama yapıp yeni dosyaya yazma
    try {
        await agency.find({ session_id: req.params.session.trim() }, { _id: false, __v: false })//trim() boşlukları silmek için
            .then(doc => {
                //res.json(doc)
                //console.log(doc)

                const fields = ["agency_id", "agency_name", "agency_url", "agency_timezone", "agency_lang",
                "agency_phone","agency_fare_url","agency_email","session_id"]
                const parser = new Parser({ fields }); //başlık 
                const csv = parser.parse(doc)    //içerik 
                //console.log(csv);

                const filename=req.params.session //req.body den hangi dosyaya kaydedeceğini anlamak için filename gönderilir.
                //session id filename olarak gönderiliyor add controllerda body den almaya gerek yok 
                //bodyden name olarak alnmak istendiğinde req.body.name olarak alınmalı 
                //req gelen session ' u alıyor.

                fs.writeFileSync('folders/extract/'+filename+'/agency.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports.calendarSave=async(req,res)=>{
    try {
        await calendar.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["service_id", "start_date", "end_date", "monday", "tuesday", "wednesday",
                "thursday","friday","saturday","sunday","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc) 
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/calendar.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports.routeSave=async(req,res)=>{
    try {
        await route.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["route_id", "agency_id", "route_type", "route_short_name", "route_long_name", "route_desc","route_url",
                "route_color","route_text_color","route_sort_order","route_sort_order","continuous_drop_off","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc)

                const filename=req.params.session 
                fs.writeFileSync('folders/extract/'+filename+'/routes.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }    
}

module.exports.stopSave=async(req,res)=>{
    try {
        await stop.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["stop_id", "stop_name", "stop_lat", "stop_lon", "stop_code", "stop_desc","zone_id",
                "stop_url","location_type","parent_station","stop_timezone","wheelchair_boarding","level_id","platform_code","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc)
                 
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'stops.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports.stopTimeSave=async(req,res)=>{
    try {
        await stoptime.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["trip_id", "stop_id", "stop_sequence", "arrival_time", "departure_time", "stop_headsign",
                "pickup_type","drop_off_type","continuous_pickup","continuous_drop_off","shape_dist_traveled","timepoint","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc)

                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/stop_times.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}
module.exports.tripSave=async(req,res)=>{
    try {
        await trip.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["trip_id", "service_id", "route_id", "trip_headsign", "trip_short_name", "direction_id","block_id",
                "shape_id","wheelchair_accessible","bikes_allowed","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc) 

                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/trips.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}

module.exports.attributionSave=async(req,res)=>{
    try {
        await attribution.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["attribution_id", "agency_id", "route_id", "trip_id", "organization_name", "is_producer","is_operator",
                "is_authority","attribution_url","attribution_email","attribution_phone","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc)
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/attributions.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.calendarDateSave=async(req,res)=>{
    try {
        await calendarDate.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["service_id", "date", "route_id", "exception_type","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/calendar_dates.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.fareAttributesSave=async(req,res)=>{
    try {
        await fareAttributes.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["fare_id", "price", "currency_type", "payment_method", "transfers", "agency_id","transfer_duration","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/fare_attributes.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.fareRuleSave=async(req,res)=>{
    try {
        await fareRule.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["fare_id", "route_id", "origin_id", "destination_id", "contains_id","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/fare_rules.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.feedInfoSave=async(req,res)=>{
    try {
        await feedInfo.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["feed_publisher_name", "feed_publisher_url", "feed_lang", "default_lang", "feed_start_date", "feed_end_date","feed_version",
                "feed_contact_email","feed_contact_url","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/feed_info.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.frequencieSave=async(req,res)=>{
    try {
        await frequencie.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["trip_id", "start_time", "end_time", "headway_secs", "exact_times","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/frequencies.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.levelSave=async(req,res)=>{
    try {
        await level.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["level_id", "level_index", "level_name","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/levels.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.pathwaySave=async(req,res)=>{
    try {
        await pathway.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["pathway_id", "from_stop_id", "to_stop_id", "pathway_mode", "is_bidirectional", "length","traversal_time",
                "stair_count","max_slope","min_width","signposted_as","reversed_signposted_as","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/pathways.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.shapeSave=async(req,res)=>{
    try {
        await shape.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["shape_id", "shape_pt_lat", "shape_pt_lon", "shape_dist_traveled","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/shapes.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.transferSave=async(req,res)=>{
    try {
        await transfer.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["from_stop_id", "to_stop_id", "transfer_type", "min_transfer_time","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/transfers.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
    
}
module.exports.translationSave=async(req,res)=>{
    try {
        await translations.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["table_name", "field_name", "language", "translation", "record_id", "record_sub_id","field_value","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/translations.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}
module.exports.areaSave=async(req,res)=>{
    try {
        await area.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["area_id","area_name","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/areas.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}
module.exports.stopAreaSave=async(req,res)=>{
    try {
        await stopArea.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["area_id","stop_id","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/stop_areas.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}
module.exports.fareTransferRulesSave=async(req,res)=>{
    try {
        await fareTransferRules.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["from_leg_group_id","to_leg_group_id","transfer_count","duration_limit","duration_limit_type","fare_transfer_type","fare_product_id","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/fare_transfer_rules.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}
module.exports.fareLegRulesSave=async(req,res)=>{
    try {
        await fareLegRules.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["leg_group_id","network_id","from_area_id","to_area_id"	,"fare_product_id","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/fare_leg_rules.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}
module.exports.fareProductsSave=async(req,res)=>{
    try {
        await fareProducts.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["fare_product_id","fare_product_name","fare_media_id","amount","currency","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/fare_products.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}
module.exports.fareMediaSave=async(req,res)=>{
    try {
        await fareMedia.find({ session_id: req.params.session.trim() }, { _id: false, __v: false }) 
            .then(doc => {
                const fields = ["fare_media_id" , "fare_media_name", "fare_media_type","session_id"]
                const parser = new Parser({ fields }) 
                const csv = parser.parse(doc); 
                
                const filename=req.params.session
                fs.writeFileSync('folders/extract/'+filename+'/fare_media.txt', csv, err => {
                    if (err) {
                        console.log(err)
                    }
                })
                res.status(200).json({ message: 'Dosya kaydedildi' });
            })
    } catch (error) {
        res.json({ message: error.message })
    }
}

