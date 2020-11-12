const importListBoxView = {
	init: function(ctr) {
		console.log('importListBoxView Initialized')
		this.importContainer = ctr.querySelector('.importContainer');
		this.importBox = ctr.querySelector('.importListBox');
		Object.keys(localStorage).forEach(item => {
			const li = document.createElement('li');
			li.innerHTML = item;
			li.onclick = _ => {
				oct.importFromLocalStoratge(item);
				this.hide();
			}
			this.importBox.appendChild(li)
		});
		return this;
	},
	render: function() {
		this.importContainer.style.display = 'flex';
	},
	hide: function() {
		this.importContainer.style.display = 'none';
	}
}