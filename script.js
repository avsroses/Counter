const counterDisplay = document.getElementById("counter");


/**
 * fetch counter from database
 */
async function fetchCounter() {
    try {
        // define URL
        const getUrl = "https://api.counterapi.dev/v1/halloween/CTL"

        // fetch response
        const response = await fetch(getUrl);

        // check response okay
        if(!response.ok) {
            throw new Error("Response status: ", response.status);
        }

        // get json
        const json = await response.json();
        return json.count;

    } catch(error) {
        console.error(error);
    }
}

/**
 * fetch counter from API and display on counterDisplay
 */
async function updateCounter() {
    const counter = await fetchCounter();
    counterDisplay.innerHTML = counter;
}

// update counter every second
setInterval(updateCounter, 1000);