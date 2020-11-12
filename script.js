window.oncontextmenu = e => e.preventDefault();
window.onload = (e) => {
	const importsContainer = document.querySelector('.importContainer');
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
			case "importls":
				importsContainer.style.display = 'flex';
				break;
			default:
				console.log(e.target);
				break;
		}
	}

	window.onkeyup = (e) => {
		const Operations = {
			37: _ => GRID.move('left'),
			38: _ => GRID.move('up'),
			39: _ => GRID.move('right'),
			40: _ => GRID.move('down')
		}
		Operations[e.which]();
	}



	let ul = importsContainer.querySelector('ul');
	Object.keys(localStorage).forEach(key => {
		ul.innerHTML += `
			<li>
				<span>${key}</span>
				<button function="import">import</button>
				<button function="delete">Delete</button>
			</li>`
	})

	importsContainer.onclick = e => {
		const target = e.target.getAttribute('function');

		switch (target) {
			case "importContainer":
				importsContainer.style.display = '';
				break;
			case "import":
				{
					let drawing = e.target.parentElement.children[0].innerHTML;
					GRID.drawColoredCells(JSON.parse(localStorage.getItem(drawing)));
					importsContainer.style.display = '';
				}
				break;
			case "delete":
				{
					let drawing = e.target.parentElement.children[0].innerHTML;
					localStorage.removeItem(drawing)
					e.target.parentElement.parentElement.removeChild(e.target.parentElement);
				}
				break;
			default:

				break;
		}
	}

	GRID.draw();
}