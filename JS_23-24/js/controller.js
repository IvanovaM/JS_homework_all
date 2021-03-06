define(
	'controller',
	[],
	function () {

		function Controller(view) {
			var self = this;
			view.elements.addBtn.on('click', addItem);

			function addItem() {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			};
		}
		return Controller;
	});