const gridView = {
	init: function(ctr) {
		console.log('gridView Initialized')
		oct.genCells();
		this.render();
		return this;
	},
	render: function() {
		const GRIDctr = oct.getGridContainer();
		oct.getCells().forEach(cell => {
			GRIDctr.appendChild(cell.element);
		})
	}
}