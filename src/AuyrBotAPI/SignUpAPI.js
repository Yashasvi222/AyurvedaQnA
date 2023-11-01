//function for making an api call to azure to register new userss
async function query(data) {
	const response = await fetch(
		"https://ayurbot.azurewebsites.net/signup",
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
    "email": "yoginiiwaykole10@gmail.com",
    "password": "123456"
}).then((response) => {
	console.log(JSON.stringify(response));
});

exports.query