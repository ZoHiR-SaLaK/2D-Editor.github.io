const view = {
	init: function(doc) {
		console.log('View Initialized')
		const ctr = Select('.container');
		const toolBox = Select('.toolbox');
		const body = Select('body');
		this.views = {
			"gridView": gridView.init(ctr),
			"helpersView": helpersView.init(toolBox),
			"positionView": positionView.init(toolBox),
			"zoomView": zoomView.init(toolBox),
			"saveView": saveView.init(toolBox),
			"importListBoxView": importListBoxView.init(body)
		};
	},
	render: function(v) {
		this.views[v].render();
	}
}