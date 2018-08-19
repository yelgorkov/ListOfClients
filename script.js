const myRequest = new Request('clients.json');
let clientsData = []; 

fetch(myRequest)
	.then(function (response) {
		return response.json();
	})
	.then(function(data) {
		clientsData = data;
		clientsData.forEach(addNewClients);
	})
	.catch(function (err) {
		console.log(err);
	});

const clientList = document.createElement('div');
clientList.setAttribute('id', 'client-container');

function addNewClients(student, index, arr) {
	const newClient = document.createElement('div');
	newClient.setAttribute('class', 'new-client');
	const newParagraph = document.createElement('p');
	const newImage = document.createElement('img');
	const text = document.createTextNode(student.general.firstName + ' ' + student.general.lastName);

	newImage.src = student.general.avatar;

	newParagraph.appendChild(text);
	newClient.appendChild(newImage);
	newClient.appendChild(newParagraph);
	clientList.appendChild(newClient);
	const menu = document.getElementById('clients-menu');
	menu.appendChild(clientList);

	newClient.addEventListener('click', function() {
 		const fullDiscription = document.getElementById('box');
		const temporaryDiv = document.createElement('div');
		const myEle = document.getElementById('temp');
		temporaryDiv.setAttribute('id', 'temp');

		if (myEle) {
			fullDiscription.removeChild(myEle);
		}

		const client = document.createElement('p');
		const job = document.createElement('p');
		const contact = document.createElement('p');
		const address = document.createElement('p');
		const bigImage = document.createElement('img');

		fullDiscription.appendChild(temporaryDiv);
		temporaryDiv.appendChild(bigImage);
		temporaryDiv.appendChild(client);
		temporaryDiv.appendChild(job);
		temporaryDiv.appendChild(contact);
		temporaryDiv.appendChild(address);

		const clientText = document.createTextNode(student.general.firstName + ' ' + student.general.lastName);
		const jobText = document.createTextNode('Job: ' + student.job.company + '. Position: ' + student.job.title);
		const contactText = document.createTextNode('Contacts: ' + student.contact.email + ', ' + student.contact.phone);
		const adressText = document.createTextNode('Address: ' + student.address.street + ', ' + student.address.city + ', ' + student.address.zipCode + ', ' + student.address.country);

		bigImage.src = student.general.avatar;

		client.appendChild(clientText);
		job.appendChild(jobText);
		contact.appendChild(contactText);
		address.appendChild(adressText);
	})
}

function searchForClient(inputValue, data) {
	const filtered = data.filter(function(value) {
		return value.general.firstName === inputValue;
	});
	return filtered;
}

const input = document.getElementById('input');
input.addEventListener('keypress', function(event) {
	if (event.which === 13) {
		const filteredClients =	searchForClient(event.target.value, clientsData);
		const deleteOtherClients = document.getElementById('client-container');
		deleteOtherClients.parentNode.removeChild(deleteOtherClients);
		filteredClients.forEach(addFilteredClient);

	}
});

function addFilteredClient(student, index, arr) {
	const newClient = document.createElement('div');
	newClient.setAttribute('class', 'new-client');
	const newParagraph = document.createElement('p');
	const newImage = document.createElement('img');
	const text = document.createTextNode(student.general.firstName + ' ' + student.general.lastName);

	newImage.src = student.general.avatar;

	newParagraph.appendChild(text);
	newClient.appendChild(newImage);
	newClient.appendChild(newParagraph);
	clientList.appendChild(newClient);
	const menu = document.getElementById('clients-menu');
	menu.appendChild(newClient);

	newClient.addEventListener('click', function() {
 		const fullDiscription = document.getElementById('box');
		const temporaryDiv = document.createElement('div');
		const myEle = document.getElementById('temp');
		temporaryDiv.setAttribute('id', 'temp');

		if (myEle) {
			fullDiscription.removeChild(myEle);
		}

		const client = document.createElement('p');
		const job = document.createElement('p');
		const contact = document.createElement('p');
		const address = document.createElement('p');
		const bigImage = document.createElement('img');

		fullDiscription.appendChild(temporaryDiv);
		temporaryDiv.appendChild(bigImage);
		temporaryDiv.appendChild(client);
		temporaryDiv.appendChild(job);
		temporaryDiv.appendChild(contact);
		temporaryDiv.appendChild(address);

		const clientText = document.createTextNode(student.general.firstName + ' ' + student.general.lastName);
		const jobText = document.createTextNode('Job: ' + student.job.company + '. Position: ' + student.job.title);
		const contactText = document.createTextNode('Contacts: ' + student.contact.email + ', ' + student.contact.phone);
		const adressText = document.createTextNode('Address: ' + student.address.street + ', ' + student.address.city + ', ' + student.address.zipCode + ', ' + student.address.country);

		bigImage.src = student.general.avatar;

		client.appendChild(clientText);
		job.appendChild(jobText);
		contact.appendChild(contactText);
		address.appendChild(adressText);
	})
}