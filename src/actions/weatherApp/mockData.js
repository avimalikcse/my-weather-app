export const mockAPIData = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [{
            "dt": 1633975200,
            "main": {
                "temp": 282.34,
                "feels_like": 281.49,
                "temp_min": 278.99,
                "temp_max": 282.34,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 962,
                "humidity": 71,
                "temp_kf": 3.35
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": { "all": 76 },
            "wind": { "speed": 1.9, "deg": 270, "gust": 2.09 },
            "visibility": 10000,
            "pop": 0,
            "sys": { "pod": "n" },
            "dt_txt": "2021-10-11 18:00:00"
        },
        {
            "dt": 1633986000,
            "main": {
                "temp": 280.52,
                "feels_like": 279.08,
                "temp_min": 278.78,
                "temp_max": 280.52,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 962,
                "humidity": 79,
                "temp_kf": 1.74
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }],
            "clouds": { "all": 92 },
            "wind": { "speed": 2.22, "deg": 257, "gust": 4.33 },
            "visibility": 10000,
            "pop": 0,
            "sys": { "pod": "n" },
            "dt_txt": "2021-10-12 21:00:00"
        }
    ]
}
export const mockAPIDataProcessed = {
    '2021-10-12': {
        'sessions': {
            '18:00:00': {
                "dt": 1633975200,
                "main": {
                    "temp": 282.34,
                    "feels_like": 281.49,
                    "temp_min": 278.99,
                    "temp_max": 282.34,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 962,
                    "humidity": 71,
                    "temp_kf": 3.35
                },
                "weather": [{
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }],
                "clouds": { "all": 76 },
                "wind": { "speed": 1.9, "deg": 270, "gust": 2.09 },
                "visibility": 10000,
                "pop": 0,
                "sys": { "pod": "n" },
                "dt_txt": "2021-10-11 18:00:00"
            },
        }
    },
    '2021-10-12': {
        'sessions': {
            '21:00:00': {
                "dt": 1633986000,
                "main": {
                    "temp": 280.52,
                    "feels_like": 279.08,
                    "temp_min": 278.78,
                    "temp_max": 280.52,
                    "pressure": 1025,
                    "sea_level": 1025,
                    "grnd_level": 962,
                    "humidity": 79,
                    "temp_kf": 1.74
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }],
                "clouds": { "all": 92 },
                "wind": { "speed": 2.22, "deg": 257, "gust": 4.33 },
                "visibility": 10000,
                "pop": 0,
                "sys": { "pod": "n" },
                "dt_txt": "2021-10-12 21:00:00"
            }
        }
    }
}