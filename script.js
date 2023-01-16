
// declaring the api-key and the api-host
const API_KEY = "YOU API_KEY";
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
        console.log(responseAsJSON)
    }catch {
        console.log("Es ist ein Fehler aufgetreten!")
    }

    input.value = "";
}
// loading the functing after all items are ready



