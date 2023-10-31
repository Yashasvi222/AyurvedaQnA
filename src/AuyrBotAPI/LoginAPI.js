async function query(data) {
	const response = await fetch(
		"https://ayurbot.azurewebsites.net//login",
		{
			headers: { 'Content-Type': 'application/json' },
			method: "POST",
			body: JSON.stringify(data),
		});
	const result = await response.json();
	return result;
}

const result = query({
    "username": "yoginii",
    "password": "123456"
}).then((response) => {
	console.log(JSON.stringify(response));
});

exports.query