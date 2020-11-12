
//import Axios from "axios"


export async function getTokenApi() {
	const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token');
	console.log(response);
	return  response.json();
}


export async function sendFormApi(formData, token) {
	const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
		method: 'POST',
		body: formData,
		headers: {
			'Token': token
		},
	});
	console.log(response)
	return   response;
}


export async function request(url) {
	const response = await fetch(url);
	return await response.json();
}