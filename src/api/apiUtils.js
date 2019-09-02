export async function handleResponse(response) {
	if (response.ok) return response.json();
	if (response.status === 400) {
		// So, a server-side validation error occurred.
		// Server side validation returns a string error message, so parse as text instead of json.
		const error = await response.text();
		throw new Error(error);
	}
	throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
	console.error("API call failed. " + error);
	throw error;
}

export function depopulateObject(obj, ...populatedProperties) {
	const depopulatedObject = obj;

	populatedProperties.forEach(property => {
		let targetProp = obj[property];
		if (!Array.isArray(targetProp)) {
			depopulatedObject[property] = targetProp._id;
		} else {
			let depopulated = [];
			depopulatedObject[property].forEach(item => {
				depopulated.push(item._id);
			});
			depopulatedObject[property] = depopulated;
		}
		return;
	});
	return depopulatedMongooseObject;
}
