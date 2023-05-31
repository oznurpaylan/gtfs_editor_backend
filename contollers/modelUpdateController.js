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

module.exports.agencyPut = async (req, res) => { //db kayıt güncellemek için
    try {
        // var id=req.body.id bodiden gönderilen id üzerinde işlem yapma
        var id = req.params.id
        console.log(req.params.id)
        const { agency_id, agency_name, agency_url, agency_timezone, agency_lang, agency_phone, agency_fare_url, agency_email } = req.body
        console.log(req.body)
        const updateData = await agency.findByIdAndUpdate(id, {
            agency_id, agency_name, agency_url, agency_timezone, agency_lang,
            agency_phone, agency_fare_url, agency_email
        }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.calendarPut = async (req, res) => {
    try {
        var id = req.params.id
        const { service_id, start_date, end_date, monday, tuesday, wednesday, thursday, friday, saturday, sunday } = req.body
        const updateData = await calendar.findByIdAndUpdate(id,
            { service_id, start_date, end_date, monday, tuesday, wednesday, thursday, friday, saturday, sunday }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.routePut = async (req, res) => {
    try {
        var id = req.params.id
        const { route_id, route_type, agency_id, route_short_name, route_long_name, route_desc, route_url, route_color, route_text_color,
            route_sort_order, continuous_drop_off } = req.body
        const updateData = await route.findByIdAndUpdate(id, {
            route_id, route_type, agency_id, route_short_name, route_long_name,
            route_desc, route_url, route_color, route_text_color, route_sort_order, continuous_drop_off
        }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.stopPut = async (req, res) => {
    try {
        var id = req.params.id
        const { stop_id, stop_name, stop_lat, stop_lon, stop_code, stop_desc, zone_id, stop_url, location_type, parent_station,
            stop_timezone, wheelchair_boarding, level_id, platform_code } = req.body
        const updateData = await stop.findByIdAndUpdate(id, {
            stop_id, stop_name, stop_lat, stop_lon, stop_code, stop_desc, zone_id,
            stop_url, location_type, parent_station, stop_timezone, wheelchair_boarding, level_id, platform_code
        }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.stopTimePut = async (req, res) => {
    try {
        var id = req.params.id
        const { trip_id, stop_id, arrival_time, departure_time, stop_sequence, stop_headsign, pickup_type, drop_off_type,
            continuous_pickup, continuous_drop_off, shape_dist_traveled, timepoint } = req.body
        const updateData = await stoptime.findByIdAndUpdate(id, {
            trip_id, stop_id, arrival_time, departure_time, stop_sequence,
            stop_headsign, pickup_type, drop_off_type, continuous_pickup, continuous_drop_off, shape_dist_traveled, timepoint
        }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.tripPut = async (req, res) => {
    try {
        var id = req.params.id
        const { trip_id, service_id, route_id, trip_headsign, trip_short_name, direction_id, block_id, shape_id, wheelchair_accessible,
            bikes_allowed } = req.body
        const updateData = await trip.findByIdAndUpdate(id, {
            trip_id, service_id, route_id, trip_headsign, trip_short_name, direction_id,
            block_id, shape_id, wheelchair_accessible, bikes_allowed
        }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.attributionPut = async (req, res) => {
    try {
        var id = req.params.id
        const { attribution_id, agency_id, route_id, trip_id, organization_name, is_producer, is_operator, is_authority, attribution_url,
            attribution_email, attribution_phone } = req.body
        const updateData = await attribution.findByIdAndUpdate(id, {
            attribution_id, agency_id, route_id, trip_id, organization_name,
            is_producer, is_operator, is_authority, attribution_url, attribution_email, attribution_phone
        }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.calendarDatePut = async (req, res) => {
    try {
        var id = req.params.id
        const { service_id, date, exception_type } = req.body
        const updateData = await calendarDate.findByIdAndUpdate(id, { service_id, date, exception_type }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.fareAttributesPut = async (req, res) => {
    try {
        var id = req.params.id
        const { fare_id, price, currency_type, payment_method, transfers, agency_id, transfer_duration } = req.body
        const updateData = await fareAttributes.findByIdAndUpdate(id, {
            fare_id, price, currency_type, payment_method, transfers, agency_id,
            transfer_duration
        }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.fareRulePut = async (req, res) => {
    try {
        var id = req.params.id
        const { fare_id, route_id, origin_id, destination_id, contains_id } = req.body
        const updateData = await fareRule.findByIdAndUpdate(id, { fare_id, route_id, origin_id, destination_id, contains_id }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.feedInfoPut = async (req, res) => {
    try {
        var id = req.params.id
        const { feed_publisher_name, feed_publisher_url, feed_lang, default_langdefault_lang, feed_start_date, feed_end_date,
            feed_version, feed_contact_email, feed_contact_url } = req.body
        const updateData = await feedInfo.findByIdAndUpdate(id, {
            feed_publisher_name, feed_publisher_url, feed_lang, default_langdefault_lang,
            feed_start_date, feed_end_date, feed_version, feed_contact_email, feed_contact_url
        }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.frequenciePut = async (req, res) => {
    try {
        var id = req.params.id
        const { trip_id, start_time, end_time, headway_secs, exact_times } = req.body
        const updateData = await frequencie.findByIdAndUpdate(id, { trip_id, start_time, end_time, headway_secs, exact_times }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.levelPut = async (req, res) => {
    try {
        var id = req.params.id
        const { level_id, level_index, level_name } = req.body
        const updateData = await level.findByIdAndUpdate(id, { level_id, level_index, level_name }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}
module.exports.pathwayPut = async (req, res) => {
    try {
        var id = req.params.id
        const { pathway_id, from_stop_id, to_stop_id, pathway_mode, is_bidirectional, length, traversal_time, stair_count, max_slope,
            min_width, signposted_as, reversed_signposted_as } = req.body
        const updateData = await pathway.findByIdAndUpdate(id, {
            pathway_id, from_stop_id, to_stop_id, pathway_mode, is_bidirectional,
            length, traversal_time, stair_count, max_slope, min_width, signposted_as, reversed_signposted_as
        }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.shapePut = async (req, res) => {
    try {
        var id = req.params.id
        const { shape_id, shape_pt_lat, shape_pt_lon, shape_dist_traveled } = req.body
        const updateData = await shape.findByIdAndUpdate(id, { shape_id, shape_pt_lat, shape_pt_lon, shape_dist_traveled }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.transferPut = async (req, res) => {
    try {
        var id = req.params.id
        const { from_stop_id, to_stop_id, transfer_type, min_transfer_time } = req.body
        const updateData = await transfer.findByIdAndUpdate(id, { from_stop_id, to_stop_id, transfer_type, min_transfer_time }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.translationPut = async (req, res) => {
    try {
        var id = req.params.id
        const { table_name, field_name, language, translation, record_id, record_sub_id, field_value } = req.body
        const updateData = await translations.findByIdAndUpdate(id, { table_name, field_name, language, translation, record_id, record_sub_id, field_value }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

module.exports.areaPut = async (req, res) => {
    try {
        var id = req.params.id
        const { area_id, area_name } = req.body
        const updateData = await area.findByIdAndUpdate(id, { area_id, area_name }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}
module.exports.stopAreaPut = async (req, res) => {
    try {
        var id = req.params.id
        const { area_id, stop_id } = req.body
        const updateData = await stopArea.findByIdAndUpdate(id, { area_id, stop_id }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}
module.exports.fareTransferRulesPut = async (req, res) => {
    try {
        var id = req.params.id
        const { from_leg_group_id, to_leg_group_id, transfer_count, duration_limit, duration_limit_type, fare_transfer_type, fare_product_id } = req.body
        const updateData = await fareTransferRules.findByIdAndUpdate(id, { from_leg_group_id, to_leg_group_id, transfer_count, duration_limit, duration_limit_type, fare_transfer_type, fare_product_id }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}
module.exports.fareLegRulesPut = async (req, res) => {
    try {
        var id = req.params.id
        const { leg_group_id, network_id, from_area_id, to_area_id, fare_product_id } = req.body
        const updateData = await fareLegRules.findByIdAndUpdate(id, { leg_group_id, network_id, from_area_id, to_area_id, fare_product_id }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}
module.exports.fareProductsPut = async (req, res) => {
    try {
        var id = req.params.id
        const { fare_product_id, fare_product_name, fare_media_id, amount, currency } = req.body
        const updateData = await fareProducts.findByIdAndUpdate(id, { fare_product_id, fare_product_name, fare_media_id, amount, currency }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}
module.exports.fareMediaPut = async (req, res) => {
    try {
        var id = req.params.id
        const { fare_media_id, fare_media_name, fare_media_type } = req.body
        const updateData = await fareMedia.findByIdAndUpdate(id, { fare_media_id, fare_media_name, fare_media_type }, { new: true })
        res.json(updateData)

    } catch (error) {
        res.json(error)
    }
}

