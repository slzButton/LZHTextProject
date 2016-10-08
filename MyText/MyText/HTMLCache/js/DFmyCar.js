$(function(){
//	banner star
	mui.init({
				swipeBack:true //启用右滑关闭功能
			});
	//获得slider插件对象
	var DFHPimgBanner = mui('#DFHPimgBanner');
	DFHPimgBanner.slider({
	  interval:1000//自动轮播周期，若为0则不自动播放，默认为0；
	});
//	banner end
	$('.DFHPphon').click(function(){
		$('.DFRRmengban').show();
	});
	$('.DFRRmengbanBtnCancel').click(function(){
		$('.DFRRmengban').hide();
	});
	
})