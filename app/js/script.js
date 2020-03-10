`use stirct`;

const url = "https://swapi.co/api/people"

async function sendRequest(method,url,body = null) {
    const response = await fetch(url)
    const swapiJson = await response.json();
    console.log(JSON.stringify(swapiJson))
}

sendRequest(url).then(() => console.log('ok'));