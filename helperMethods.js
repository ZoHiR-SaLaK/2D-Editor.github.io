const download = (text) => {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', 'Capture');

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}
const askDrawingName = () => {
	while (true) {
		let drawingName = prompt("Enter a Drawing name", "Drawing");
		if (Object.keys(localStorage).find(key => key == drawingName) === undefined)
			return drawingName;
	}
}

const Select = (selector) => {
	return document.querySelector(selector);
}