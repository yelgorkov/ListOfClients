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
	const menu = document.getElementById('clients-menu');
	menu.appendChild(newClient);

	newClient.addEventListener('click', function() {
 		

		const fullDiscription = document.getElementById('box');
		const temporaryDiv = document.createElement('div');
		const myEle = document.getElementById("temp");
		temporaryDiv.setAttribute("id", "temp");

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
	newClient.addEventListener('mouseover', function() {
		this.style.background = 'grey';
	})
	newClient.addEventListener('mouseout', function() {
		this.style.background = 'blue';
	})
}
