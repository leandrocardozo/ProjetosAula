; (function () {
    "use strict";

    const form = document.querySelector(".busca")
    form.addEventListener("submit", async function (event) {
        event.preventDefault()

        const input = document.getElementById("searchInput").value.trim()

        if (input) {
            clearInfo()
            showWarning("Carregando...")

            const apiKey = "d06cdb298fafc83c520d5ab677fc477e"  // <- Coloca tua chave aqui
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(input)}&appid=${apiKey}&units=metric&lang=pt_br`

            try {
                const results = await fetch(url)
                const json = await results.json()

                console.log(json)
                
                if (json.error) {
                    clearInfo()
                    showWarning("Não encontramos essa localidade!")
                } else {
                    showInfo({
                        name: json.name,
                        country: json.sys.country,
                        temp: json.main.temp,
                        temperatureIcon: `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
                        windSpeed: json.wind.speed,
                        windAngle: json.wind.deg
                    })
                }
            } catch (error) {
                clearInfo()
                showWarning("Erro ao buscar dados!")
                console.error(error)
            }
        }

        document.querySelector("#searchInput").value = ""
    })

    function showInfo(json) {
        showWarning("")

        document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`
        document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>ºC</sup>`
        document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} <span>km/h</span>`
        document.querySelector(".temp img").setAttribute("src", json.temperatureIcon)
        document.querySelector(".ventoPonto").style.transform = `rotate(${json.windAngle - 90}deg)`
        document.querySelector(".resultado").style.display = "block"
        
    }

    function showWarning(msg) {
        document.querySelector(".aviso").innerHTML = msg
    }

    function clearInfo() {
        showWarning("")
        document.querySelector(".resultado").style.display = "none"
    }

})()

//testando funcionalidades do git

