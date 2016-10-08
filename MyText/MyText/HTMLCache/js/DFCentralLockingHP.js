$(function(){
	var $oBodyHieght = $('body').height();
	var $oHeaderHeight = $('#DFHPheader').height();
	var $CLmainHeight = $oBodyHieght-$oHeaderHeight;
	$('#CLHPmain').css('height',$CLmainHeight);
	$('.DFHPphon').click(function(){
		$('.DFRRmengban').show();
	});
	$('.DFRRmengbanBtnCancel').click(function(){
		$('.DFRRmengban').hide();
	});
	
})
