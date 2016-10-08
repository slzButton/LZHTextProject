$(function(){
	DFRRmengban();
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
								initPage(null, null);
								DFRRmengban();
								self.endPullUpToRefresh();
							}, 1000);
						}
					}
				});
			});
		});
		
	})(mui);
//	cancel megnban
	$('.DFRRmengbanBtnCancel').click(function(){
		$('.DFRRmengban').hide();
	})
	function DFRRmengban(){
		var DFRRmengban = document.body.querySelector('.DFRRmengban');
		$.each(document.body.querySelectorAll('.DFRRtell'), function() {
			this.addEventListener('tap',function(){
				DFRRmengban.style.display = 'block';
				
			});
		});
	}
//暂无服务信息 获取高
	getDFRRNoServiceHeight();
	window.onresize = function(){
		getDFRRNoServiceHeight();
	}
	function getDFRRNoServiceHeight(){
		var bodyHeight = $('body').height();
		var DFRRheaderHeight = $('#DFRRheader').height();
		var DFRRmapHeight = $('.DFRRmap').height();
		var DFMIcontentHeight = bodyHeight-DFRRheaderHeight-DFRRmapHeight;
		$('.DFRRNoService').css('height',DFMIcontentHeight-36);
	}
	
})