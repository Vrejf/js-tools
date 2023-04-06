
const apiUrl = 'https://utils-fastapi-643c.up.railway.app/api/count/' + String(counterName);
let result = defaultNumber;

console.log("counterName: " + counterName);

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            updateCounter(result);
            throw new Error('Network response was not ok');
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
        updateCounter(result);
        console.error('There was a problem fetching the data:', error);
        console.log(result);
    });
