import { TIME_MAPPING } from "./consts";


/**
 * 
 * Method which takes API data as input and convert it to hierarchical data modal
 * 
 * @param {Array} rawData 
 * 
 * @returns {Object} example {'2021-10-21':{'sessions':{'12:00:00':{temp:'22',weather:'clear'}}}
 */
export function prepareWeatherData(rawData) {
    let dates = {}
    rawData.list.forEach(tempRow => {
        const [dateString, timeString] = tempRow.dt_txt.split(' ')
        const formatedDate = formatDate(new Date(dateString))
        if (dates.hasOwnProperty(formatedDate)) {
            dates[formatedDate]['sessions'][timeString] = tempRow
        } else {
            dates[formatedDate] = {
                'sessions': {
                    [timeString]: tempRow
                }
            }
        }
    });
    return dates
}

// Method to convert temp into C/F 
export function convertTemperatureFromKelvin(tempInKelvin, unitToConvert = 'C') {
    const convertedTemp = unitToConvert === 'F' ? ((tempInKelvin - 273.15) * (9 / 5) + 32) : (tempInKelvin - 273.15)
    return Number(convertedTemp).toFixed(2)
}

// method to initialize which would be the first slide.
export function getInitialSlide(slide, allSlides) {
    const keys = Object.keys(allSlides)
    const slideIndex = keys.indexOf(slide)
    return slideIndex > 2 ? 2 : 0
}

// method to format a date object
export function formatDate(date, separator = '-') {

    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join(separator);
}


// make Data for Graph, describe the XKey,YKey, with array of data points
export function makeWeatherGraphData(sessions, unit) {
    let data = []
    const xDataKey = 'time' // x-Axis key for graph
    const yDataKey = 'temp' // Y-Axiz key for graph
    const sessionKeys = Object.keys(sessions)
    sessionKeys.forEach(session => {
        data.push({
            [xDataKey]: TIME_MAPPING[session],
            [yDataKey]: convertTemperatureFromKelvin(sessions[session].main.temp, unit)
        })
    });
    return { data, xDataKey, yDataKey }
}