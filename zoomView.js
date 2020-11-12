const zoomView = {
	init: function(ctr) {
		console.log('zoomView Initialized')
		this.zoomOutBtn = ctr.querySelector('.zoomOut');
		this.resetBtn = ctr.querySelector('.reset');
		this.zoomInBtn = ctr.querySelector('.zoomIn');

		this.zoomOutBtn.onclick = this.zoomOutHandler;
		this.resetBtn.onclick = this.resetHandler;
		this.zoomInBtn.onclick = this.zoomInHandler;
		return this;
	},
	zoomOutHandler: function(e) {
		oct.zoom((a) => a - .1);
	},
	resetHandler: function(e) {
		oct.zoom((a) => 1);
	},
	zoomInHandler: function(e) {
		oct.zoom((a) => a + .1);
	},
}