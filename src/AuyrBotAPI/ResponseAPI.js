async function query(data) {
	const response = await fetch(
		"https://ayurbot.azurewebsites.net/query",
		{
			headers: { 'Content-Type': 'application/json' },
			method: "POST",
			body: JSON.stringify(data),
		});
	const result = await response.json();
	return result;
}

const result = query({
    "query": "What does the term 'panchakarma' refer to in Ayurveda, and how many traditional cleansing actions are associated with it?",
    "top_n": 3
}).then((response) => {
	console.log(JSON.stringify(response));
});

exports.query