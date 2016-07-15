function initFilter(filter_input, filter_table, elementFilter, filterList){
	var LightTableFilter = (function(Arr) {
		var _input;
		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(filter_table);
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call($(table).find(elementFilter), function(tbody) {
					_filter($(tbody).find(filterList));
				});
			});
		}
		function _filter(block) {
			var text = block.text().trim().replace(/\s+/g, ' ').toLowerCase().toLowerCase();
			console.log(text);
			var val = _input.value.toLowerCase();
			if(text.indexOf(val) === -1){
				$(block).parent().hide();
			}
			else{
				$(block).parent().show();
			}
		}
		return {
			init: function() {
				var inputs = document.getElementsByClassName(filter_input);
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);
	LightTableFilter.init();
}
