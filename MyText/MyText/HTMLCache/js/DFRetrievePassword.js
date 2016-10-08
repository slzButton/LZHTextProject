$(function(){	
	//原验证密码
	var DFPRIpasswordRE =/^[0-9a-zA-Z]{6,18}$/; 
	var url = window.location.href;
	url = url.replace("DFRetrievePassword.html", "DFUserCenter.html");
	CallToMobil("{\"apiCode\":\"APP00009\",\"apiData\":\""+ url +"\"}");
	$('#DFPRIoddPassword').blur(function(){
		var DFPRIoddPassword = $('#DFPRIoddPassword').val();
		if(DFPRIpasswordRE.test(DFPRIoddPassword)==true){
			$('.DFPRIprompt').hide();
		}else if(DFPRIoddPassword==null || DFPRIoddPassword == ""){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('请输入密码');
		}else{
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('原密码格式不正确');
		}
	})
	//新验证密码
	$('#DFPRIpassword').blur(function(){
		var DFPRIpassword = $('#DFPRIpassword').val();
		if(DFPRIpasswordRE.test(DFPRIpassword)==true){
			$('.DFPRIprompt').hide();
		}else if(DFPRIpassword==null || DFPRIpassword == ""){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('请输入密码');
		}else{
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('新密码格式不正确');
		}
	})
	//确认验证密码 
	$('#DFPRIpassConfirm').blur(function(){
		var DFPRIpassword = $('#DFPRIpassword').val();
		var DFPRIpassConfirm = $('#DFPRIpassConfirm').val();
		if(DFPRIpassword==DFPRIpassConfirm){
			$('.DFPRIprompt').hide();
		}else{
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('密码输入不一致');
		}
	})
	//提交
	$('#DFPRIsubmit').click(function(e){
		var DFPRIoddPassword = $('#DFPRIoddPassword').val();
		var DFPRIpassword = $('#DFPRIpassword').val();
		var DFPRIpassConfirm = $('#DFPRIpassConfirm').val();
		if(DFPRIoddPassword==null || DFPRIoddPassword == ""){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('请输入原密码');
		}else if(DFPRIpassword==null || DFPRIpassword == ""){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('请输入新密码');
		}else if(!DFPRIpasswordRE.test(DFPRIoddPassword)){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('原密码格式不正确');
		}else if(!DFPRIpasswordRE.test(DFPRIpassword)){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('新密码格式不正确');
		}else if(DFPRIpassword != DFPRIpassConfirm){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('新密码不一致');
		}else{			
			$('.DFPRIprompt').hide();
		    //var dd ='{"apiCode":"APP00029","apiType":1,"apiData":{\"content\":{\"header\":{\"code\":\"APP00029\"},\"body\":{\"isSuccessful\":\"true\",\"resultData\":\"1\"}}},"apiRegular":"","apiRegularDsc":""}'
			//getFromAndroid('APP00029',dd,'100');
			// app
			var params = "{\"apiCode\":\"APP00029\",\"apiData\":{\"header\":{\"code\":\"APP00029\"},\"body\":{\"username\":\""+sessionStorage.loginname+"\",\"companyCode\":\""+companyCode+"\",\"oldPassword\": \""+DFPRIoddPassword+"\",\"newPassword\":\""+DFPRIpassword+"\",\"type\":\"1\",\"mobilePhone\":\"\"}}}";
			CallToMobil(params);
		}
		
	})
	
})
//function sessionForui(session)
//			{    	               		
//				if(session.size()>0){ 			
//					$("#loginname").val(session.get('username'));
//				}
//			}
function getAndroidData(apiCode, content, status) {		
		var objjson = JSON.parse(content);
		var obj = objjson.body;
		if(apiCode == "APP00029"&& obj) {
				if(obj.isSuccessful){
					var resultData = obj.resultData;
					if(resultData == "0") {
						$('.DFPRIprompt').show();
						$('.DFPRIprompt').text('修改失败');
					}
					if(resultData == "1") {
						$('.DFPRIprompt').show();
						$('.DFPRIprompt').text('修改成功');
						var DFPRIpassword = $('#DFPRIpassword').val();
						sessionStorage.clear();   
						CallToMobil("{\"apiCode\":\"APP00006\",\"apiData\":[{\"sptype\":1,\"spname\":\"user_password\",\"spvalue\":\""+DFPRIpassword+"\",\"spclass\":\"\"},{\"sptype\":1,\"spname\":\"isLogined\",\"spvalue\":\"false\",\"spclass\":\"\"}]}");    
						CallToMobil("{\"apiCode\":\"APP00006\",\"apiData\":[{\"sptype\":4,\"spname\":\"user_name\",\"spvalue\":\"\",\"spclass\":\"\"},{\"sptype\":4,\"spname\":\"isLogined\",\"spvalue\":\"\",\"spclass\":\"\"}]}");    
						window.location.href = 'DFlogin.html';
					}
					if(resultData == "2") {
						$('.DFPRIprompt').show();
						$('.DFPRIprompt').text('原密码错误,请重新输入');
					}
				}else{
					$('.DFPRIprompt').show();
				    $('.DFPRIprompt').text(obj.errorMsg);
				}
			
		}
	}  