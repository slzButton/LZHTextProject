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
								//var DFMCList = self.element.querySelector('#DFMCList');
								//for (var i=0;i<2;i++) {
								//	var li = document.createElement('li');
								//	li.innerHTML = '<div class="DFMCcontent"><p>今日(周二)限行 4和9</p><p class="DFMCcontentP">早7点至晚8点，限行机动车（含临时号牌）禁止在五环路以内道路行驶。</p><p class="DFMCcontentTime"><span>2016-6-12</span>   <span>15:08:09</span></p></div>';
									//下拉刷新，新纪录插到最前面；
								//	DFMCList.appendChild(li);
								//}
								self.endPullUpToRefresh();
							}, 1000);
						}
					}
				});
			});
			
		});
		
	})(mui);

	
})