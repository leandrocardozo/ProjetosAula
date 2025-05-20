;(function () {
  "use strict";  // Modo estrito, força regras mais rígidas pra evitar erros bobos

  const form = document.querySelector(".busca")  // Pega o formulário da busca

  form.addEventListener("submit", async function (event) {
    event.preventDefault()  // Impede o formulário de recarregar a página

    const input = document.getElementById("searchInput").value.trim()  // Pega o valor digitado, tira espaços extras

    if (input) {  // Só continua se tiver algo digitado
      clearInfo()  // Limpa resultados antigos
      showWarning("Carregando...")  // Mostra aviso de carregamento

      const apiKey = "d06cdb298fafc83c520d5ab677fc477e"  // Chave da API (coloque sua aqui)
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(input)}&appid=${apiKey}&units=metric&lang=pt_br`
      // Monta a URL pra API com o nome da cidade codificado, unidades métricas e português

      try {
        const results = await fetch(url)  // Busca os dados da API (espera a resposta)
        const json = await results.json()  // Converte resposta para JSON

        console.log(json)  // Mostra os dados no console pra debug

        if (json.error) {  // Se a API respondeu com erro, mostra aviso
          clearInfo()
          showWarning("Não encontramos essa localidade!")
        } else {  // Se tudo certo, mostra as informações na tela
          showInfo({
            name: json.name,
            country: json.sys.country,
            temp: json.main.temp,
            temperatureIcon: `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`,
            windSpeed: json.wind.speed,
            windAngle: json.wind.deg
          })
        }
      } catch (error) {  // Se der algum erro na requisição ou processamento
        clearInfo()
        showWarning("Erro ao buscar dados!")
        console.error(error)  // Mostra o erro no console pra facilitar o conserto
      }
    }

    document.querySelector("#searchInput").value = ""  // Limpa o campo de busca depois de tudo
  })

  function showInfo(json) {
    showWarning("")  // Limpa aviso

    // Atualiza o texto e imagens na tela com os dados do JSON
    document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`
    document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>ºC</sup>`
    document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} <span>km/h</span>`
    document.querySelector(".temp img").setAttribute("src", json.temperatureIcon)
    document.querySelector(".ventoPonto").style.transform = `rotate(${json.windAngle - 90}deg)`
    document.querySelector(".resultado").style.display = "block"  // Mostra a div de resultados
  }

  function showWarning(msg) {
    document.querySelector(".aviso").innerHTML = msg  // Atualiza a mensagem de aviso
  }

  function clearInfo() {
    showWarning("")  // Limpa aviso
    document.querySelector(".resultado").style.display = "none"  // Esconde resultado
  }

})()
