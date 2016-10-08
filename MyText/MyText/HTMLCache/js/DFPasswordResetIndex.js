$(function(){	
	//验证密码
	var DFPRIpasswordRE =/^[0-9a-zA-Z]{6,18}$/; 
	$('#DFPRIpassword').blur(function(){
		var DFPRIpassword = $('#DFPRIpassword').val();
		if(!DFPRIpasswordRE.test(DFPRIpassword)){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('密码格式不正确');
		} else if(DFPRIpasswordRE.test(DFPRIpassword)){
			$('.DFPRIprompt').hide();
		} 
	})
	//确认验证密码 
	$('#DFPRIpassConfirm').blur(function(){
		var DFPRIpassword = $('#DFPRIpassword').val();
		var DFPRIpassConfirm = $('#DFPRIpassConfirm').val();
		if(DFPRIpassword != DFPRIpassConfirm){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('密码输入不一致');
		} else if(DFPRIpassword==DFPRIpassConfirm){
			$('.DFPRIprompt').hide();
		} 
	})
	//提交
	$('#DFPRIsubmit').click(function(e){
		var DFMNmobileVal = $("#DFMNmobileVal").val();
		var DFPRIpassword = $('#DFPRIpassword').val();
		var DFPRIpassConfirm = $('#DFPRIpassConfirm').val();
		var DFyanzhengcode = $("#DFyanzhengcode").val();
		if(DFMNmobileVal == null || DFMNmobileVal == "" || DFyanzhengcode == null || DFyanzhengcode == "") {
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('数据不完整不能提交');
		} else if(!DFPRIpasswordRE.test(DFPRIpassword)){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('密码格式不正确');
		} else if(DFPRIpassword != DFPRIpassConfirm){
			$('.DFPRIprompt').show();
			$('.DFPRIprompt').text('密码输入不一致');
		} else{
			$('.DFPRIprompt').hide();
			// 提交修改密码
			// app b "1：注册；2：找回密码；3：绑定，必须"
			var params = "{\"apiCode\":\"APP00029\",\"apiData\":{\"header\":{\"code\":\"APP00029\"},\"body\":{\"username\":\"" + DFMNmobileVal + "\",\"companyCode\":\""+companyCode+"\"" 
			+ ",\"newPassword\":\"" + DFPRIpassword + "\",\"type\":\"2\",\"code\":\""+DFyanzhengcode+"\",\"mobilePhone\":\"" + DFMNmobileVal + "\"}}}";
			CallToMobil(params);
			// app e
			// web b
			//$.ajax({
			//	url : "../../../newenergyAccessoriesController/dfxkhtmlH5.do?code=29",
			//	type : "POST",
				
			//	dataType : "json",
			//	success : function(result) {
			//		getFromAndroid("29", result.msg, "");
			//	}
			//});
			// web e
		}
	})
	
	
})
// andr 返回数据 apicode api码, content 返回内容 status 返回状态
	function getAndroidData(apiCode, content, status) {
		var objjson = JSON.parse(content);
		var obj = objjson.body;
		if(apiCode == "APP00029") {
			if(obj.isSuccessful){
						if(obj && obj.resultData) {
							var resultData = obj.resultData;
							////0：修改失败；1：修改成功；2：原密码错误; 3:验证码错误；4:验证码正确"
							if(resultData == "1") {//注册成功，跳转页面
								$('.DFPRIprompt').show();
								$('.DFPRIprompt').text('修改成功');
								var DFPRIpassword = $('#DFPRIpassword').val();
								CallToMobil("{\"apiCode\":\"APP00006\",\"apiData\":[{\"sptype\":1,\"spname\":\"password\",\"spvalue\":\""+DFPRIpassword+"\",\"spclass\":\"\"}]}");    
								sessionStorage.password=DFPRIpassword;
								window.location.href = 'DFlogin.html';
								//andr二次开发,这里需要带数据到另一个页面
							} else if(resultData == "2") {
								$('.DFPRIprompt').show();
								$('.DFPRIprompt').text('修改失败,原密码错误');
							} else if(resultData == "3") {
								$('.DFPRIprompt').show();
								$('.DFPRIprompt').text('修改失败,验证码错误');
							} else {
								$('.DFPRIprompt').show();
								$('.DFPRIprompt').text('修改失败');
							}
						} else {
							$('.DFPRIprompt').show();
							$('.DFPRIprompt').text('修改失败');
						}
				}else{
					$('.DFPRIprompt').show();
				    $('.DFPRIprompt').text(obj.errorMsg);
				}
		}
	} 
