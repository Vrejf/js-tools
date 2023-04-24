// v0.1.0 23-04-24
const apiUrl = 'https://utils-api.vercel.app/api/count/' + String(counterName);
let result = defaultNumber;

console.log("counterName: " + counterName);

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            updateCounter(result);
            throw new Error('Network response was not: ok');
        }
        return response.json();
    })
    .then(data => {
        if (Number.isInteger(data.count)) {
            result = data.count;
        } else {
            throw new Error('Value is not an integer');
        }
        updateCounter(result);
    })
    .catch(error => {
        console.error('There was a problem fetching the data:', error);
        console.log(result);
        updateCounter(result);
    });
