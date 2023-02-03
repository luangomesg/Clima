let btn = document.querySelector(".btn");
const key = "2233cef3786337df96970d015bacb589";
let allCity = document.querySelector(".city");
let temp = document.querySelector(".temp");
let descript = document.querySelector(".descript");
let umidade = document.querySelector(".umidade");
let icons = document.querySelector(".icon");

btn.addEventListener("click", clickButton);

function addWindow(dados) {
    allCity.innerHTML = "Tempo em " + dados.name;
    temp.innerHTML = Math.floor(dados.main.temp) + "°C";
    descript.innerHTML = dados.weather[0].description;
    umidade.innerHTML = "Umidade: " + dados.main.humidity + "%";
    icons.src = "http://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    
}

async function searchCity(city) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&lang=pt_br" + "&units=metric"

    ).then(response => response.json())
    if(dados.cod == 404) {
        allCity.innerHTML = "Cidade não encontrada";
        temp.innerHTML = "";
        descript.innerHTML = "";
        umidade.innerHTML = "";
        icons.src = "";
    }else {
        addWindow(dados);
    }
    
    
    
}

function clickButton() {
    let city = document.querySelector(".input-city").value;
    searchCity(city)
}