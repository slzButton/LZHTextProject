$(function(){
	
	getDFUCContentHeight();
	window.onresize = function(){
		getDFUCContentHeight();
	}
	function getDFUCContentHeight(){
		var bodyHeight = $('body').height();
		var DFSNheaderHeight = $('#DFSNheader').height();
		var DFUCcontentLinkHeight = $('.DFUCcontentLink').height();
		var SNHPfooterHeight = $('#SNHPfooter').height();
		var DFUCcontentHeight = bodyHeight-DFSNheaderHeight-DFUCcontentLinkHeight-SNHPfooterHeight;
		$('.DFUCcontent').css('height',DFUCcontentHeight-80);
	}
	var url = window.location.href;
	url = url.replace("DFUserCenter.html", "DFhomePage.html");
	CallToMobil("{\"apiCode\":\"APP00009\",\"apiData\":\""+ url +"\"}");    
	//loadServerSession();  
	 initdata();
	$('#registerJump').click(function(e){
		e.stopPropagation();
		window.location.href = 'DFregister.html';
	});
	$('.DFUClinkLoginContent').click(function(e){
		e.stopPropagation();
		window.location.href = 'DFmodifyInformation.html';
	});
	$('#exit').click(function(e){
		e.stopPropagation();
		sessionStorage.clear();   
		CallToMobil("{\"apiCode\":\"APP00006\",\"apiData\":[{\"sptype\":4,\"spname\":\"user_name\",\"spvalue\":\"\",\"spclass\":\"\"},{\"sptype\":4,\"spname\":\"isLogined\",\"spvalue\":\"\",\"spclass\":\"\"}]}");    
	    CallToMobil("{\"apiCode\":\"APP00006\",\"apiData\":[{\"sptype\":1,\"spname\":\"isLogined\",\"spvalue\":\"false\",\"spclass\":\"\"}]}");    
		window.location.href = 'DFlogin.html';
	});
})
function initdata()
{    
     if(sessionStorage.isLogined=="true"){
		$('#nologin').hide();
		$('.DFUClinkLoginContent').show();
		$('#exit').show();
		var params = "{\"apiCode\":\"APP00030\",\"apiData\":{\"header\":{\"code\":\"APP00030\"},\"body\":{\"username\":\""+sessionStorage.loginname+"\",\"companyCode\":\""+companyCode+"\"}}}";
		CallToMobil(params);
		//alert(params);
		$('.listBtn').text(sessionStorage.loginname);
	}
}
function onclickMyCar(){
	 if(sessionStorage.isLogined=="true"){
	     window.location.href='DFVehicleInformation.html?type=0';
	 }else{
		 CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"您还未登录，请进行登录\"}}");    			
	 }
}
function onclickMyIntegral(){
	 if(sessionStorage.isLogined=="true"){
	     window.location.href='DFmyIntegral.html';
	 }else{
		 CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"您还未登录，请进行登录\"}}");    			
	 }
}
function onclickChangePassword(){
	 if(sessionStorage.isLogined=="true"){
	     window.location.href='DFRetrievePassword.html';
	 }else{
		 CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"您还未登录，请进行登录\"}}");    			
	 }
}
//function sessionForui()
//{    
//	if(session.size()>0){		
//		$('#nologin').hide();
	//	$('.DFUClinkLoginContent').show();
	//	$('#exit').show();
	//	$('.listBtn').text("18263541268");
	//	$('#username').text(session.get('username'));
//}
//}
function getAndroidData(apiCode, content, status)
{        
		var objjson = JSON.parse(content);
		var obj = objjson.body;
		if(apiCode == "APP00030") {
				var objuser = obj.resultData;
		        $('#username').text(objuser.name);
				if(objuser.picUrl!=""){
					$("img#centeruserhead").attr("src",objuser.picUrl);
				}
				
		}
}