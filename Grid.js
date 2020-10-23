function Grid(element) {

	this.CELL_WIDTH = 25;
	this.CELLS_LIST = [];

	let askDrawingName = () => {

		while (true) {
			let drawingName = prompt("Enter a Drawing name", "Drawing");
			if (Object.keys(localStorage).find(key => key == drawingName) === undefined)
				return drawingName;
		}

	}
	this.saveToLocalStorage = () => {
		let drawingName = askDrawingName();

		if (drawingName) {
			let cells = JSON.stringify(this.getColoredCells().map(cell => ({
				coords: cell.coords,
				color: cell.color
			})));
			localStorage.setItem(drawingName, cells);
		}
	}

	this.export = () => {
		let cells = JSON.stringify(this.getColoredCells().map(cell => ({
			coords: cell.coords,
			color: cell.color
		})));
		download(cells);
	}

	this.import = () => {
		let element = document.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', '.txt');

		element.style.display = 'none';
		document.body.appendChild(element);
		element.onchange = (e) => {
			let fr = new FileReader();
			fr.onload = _ => this.drawColoredCells(JSON.parse(fr.result));
			fr.readAsText(element.files[0]);
		}
		element.click();
		document.body.removeChild(element);
	}



	this.draw = () => {
		const columns = getColumns();
		const rows = getRows();

		for (let j = 0; j < rows; j++) {
			for (let i = 0; i < columns; i++) {
				let coords = {
					col: i,
					row: j
				};
				const cell = new Cell(this.CELL_WIDTH, coords);
				this.CELLS_LIST.push(cell);
				element.appendChild(cell.print());
			}
		}
	}

	this.toggleBorder = () => {
		element.classList.toggle('noBorder');
	}

	this.clear = () => {
		this.getColoredCells().forEach((cell) => {
			cell.unpaint()
		})
	}
	this.getColoredCells = () => {
		return this.CELLS_LIST.reduce((accu, cell) => {
			if (cell.colored) accu.push(cell);
			return accu;
		}, []);
	}

	this.clearGRID = () => {
		element.innerHTML = '';
		this.CELLS_LIST = [];
	}

	this.drawColoredCells = (cells) => {
		cells.forEach(coloredCell => {
			let newCell = this.CELLS_LIST.find(cell => JSON.stringify(cell.coords) == JSON.stringify(coloredCell.coords));
			if (newCell)
				newCell.paintColor(coloredCell.color);
		})
	}

	this.reset = () => {
		let cells = this.getColoredCells();
		this.clearGRID();
		element.style.zoom = 1;
		this.draw();
		this.drawColoredCells(cells);
	}

	this.zoom = (dir) => {
		let cells = this.getColoredCells();
		this.clearGRID();
		let current = element.style.zoom == "" ? 0 : +(element.style.zoom);
		element.style.zoom = dir(current);
		this.draw();
		this.drawColoredCells(cells);
	}
	this.move = (dir) => {
		let cells = this.getColoredCells();
		cells.forEach(cell => {
			cell.unpaint()
		})

		cells = JSON.parse(JSON.stringify(cells));

		cells.forEach(cell => {
			let index = JSON.stringify(moveDir(dir, cell.coords));
			let newCell = this.CELLS_LIST.find(cell => JSON.stringify(cell.coords) == index);
			if (newCell)
				newCell.paintColor(cell.color);
		})
	}

	const moveDir = (dir, coords) => {
		let newCoords = { ...coords
		};
		switch (dir) {
			case "left":
				newCoords.col -= 1;
				break;
			case "up":
				newCoords.row -= 1;
				break;
			case "right":
				newCoords.col += 1;
				break;
			case "down":
				newCoords.row += 1;
				break;
		}
		return newCoords;
	}

	const getColumns = () => {
		return Math.floor(element.getBoundingClientRect().width / this.CELL_WIDTH);
	}

	const getRows = () => {
		return Math.floor(element.getBoundingClientRect().height / this.CELL_WIDTH);
	}

	const download = (text) => {
		var element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		element.setAttribute('download', 'Capture');

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}
}