const COLOR = document.querySelector('.color');
class Cell {
	constructor(dimension, coords) {
		this.coords = coords;
		this.colored = false;
		this.color = '';
		this.element = (function() {
			const div = document.createElement('div');
			div.style.width = dimension + "px";
			div.style.height = dimension + "px";
			div.setAttribute('coords', JSON.stringify(coords))
			return div;
		})()
		this.element.onmouseup = (e) => {
			this.clickhandler(e)
		};
	}

	clickhandler(e) {
		switch (e.which) {
			case 1:
				if (this.colored)
					this.unpaint();
				else
					this.paintColor(COLOR.value);
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

	paint() {
		this.paintColor(COLOR.value);
	}

	paintColor(color) {
		this.element.style.background = color;
		this.color = color;
		this.colored = true;
	}

	unpaint() {
		this.element.style.background = '';
		this.colored = false;
	}

}