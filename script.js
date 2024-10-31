
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
        
    } catch(error) {
        console.error(error);
    }
}