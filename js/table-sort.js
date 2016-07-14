function initFilter(){
	var LightTableFilter = (function(Arr) {
		var _input;
		function _onInputEvent(e) {
			_input = e.target;
			var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
			Arr.forEach.call(tables, function(table) {
				Arr.forEach.call($(".campaings-list-element"), function(tbody) {
					_filter($(tbody).find(".campaigns-list-id, .campaigns-list-name"));
				});
			});
		}
		function _filter(block) {
			var text = block.text().trim().replace(/\s+/g, ' ').toLowerCase().toLowerCase();
			console.log(text);
			var val = _input.value.toLowerCase();
			if(text.indexOf(val) === -1){
				$(block).parent().removeClass('active');
			}
			else{
				if (val !=""){
					$(block).parent().addClass('active');
				}
				else{
					$(block).parent().removeClass('active');
				}
			}
		}
		return {
			init: function() {
				var inputs = document.getElementsByClassName('light-table-filter');
				Arr.forEach.call(inputs, function(input) {
					input.oninput = _onInputEvent;
				});
			}
		};
	})(Array.prototype);
	LightTableFilter.init();
}
