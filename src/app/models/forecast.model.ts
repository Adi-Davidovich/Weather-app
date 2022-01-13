export interface Forecast {
    id: string,
    date: Date,
    text: string,
    unit: string,
    minTemp: number,
    maxTemp: number,
    dayIcon: number,
    dayText: string,
    dayWind: number,
    dayWindDirection: string,
    nightIcon: number,
    nightText: string,
    nightWind: number,
    nightWindDirection: string,
    sunrise: Date,
    sunset: Date,
    moonrise: Date,
    moonset: Date,
}

/*
{
  "Headline": {
    "EffectiveDate": "2022-01-13T19:00:00+02:00",
    "EffectiveEpochDate": 1642093200,
    "Severity": 3,
    "Text": "Rain Thursday evening",
    "Category": "rain",
    "EndDate": "2022-01-14T01:00:00+02:00",
    "EndEpochDate": 1642114800,
    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2022-01-13T07:00:00+02:00",
      "EpochDate": 1642050000,
      "Temperature": {
        "Minimum": {
          "Value": 13.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 18.7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 13,
        "IconPhrase": "Mostly cloudy w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Night": {
        "Icon": 40,
        "IconPhrase": "Mostly cloudy w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
    },
    {
      "Date": "2022-01-14T07:00:00+02:00",
      "EpochDate": 1642136400,
      "Temperature": {
        "Minimum": {
          "Value": 11.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 15.8,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 13,
        "IconPhrase": "Mostly cloudy w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Night": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
    },
    {
      "Date": "2022-01-15T07:00:00+02:00",
      "EpochDate": 1642222800,
      "Temperature": {
        "Minimum": {
          "Value": 12.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 15.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Night": {
        "Icon": 18,
        "IconPhrase": "Rain",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
    },
    {
      "Date": "2022-01-16T07:00:00+02:00",
      "EpochDate": 1642309200,
      "Temperature": {
        "Minimum": {
          "Value": 9.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 15.6,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 34,
        "IconPhrase": "Mostly clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
    },
    {
      "Date": "2022-01-17T07:00:00+02:00",
      "EpochDate": 1642395600,
      "Temperature": {
        "Minimum": {
          "Value": 8.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 14.5,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "Day": {
        "Icon": 1,
        "IconPhrase": "Sunny",
        "HasPrecipitation": false
      },
      "Night": {
        "Icon": 33,
        "IconPhrase": "Clear",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
    }
  ]
}

*/



// DETAILED

/* {
  "Headline": {
    "EffectiveDate": "2022-01-13T19:00:00+02:00",
    "EffectiveEpochDate": 1642093200,
    "Severity": 3,
    "Text": "Rain Thursday evening",
    "Category": "rain",
    "EndDate": "2022-01-14T01:00:00+02:00",
    "EndEpochDate": 1642114800,
    "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
    "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2022-01-13T07:00:00+02:00",
      "EpochDate": 1642050000,
      "Sun": {
        "Rise": "2022-01-13T06:42:00+02:00",
        "EpochRise": 1642048920,
        "Set": "2022-01-13T16:57:00+02:00",
        "EpochSet": 1642085820
      },
      "Moon": {
        "Rise": "2022-01-13T13:22:00+02:00",
        "EpochRise": 1642072920,
        "Set": "2022-01-14T03:46:00+02:00",
        "EpochSet": 1642124760,
        "Phase": "WaxingGibbous",
        "Age": 11
      },
      "Temperature": {
        "Minimum": {
          "Value": 13.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Maximum": {
          "Value": 18.7,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "RealFeelTemperature": {
        "Minimum": {
          "Value": 9,
          "Unit": "C",
          "UnitType": 17,
          "Phrase": "Chilly"
        },
        "Maximum": {
          "Value": 18.6,
          "Unit": "C",
          "UnitType": 17,
          "Phrase": "Pleasant"
        }
      },
      "RealFeelTemperatureShade": {
        "Minimum": {
          "Value": 9,
          "Unit": "C",
          "UnitType": 17,
          "Phrase": "Chilly"
        },
        "Maximum": {
          "Value": 16.6,
          "Unit": "C",
          "UnitType": 17,
          "Phrase": "Pleasant"
        }
      },
      "HoursOfSun": 3.4,
      "DegreeDaySummary": {
        "Heating": {
          "Value": 2,
          "Unit": "C",
          "UnitType": 17
        },
        "Cooling": {
          "Value": 0,
          "Unit": "C",
          "UnitType": 17
        }
      },
      "AirAndPollen": [
        {
          "Name": "AirQuality",
          "Value": 0,
          "Category": "Good",
          "CategoryValue": 1,
          "Type": "Ozone"
        },
        {
          "Name": "Grass",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Mold",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Ragweed",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "Tree",
          "Value": 0,
          "Category": "Low",
          "CategoryValue": 1
        },
        {
          "Name": "UVIndex",
          "Value": 3,
          "Category": "Moderate",
          "CategoryValue": 2
        }
      ],
      "Day": {
        "Icon": 13,
        "IconPhrase": "Mostly cloudy w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light",
        "ShortPhrase": "An afternoon shower in spots",
        "LongPhrase": "Cloudy this morning, then times of sun and clouds this afternoon with a shower in the area",
        "PrecipitationProbability": 40,
        "ThunderstormProbability": 8,
        "RainProbability": 40,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 16.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 218,
            "Localized": "SW",
            "English": "SW"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 40.7,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 238,
            "Localized": "WSW",
            "English": "WSW"
          }
        },
        "TotalLiquid": {
          "Value": 0.2,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 0.2,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 0.5,
        "HoursOfRain": 0.5,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 74,
        "Evapotranspiration": {
          "Value": 0.1,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 4499,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Night": {
        "Icon": 40,
        "IconPhrase": "Mostly cloudy w/ showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate",
        "ShortPhrase": "Evening rain",
        "LongPhrase": "Mild; evening rain, then partly cloudy late",
        "PrecipitationProbability": 100,
        "ThunderstormProbability": 13,
        "RainProbability": 100,
        "SnowProbability": 0,
        "IceProbability": 0,
        "Wind": {
          "Speed": {
            "Value": 18.5,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 260,
            "Localized": "W",
            "English": "W"
          }
        },
        "WindGust": {
          "Speed": {
            "Value": 37,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Direction": {
            "Degrees": 267,
            "Localized": "W",
            "English": "W"
          }
        },
        "TotalLiquid": {
          "Value": 19.7,
          "Unit": "mm",
          "UnitType": 3
        },
        "Rain": {
          "Value": 19.7,
          "Unit": "mm",
          "UnitType": 3
        },
        "Snow": {
          "Value": 0,
          "Unit": "cm",
          "UnitType": 4
        },
        "Ice": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "HoursOfPrecipitation": 6,
        "HoursOfRain": 6,
        "HoursOfSnow": 0,
        "HoursOfIce": 0,
        "CloudCover": 69,
        "Evapotranspiration": {
          "Value": 0,
          "Unit": "mm",
          "UnitType": 3
        },
        "SolarIrradiance": {
          "Value": 0,
          "Unit": "W/m²",
          "UnitType": 33
        }
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
    },
    */