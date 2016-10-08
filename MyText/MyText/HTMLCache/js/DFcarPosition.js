var map;
$(function(){
	var $oBodyHieght = $('body').height();
	var $oHeaderHeight = $('#DFHPheader').height();
	var $CLmainHeight = $oBodyHieght-$oHeaderHeight;
	$('#DFsectionMap').css('height',$CLmainHeight-16);
	// 百度地图API功能
//	var map = new BMap.Map("DFcontainer");
//	var point = new BMap.Point(116.331398,39.897445);
//	map.centerAndZoom(point,12);
//	
//	//创建图标
//	var myIcon = new BMap.Icon("img/position.png", new BMap.Size(46,53));
//	var geolocation = new BMap.Geolocation();
//	geolocation.getCurrentPosition(function(r){
//		if(this.getStatus() == BMAP_STATUS_SUCCESS){
//			var mk = new BMap.Marker(r.point,{icon:myIcon});  // 创建标注
//			map.addOverlay(mk);              // 将标注添加到地图中	
//			map.panTo(r.point);
//			alert('您的位置：'+r.point.lng+','+r.point.lat);
//		}
//		else {
//			alert('failed'+this.getStatus());
//		}        
//	},{enableHighAccuracy: true})

	// 百度地图API功能
	map = new BMap.Map("DFcontainer");
	map.centerAndZoom(new BMap.Point(116.331398,39.897445),11);
	map.enableScrollWheelZoom(true);
	
	
	
})

// 用经纬度设置地图中心点
	function theLocation(lon,lat){
//		if(document.getElementById("longitude").value != "" && document.getElementById("latitude").value != ""){		
			var new_point = new BMap.Point(lon,lat);
			//var myIcon = new BMap.Icon("img/position.png", new BMap.Size(46,53));
			//var marker = new BMap.Marker(new_point,{icon:myIcon});  // 创建标注
			//map.addOverlay(marker);              // 将标注添加到地图中
			//map.panTo(new_point); 
			setTimeout(function(){
					var convertor = new BMap.Convertor();
					var pointArr = [];
					pointArr.push(new_point);
					convertor.translate(pointArr, 1, 5, translateCallback)
				}, 1000);		
	 //坐标转换完之后的回调函数
		translateCallback = function (data){
		  if(data.status === 0) {
			map.clearOverlays();   
			var myIcon = new BMap.Icon("img/position.png", new BMap.Size(46,53));
			var marker = new BMap.Marker(data.points[0],{icon:myIcon});
			var geoc = new BMap.Geocoder();    
			map.addOverlay(marker);    
			map.setCenter(data.points[0]);
			//map.addEventListener("tilesloaded", function(e){        
			//	var pt = e.point;
				geoc.getLocation(data.points[0], function(rs){
					var addComp = rs.addressComponents;
					$("#dizhi").text(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
				});        
			//});
		  }
		}				
		
	}
	
	

    