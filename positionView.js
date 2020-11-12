const positionView = {
	init: function(ctr) {
		console.log('positionView Initialized')
		this.leftArrowBtn = ctr.querySelector('.left');
		this.upArrowBtn = ctr.querySelector('.up');
		this.rightArrowBtn = ctr.querySelector('.right');
		this.downArrowBtn = ctr.querySelector('.down');

		this.leftArrowBtn.onclick = this.leftHandler;
		this.upArrowBtn.onclick = this.upHandler;
		this.rightArrowBtn.onclick = this.rightHandler;
		this.downArrowBtn.onclick = this.downHandler;
		return this;
	},
	leftHandler: function(e) {
		oct.move(coords => ({
			col: coords.col - 1,
			row: coords.row
		}));
	},
	upHandler: function(e) {
		oct.move(coords => ({
			col: coords.col,
			row: coords.row - 1
		}));
	},
	rightHandler: function(e) {
		oct.move(coords => ({
			col: coords.col + 1,
			row: coords.row
		}));
	},
	downHandler: function(e) {
		oct.move(coords => ({
			col: coords.col,
			row: coords.row + 1
		}));
	}
}