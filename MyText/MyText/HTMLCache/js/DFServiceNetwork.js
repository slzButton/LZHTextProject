var myScroll;
var myScrollOne;
function loaded () {
	myScroll = new IScroll('#wrapper', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		click: true
//		fadeScrollbars: true
	});
	myScrollOne = new IScroll('.rightBigContent', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		click: true
//		fadeScrollbars: true
	});
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

$(function(){
	loaded();
	
	$('.DFSNmenu').click(function(e){
		e.stopPropagation();
		initProvince("pro_div");
		$('.DFSNMaskMeu').show();
		$('.DFSNmenu img').attr('src','img/SNup.png');
		myScroll.refresh();
		myScrollOne.refresh();
	});
	$('.DFSNMaskMeu').click(function(e){
		e.stopPropagation();
		$('.DFSNMaskMeu').hide();
	});
	$('#wrapper').click(function(e){
		e.stopPropagation();
	});
	$('.rightBigContent').click(function(e){
		e.stopPropagation();
	});
	//下拉菜单 end-----------------------------------------------
//	下拉刷新 star----------------------------------------------
	DFSNmengban();
	mui.init();
	(function($) {
		//阻尼系数
		var deceleration = mui.os.ios?0.003:0.0009;
		$('.mui-scroll-wrapper').scroll({
			bounce: false,
			indicators: true, //是否显示滚动条
			deceleration:deceleration
		});
		$.ready(function() {
			//循环初始化所有下拉刷新，上拉加载。
			var initP = 1;
			$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
				$(pullRefreshEl).pullToRefresh({
					down: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								var ul = self.element.querySelector('.mui-table-view');
								//ul.insertBefore(createFragment(ul, index, 10, true), ul.firstChild);
								self.endPullDownToRefresh();
							}, 1000);
						}
					},
					up: {
						contentrefresh : "正在加载...",
						callback: function() {
							var self = this;
							setTimeout(function() {
								var province = document.getElementById("province").value;
								var city = document.getElementById("city").value;
								initPage("province", city);
								self.endPullUpToRefresh();
							}, 1000);
						}
					}
				});
			});
			
		});
		
	})(mui);
//	cancel megnban
	$('.DFSNcancelPhone').click(function(){
		$('.DFSNmarkPhone').hide();
	})
	function DFSNmengban(){
		var DFSNmengban = document.body.querySelector('.DFSNmarkPhone');
		$.each(document.body.querySelectorAll('.DFSNphoneImg'), function() {
			this.addEventListener('tap',function(){
				DFSNmengban.style.display = 'block';
			});
		});
	}
	
	
//下拉刷新 end -----------------------------------------------
	
	
	
})

