
$(function(){
//	下拉刷新 star----------------------------------------------
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
								//var DFMIlist = self.element.querySelector('#DFMIlist');
								//for (var i=0;i<2;i++) {
								//	var li = document.createElement('li');
								//	li.innerHTML = '<p class="DFMIlistP"><span class="fl">2016-11-11 09:00:00</span><span class="fr DFMIlistColor">+50</span></p>'//下拉刷新，新纪录插到最前面；
								//	DFMIlist.appendChild(li);
								//}
								initPage();
								self.endPullUpToRefresh();
							}, 1000);
						}
					}
				});
			});
			
		});
		
	})(mui);

//下拉刷新 end -----------------------------------------------
})

