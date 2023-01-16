const cities = [
    "Salzburg", "Linz", "Wien",
    "Eisenstadt", "Graz",
    "Bregenz", "Innsbruck",
    "Klagenfurt","Sankt Pölten"
];

let slider_pics = ["./img/sun.jpg","clouds.jpg","snow.jpg"];



// declaring the api-key and the api-host
const API_KEY = "0f8684a1d5msha79d1acb811c621p191b39jsn769e95c09f3d";
const API_HOST = "weatherapi-com.p.rapidapi.com";
let button = document.getElementById("button");



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': API_HOST
	}
};

// loading the needed data

async function loadData(){
    
    try {
        let input = document.getElementById("input").value;
        let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${input}`;
        let response = await fetch(url, options);
        let responseAsJSON = await response.json();
        let temp_c = responseAsJSON["current"]["temp_c"]
        let updated = responseAsJSON["current"]["last_updated"]
        let location_overview = responseAsJSON["location"]
        let country = location_overview["country"]
        let localTime = location_overview["localtime"]
        let region = location_overview["region"]
        let name = location_overview["name"]
        let icon = responseAsJSON["current"]["condition"]["icon"]
        inputData(temp_c,updated,country,localTime,region,name,icon)
        loadWiki(input)
    }catch {
        console.log("Es ist ein Fehler aufgetreten!");
    }
    input.value = "";
}
// loading the functing after all items are ready


function loadButtons(){
    let city = document.getElementById("cities");
    for (let i = 0; i < cities.length; i++) {
        let element = cities[i];
        city.innerHTML += `<button class="btn btn-primary" onclick="loadWeather('${element}')">${element}</button>`;
    }
    document.getElementById("loadButton").classList.add("hide");
}


async function loadWeather(city){
    let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
    let response = await fetch(url, options);
    let responseAsJSON2 = await response.json();
    let temp_c = responseAsJSON2["current"]["temp_c"]
    let updated = responseAsJSON2["current"]["last_updated"]
    let location_overview = responseAsJSON2["location"]
    let country = location_overview["country"]
    let localTime = location_overview["localtime"]
    let region = location_overview["region"]
    let name = location_overview["name"]
    let icon = responseAsJSON2["current"]["condition"]["icon"]
    console.log(location_overview)
    console.log(responseAsJSON2)
    inputData(temp_c,updated,country,localTime,region,name,icon)
    loadWiki(city);
}


function inputData(temp_c,updated,country,localTime,region,name,icon){
    let container = document.getElementById("weatherData");
    container.innerHTML = "";
    container.innerHTML += `
    <span>Ort: ${name}</span>
    <span>Temperatur: ${temp_c} Grad</span>
    <span>Land: ${country}</span>
    <span>Datum und Uhrzeit: ${localTime}</span>
    <span>Bundesland: ${region}</span>
    <span>zuletzt aktualisiert: ${updated}</span>
    
    `;
    document.getElementById("weatherIcon").innerHTML = `<img src="${icon}"></img>`
}

function loadWiki(input){
    url = `https://de.wikipedia.org/wiki/${input}`;
    let wiki = document.getElementById("wiki");
    wiki.innerHTML = `<a class="btn btn-primary btn-lg" href="${url}" target="_blank">Wikipedia ${input}</a>`
}

function slide1(){
    let container = document.getElementById("slider1");
    container.classList.add("next");
}



function start(){
    setTimeout(slide1, 3000);
}









