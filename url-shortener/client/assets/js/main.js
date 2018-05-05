const serverURL = 'http://localhost:3000/'

/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const shortenURL = (server) => {
    console.log('Saving the following object to the server:', urlData);
	/* Fetches a response from the given server. */
    fetch(server)
	.then(function(response) {
        return response.json();
    }).then(function(data) {
		console.log(data)
    })
}

/* Makes this run when we hit the 'SHORTEN URL' button */
document.querySelector('button-shorten-url').onclick = shortenURL(serverURL)
