const COLOR = document.querySelector('.color');

function Cell(dimension, coords) {
	this.coords = coords;
	this.colored = false;
	this.color = '';
	this.print = _ => div;

	const div = document.createElement('div');
	div.style.width = dimension + "px";
	div.style.height = dimension + "px";
	div.setAttribute('coords', JSON.stringify(coords))


	div.onmouseup = (e) => {
		switch (e.which) {
			case 1:
				this.paint();
				break;
			case 3:
				COLOR.jscolor.setValueElementValue(this.color);
				COLOR.jscolor.setPreviewElementBg(this.color);
				break;

			default:
				console.log(e.which);
				break;
		}
	}


	this.paint = () => {

		if (this.colored)
			this.unpaint();
		else {
			div.style.background = COLOR.value;
			this.color = COLOR.value;
			this.colored = true;
		}
	}

	this.paintColor = (color) => {
		div.style.background = color;
		this.color = color;
		this.colored = true;
	}
	this.unpaint = () => {
		div.style.background = '';
		this.colored = false;
	};

}const COLOR = document.querySelector('.color');

function Cell(dimension, coords) {
	this.coords = coords;
	this.colored = false;
	this.color = '';
	this.print = _ => div;

	const div = document.createElement('div');
	div.style.width = dimension + "px";
	div.style.height = dimension + "px";
	div.setAttribute('coords', JSON.stringify(coords))


	div.onmouseup = (e) => {
		switch (e.which) {
			case 1:
				this.paint();
				break;
			case 3:
				COLOR.jscolor.setValueElementValue(this.color);
				COLOR.jscolor.setPreviewElementBg(this.color);
				break;

			default:
				console.log(e.which);
				break;
		}
	}


	this.paint = () => {

		if (this.colored)
			this.unpaint();
		else {
			div.style.background = COLOR.value;
			this.color = COLOR.value;
			this.colored = true;
		}
	}

	this.paintColor = (color) => {
		div.style.background = color;
		this.color = color;
		this.colored = true;
	}
	this.unpaint = () => {
		div.style.background = '';
		this.colored = false;
	};

}
