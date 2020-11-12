const model = {
	init: function() {
		console.log('Model Initialized');
		this.CELL_WIDTH = 25;
		this.CELLS_LIST = [];
		this.GRID = document.querySelector('.grid');;
	},
	generateCells: function(rows, columns) {
		for (let row = 0; row < rows; row++) {
			for (let col = 0; col < columns; col++) {
				const cell = new Cell(this.CELL_WIDTH, { col, row });
				this.CELLS_LIST.push(cell);
			}
		}
	},
	setGrid: function(elm) {
		this.GRID = elm;
	}
}