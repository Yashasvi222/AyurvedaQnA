// async function query(data) {
// 	const response = await fetch(
// 		"https://api-inference.huggingface.co/models/omvarshney03/AyurVeda-BERT",
// 		{
// 			headers: { Authorization: "Bearer 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" },
// 			method: "POST",
// 			body: JSON.stringify(data),
// 		}
// 	);
// 	const result = await response.json();
// 	return result;
// }

// const result = query({"inputs": {
// 		"question": "How are 'khavaigunyas' typically formed in the body, and why are they susceptible to frequent or chronic imbalances?",
// 		// "context": "close ayurvedic glossary of terms katu the pungent taste, which is predominated by the fire and air elements, and is balancing to kapha, but aggravating to vata and pitta. close ayurvedic glossary of terms khavaigunya a weak or defective space in the body typically caused by past injury, illness, trauma, or familial genetic patterns; khavaigunyas are especially vulnerable to frequent or chronic imbalance because they tend to attract ama and excesses in the doshas. close ayurvedic glossary of terms ama raw, undigested; a toxic, disease-causing substance that can accumulate in the body when foods, herbs, emotions or experiences are not fully processed, digested, or assimilated. close ayurvedic glossary of terms doshas one of three functional energies in nature: vata, pitta, and kapha. in the body, it is the unique ratio of these three humors that determines an individual's prakriti (constitution)."
// 	}}).then((response) => {
// 	console.log(JSON.stringify(response));
// });


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