$(function(){
	var $oBodyHieght = $('body').height();
	var $oHeaderHeight = $('#DFHPheader').height();
	var $CLmainHeight = $oBodyHieght-$oHeaderHeight;
	$('#DFEmain').css('height',$CLmainHeight);

	
})
