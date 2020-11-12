const oct = {
	init: function() {
		console.log('Oct Initialized')
		model.init();
		view.init(document, { CELL_WIDTH: model.CELL_WIDTH });
	},
	getCells: function() {
		return model.CELLS_LIST;
	},
	getGridContainer: function() {
		return model.GRID;
	},
	genCells: function(elm) {
		const { width, height } = elm.getBoundingClientRect();
		const columns = Math.floor(width / model.CELL_WIDTH);
		const rows = Math.floor(height / model.CELL_WIDTH);
		model.generateCells(rows, columns);
	},
	getColoredCells: function() {
		return this.getCells().reduce((accu, cell) => {
			if (cell.colored) accu.push(cell);
			return accu;
		}, []);
	},
	move: function(newIndex) {
		const coloredCells = this.getColoredCells();
		coloredCells.forEach(cell => cell.unpaint())
		coloredCells.forEach(coloredCell => {
			const index = JSON.stringify(newIndex(coloredCell.coords));
			const newCell = model.CELLS_LIST.find(cell => JSON.stringify(cell.coords) == index);
			newCell.paint()
		})
	},
	zoom: function(z) {
		const coloredCells = this.getColoredCells();
		this.clearGRID();
		const current = model.GRID.style.zoom == "" ? 0 : +(model.GRID.style.zoom);
		model.GRID.style.zoom = z(current);
		this.genCells(model.GRID);
		view.render('gridView');
		this.drawColoredCells(coloredCells);
	},
	clearGRID: function() {
		model.GRID.innerHTML = '';
		model.CELLS_LIST = [];
	},
	drawColoredCells: function(cells) {
		cells.forEach(coloredCell => {
			let newCell = model.CELLS_LIST.find(cell => JSON.stringify(cell.coords) == JSON.stringify(coloredCell.coords));
			if (newCell)
				newCell.paintColor(coloredCell.color);
		})
	},
	getDrawingData: function() {
		return JSON.stringify(this.getColoredCells().map(cell => ({
			coords: cell.coords,
			color: cell.color
		})));
	},
	exportToLocalStoratge: function() {
		let drawingName = askDrawingName();
		if (drawingName) {
			let data = this.getDrawingData();
			localStorage.setItem(drawingName, data);
		}
	},
	clear: function() {
		this.getColoredCells().forEach((cell) => {
			cell.unpaint()
		})
	},
	importFromLocalStoratge: function(key) {
		this.clear()
		this.drawColoredCells(JSON.parse(localStorage.getItem(key)))
	},
	showImportList: function() {
		view.render('importListBoxView');
	},
	export: function() {
		let data = this.getDrawingData();
		download(data);
	},
	import: function() {
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
}