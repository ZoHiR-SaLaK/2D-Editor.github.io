window.oncontextmenu = (e) => {
	e.preventDefault();
}
window.onload = (e) => {

	const GRID_ELEMENT = document.querySelector('.grid');
	const GRID = new Grid(GRID_ELEMENT);
	GRID.draw();

	document.querySelector('.toolbox').onclick = (e) => {
		const which = e.target.getAttribute('function');
		if (which == null) return;

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



}