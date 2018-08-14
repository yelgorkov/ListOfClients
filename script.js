const myRequest = new Request('clients.json');

fetch(myRequest)
	.then(function (response) {
		return response.json();
	})
	.then(giveDataToHtml)
	.catch(function (err) {
		console.log(err);
	});

function giveDataToHtml(data) {
	data.forEach(addNewClients);
}

function addNewClients(student, index, arr) {
	const newClient = document.createElement('div');
	const newParagraph = document.createElement('p');
	const newImage = document.createElement('img');
	const text = document.createTextNode(student.general.firstName + ' ' + student.general.lastName);

	newImage.src = student.general.avatar;

	newParagraph.appendChild(text);
	newClient.appendChild(newImage);
	newClient.appendChild(newParagraph);
	document.body.appendChild(newClient);
}
