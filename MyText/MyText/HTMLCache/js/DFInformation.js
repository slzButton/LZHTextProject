$(function(){
	mui.init();
	initcategory();
	
	
	

	
})
function muiRefresh(){	
		(function($) {
			//阻尼系数
			var deceleration = mui.os.ios?0.003:0.0009;
			$('.mui-scroll-wrapper').scroll({
				bounce: false,
				indicators: true, //是否显示滚动条
				deceleration:deceleration
			});
			//Detialjump();
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
						callback: function() {
							var self = this;
							setTimeout(function() {
								var cid = document.getElementById("channelId").value;
								createLIAA(cid);
								self.endPullUpToRefresh();
							}, 1000);
						}
					}
				});
			});	
		})(mui);
	}
function createLIAA(cid){
	var page = $("#page"+cid).val();
	initPage(cid, page);
	$("#page"+cid).val(page*1+1);
};
function Detialjump(){
	$.each(document.querySelectorAll('.mui-table-view-cell'), function() {
		this.addEventListener('tap',function(){
			window.location.href = 'DFInformationDetial.html'
		});
	});
}
