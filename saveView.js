const saveView = {
	init: function(ctr) {
		console.log('saveView Initialized')
		this.exportBtn = ctr.querySelector('.export');
		this.importBtn = ctr.querySelector('.import');
		this.exportlsBtn = ctr.querySelector('.savels');
		this.importlsBtn = ctr.querySelector('.importls');

		this.exportBtn.onclick = this.exportHandler;
		this.importBtn.onclick = this.importHandler;
		this.exportlsBtn.onclick = this.exportlsHandler;
		this.importlsBtn.onclick = this.importlsHandler;
		return this;
	},
	exportHandler: function(e) {
		oct.export();
	},
	importHandler: function(e) {
		oct.import();
	},
	exportlsHandler: function(e) {
		oct.exportToLocalStoratge();
	},
	importlsHandler: function(e) {
		oct.showImportList();
	},
}