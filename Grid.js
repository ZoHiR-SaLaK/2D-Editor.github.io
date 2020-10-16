function Grid(element) {

	this.CELL_WIDTH = 25;
	this.CELLS_LIST = [];
	this.border = true;

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
		const cells = this.getColoredCells();
		cells.forEach(cell => {
			cell.unpaint()
		})


		cells.forEach(cell => {
			let index = JSON.stringify(moveDir(dir, cell.coords));
			let newCell = this.CELLS_LIST.find(cell => JSON.stringify(cell.coords) == index);
			if (newCell)
				newCell.paintColor(cell.color);
		})
	}

	let moveDir = (dir, coords) => {
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

	let getColumns = () => {
		return Math.floor(element.getBoundingClientRect().width / this.CELL_WIDTH);
	}

	let getRows = () => {
		return Math.floor(element.getBoundingClientRect().height / this.CELL_WIDTH);
	}
}