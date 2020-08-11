const getWeatherBtn = document.getElementById('get-weather')
const search = document.getElementById('get-city')

const apiKey = '78de6a7fc9f3d64b8af6cc331977a4dc'


let cityWeather;

function searchWeather(event) {
    event.preventDefault()

    const city = search.value

    if (city.trim()) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                cityWeather = {
                    city: `${data.name}`,
                    temp: `${data.main.temp}`,
                    feels_like: `${data.main.feels_like}`,
                    wind: `${data.wind.speed}`,
                    pressure: `${data.main.pressure}`
                }
                updateDOM(cityWeather)

                search.value = ''
            })
    } else {
        alert('Try Again')
    }
}


function updateDOM(cityWeather) {
    const info = []
    for (const entries of Object.values(cityWeather)) {
        console.log(entries);
        info.push(entries)
    }

    const element = document.createElement('div')
    element.classList.add('info')
    element.innerHTML = `<strong>
                            City: ${info[0]}<br>
                            Temperature: ${info[1]}<br>
                            Feels like: ${info[2]}<br>
                            Wind: ${info[3]}<br>
                            Pressure: ${info[4]}<br>
                        </strong>`
    main.appendChild(element)
}

getWeatherBtn.addEventListener('click', searchWeather)