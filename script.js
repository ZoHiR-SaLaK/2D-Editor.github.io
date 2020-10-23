window.oncontextmenu = (e) => {
	e.preventDefault();
}
window.onload = (e) => {

	const GRID_ELEMENT = document.querySelector('.grid');
	const GRID = new Grid(GRID_ELEMENT);

	document.querySelector('.toolbox').onclick = (e) => {
		const which = e.target.getAttribute('function');
		switch (which) {
			case "clear":
				GRID.clear();
				break;
			case "left":
				GRID.move('left')
				break;
			case "up":
				GRID.move('up')
				break;
			case "right":
				GRID.move('right')
				break;
			case "down":
				GRID.move('down')
				break;
			case "border":
				GRID.toggleBorder();
				break;
			case "zoomOut":
				GRID.zoom((a) => a - .1);
				break;
			case "zoomIn":
				GRID.zoom((a) => a + .1);
				break;
			case "reset":
				GRID.reset();
				break;
			case "export":
				GRID.export();
				break;
			case "import":
				GRID.import();
				break;
			case "savels":
				GRID.saveToLocalStorage();
				break;
			default:
				// console.log(e.target);
				break;
		}
	}

	window.onkeyup = (e) => {
		switch (e.which) {
			case 37:
				GRID.move('left');
				break;
			case 38:
				GRID.move('up');
				break;
			case 39:
				GRID.move('right');
				break;
			case 40:
				GRID.move('down');
				break;
			default:
				console.log(e);
				break;
		}
	}
	GRID.draw();



	const select = document.querySelector('select');
	Object.keys(localStorage).forEach(key => {

		let option = document.createElement('option');
		option.innerHTML = key;
		option.setAttribute('value', key);
		select.appendChild(option)
	})
	select.onchange = (e) => {
		if (+e.target.value < 1)
			return;
		GRID.clear();
		GRID.drawColoredCells(JSON.parse(localStorage.getItem(e.target.value)));
	}
}