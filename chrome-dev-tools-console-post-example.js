fetch('https://kong-f40972acc5us3jemn.kongcloud.dev/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Or 'application/x-www-form-urlencoded' depending on your API
        'Authorization': 'Bearer YOUR_AUTH_TOKEN' // If authentication is required
    },
    body: JSON.stringify({ // Stringify the body for JSON content-type
        "query": "{hello}"
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Or response.text() if the response is not JSON
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Error:', error);
});