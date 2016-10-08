$(function(){
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
			$.each(document.querySelectorAll('.mui-slider-group .mui-scroll'), function(index, pullRefreshEl) {
				$(pullRefreshEl).pullToRefresh({
					down: {
						callback: function() {
							var self = this;
							setTimeout(function() {
								var ul = self.element.querySelector('.mui-table-view');
								self.endPullDownToRefresh();
							}, 1000);
						}
					},
					up: {
						contentnomore:'没有更多行程了',
						callback: function() {
							var self = this;
							setTimeout(function() {
								createLI();
								self.endPullUpToRefresh();
							}, 1000);
						}
					}
				});
			});
			
		});
		
	})(mui);
	function createLI(){
		var cc = $('#cc');
		var Oli = '<li class="mui-table-view-cell"><div><p class="DFTMtime"><span class="fl">2016年7月20日</span><span class="fr DFTMtimeSecend">08:00</span></p><div class="DFTMpositonContent"><div class="fl"><p class="DFTMstarPosition">北京市朝阳区安贞桥东</p><p class="DFTMendPosition">昌平区回龙观克莱里雅商务楼</p></div><div class="fr DFTMendmileage">103.1km</div></div></div></li>';
		for(var i=0;i<2;i++){
				cc.append(Oli);	
		};
	};
	
	
})
