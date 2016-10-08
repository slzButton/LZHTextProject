
$(function() {
	//日历
	(function($) {
	$.init();
	var result = $('#DFCMinsuranceDate')[0];
	document.getElementById("DFCMinsuranceDate").addEventListener('tap', function() {
		var optionsJson = this.getAttribute('data-options') || '{}';
		var options = JSON.parse(optionsJson);
		var id = this.getAttribute('id');
		var picker = new $.DtPicker(options);
		picker.show(function(rs) {
			result.innerText = rs.text;
			picker.dispose();
		});
	}, false);
	})(mui);
	//解绑此车辆
	$('#DFVIbtn').click(function(e) {
		e.stopPropagation();
		$('.DFRRmengban').show();
	})
	$('.DFRRmengban').click(function() {
		$('.DFRRmengban').hide();
	})
	$('.DFRRmengbanBtnCancel').click(function(e) {
		e.stopPropagation();
		$('.DFRRmengban').hide();
	})
	$('.DFRRmengbanContent').click(function(e) {
		e.stopPropagation();
	})
})