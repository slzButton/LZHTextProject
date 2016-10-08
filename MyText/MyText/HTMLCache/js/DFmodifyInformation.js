$(function(){
	getDFMIContentHeight();
	window.onresize = function(){
		getDFMIContentHeight();
	}
	
	function getDFMIContentHeight(){
		var bodyHeight = $('body').height();
		var DFIDTheaderHeight = $('#DFIDTheader').height();
		var DFMIportraitHeight = $('.DFMIportrait').height();
		var DFMIcontentHeight = bodyHeight-DFIDTheaderHeight-DFMIportraitHeight;
		$('.DFMIcontent').css('height',DFMIcontentHeight-75);
	}
	(function($) {
		$.init();
		var result = $('#DFMIbtnDate')[0];
		document.getElementById("DFMIbtnDate").addEventListener('tap', function() {
			var optionsJson = this.getAttribute('data-options') || '{}';
			var options = JSON.parse(optionsJson);
			var id = this.getAttribute('id');
			var picker = new $.DtPicker(options);
			picker.show(function(rs) {
			result.innerText = rs.text;
			picker.dispose();
			});
		}, false);
	})(mui);
	
})
function getData()
{   
				var params = "{\"apiCode\":\"APP00030\",\"apiData\":{\"header\":{\"code\":\"APP00030\"},\"body\":{\"username\":\""+sessionStorage.loginname+"\",\"companyCode\":\""+companyCode+"\"}}}";
				CallToMobil(params);
}
function loadphoto()
{
	window.dfxk_injs.runOnAndroidPhJavaScript("{\"apiCode\":1101,\"apiData\":{\"username\":\"测试\"}}");    
}

function saveData()
{  
	var username = $("#username").val();	
	var usersex = $("#usersex").find("option:selected").text();
	if(usersex=="请选择性别"){
		usersex="";
	}
	var userphone = $("#userphone").text();
	var DFMIbtnDate = $("#DFMIbtnDate").text();
	if(!DFMIbtnDate){
		DFMIbtnDate = "";
	}else{
		DFMIbtnDate = new Date(DFMIbtnDate).getTime();
	}    
	var usercity = $("#usercity").text();
	var params = "{\"apiCode\":\"APP00031\",\"apiData\":{\"header\":{\"code\":\"APP00031\"},\"body\":{\"username\":\""+sessionStorage.loginname+"\",\"companyCode\":\""+companyCode+"\",\"name\":\""+username+"\",\"sex\": \""
			+ usersex + "\",\"licenseDate\":\"\",\"inspection\":\"\",\"vocation\":\"\",\"profession\":\"\",\"maritalStatus\":\"\",\"familyMember\":\"\",\"phoneNum\":\"" + userphone + "\",\"address\":\"" 
	+ $("#citycode").val()+"\",\"birthday\":\"" + DFMIbtnDate + "\"}}}";
    //alert(params);
	CallToMobil(params);    
}
 function sessionForui(session)
			{    	               		
			  //if(session.size()>0){ 			
				//	$("# ").val(session.get('username'));				
			   //}
				var params = "{\"apiCode\":\"APP00030\",\"apiData\":{\"header\":{\"code\":\"APP00030\"},\"body\":{\"username\":\""+sessionStorage.loginname+"\",\"companyCode\":\""+companyCode+"\"}}}";
				CallToMobil(params);
			}
function getAndroidData(apiCode, content, status)
{        
        if(apiCode == "APP00042"){
			    // $("img#userhead").attr("src","img/headerLeft.png");
				 //$("img#userhead").attr("src",".."+content);
				 document.getElementById("userhead").src=".."+content+"?time="+new Date();
			}   
        //alert(content);	 		
		var objjson = JSON.parse(content);
		var obj = objjson.body;
		if(apiCode == "APP00030") {
			if(obj.isSuccessful){
				 var objuser = obj.resultData;
				 $("#username").val(objuser.name);
				 if(objuser.sex!=""){
				   $("#usersex").val(objuser.sex);
				  }
				 $("#userphone").text(objuser.phoneNum);
				 var birthdayInt = parseInt(objuser.birthday);
				 var birthdayTime = new Date(birthdayInt);
				 var year=birthdayTime.getFullYear();
				 var day=birthdayTime.getDate();
				 var month=+birthdayTime.getMonth()+1;
				 $("#DFMIbtnDate").text(year+"/"+month+"/"+day);
                 var cityname = getAreaName(objuser.address);	
                 $("#usercity").text(cityname);				 
                 $("#citycode").val(objuser.address);		
				 if(objuser.picUrl!=""){				 
					 $("img#userhead").attr("src",objuser.picUrl);
				 }
				var username = GetPageParams("username");
				var usersex = GetPageParams("usersex");
				var userphone = GetPageParams("userphone");
				var DFMIbtnDate = GetPageParams("DFMIbtnDate");
				var usercity = GetPageParams("usercity");
				var proId = GetPageParams("proId");	 
				var code = GetPageParams("citycode");	 
				if(usercity&&usercity!=null){
					 $("#usercity").text(usercity);
					  var citycode = getAreaCode(usercity);
				      $("#citycode").val(citycode);
					}
				if(code&&code!=null){
				      $("#citycode").val(code);
					}
				if(username&&username!=null){
					 $("#username").val(username);
					}
				if(usersex&&usersex!=null){
				 $("#usersex").val(usersex);
				}
				if(userphone&&userphone!=null){
				 $("#userphone").text(userphone);
				}if(DFMIbtnDate&&DFMIbtnDate!=null){
				 $("#DFMIbtnDate").text(DFMIbtnDate);
				}
			  if(proId!=null){
				  var array = proId.split("_");
				  var ProName = provinceList[array[0]].name;
				  var Pro_cityList = provinceList[array[0]].cityList;
				  var cityName = Pro_cityList[array[1]].name;
				  $("#usercity").text(ProName+cityName);
				  var citycode = getAreaCode(cityName);
				  $("#citycode").val(citycode);
			  }
		   }else{
				     CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + obj.errorMsg + "\"}}");    			
				}
		}else if(apiCode == "APP00031"){
				if(obj.isSuccessful){
						if(obj.resultData) {
							var resultData = obj.resultData;
							if(resultData == "1") {//注册成功，跳转页面
								CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + "保存成功" + "\"}}");    			
								//window.location.href = 'DFUserCenter.html';
							} else {
								CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + "保存失败" + "\"}}");    			
							}
						}
			
				}else{
				       CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + obj.errorMsg + "\"}}");    			
					 }
		 }
	
}  