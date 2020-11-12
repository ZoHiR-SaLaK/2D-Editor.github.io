const helpersView = {
	init: function(ctr) {
		console.log('helpersView Initialized')
		this.clearBtn = ctr.querySelector('.clear');
		this.borderBtn = ctr.querySelector('.border');
		this.colorPickerInput = ctr.querySelector('.color');
		this.clearBtn.onclick = this.clearHandler;
		this.borderBtn.onclick = this.borderHandler;
		return this;
	},
	clearHandler: function(e) {
		oct.clear()
	},
	borderHandler: function(e) {
		oct.getGridContainer().classList.toggle('noBorder');
	},
	colorPickerHandler: function(e) {

	},
}