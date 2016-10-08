$(function(){
	var passwordRE =/^[0-9a-zA-Z]{6,18}$/; 
	
	//提交登陆
	$('#submitLoginBtn').click(function(){
		var username = $('#username').val();
		var password = $('#password').val();
		if(username == null || username == ""){
			$('.DFLprompt').show();
			$('.DFLprompt').text('请输入账号');
		} else if(password == null || password == ""){
			$('.DFLprompt').show();
			$('.DFLprompt').text('请输入密码');
		} else if(!passwordRE.test(password)){
			$('.DFLprompt').show();
			$('.DFLprompt').text('密码输入不正确');
		} else{
			$('.DFLprompt').hide();
			//提交登录
			//app b
			var params = "{\"apiCode\":\"APP00012\",\"apiData\":{\"header\":{\"code\":\"APP00012\"},\"body\":{\"username\":\"" + username + "\",\"companyCode\":\""+companyCode+"\",\"password\":\"" + password + "\"}}}";
			//alert(params);
			CallToMobil(params);
			//app e
			// web b
			//$.ajax({
			//	url : "../../../newenergyAccessoriesController/dfxkhtmlH5.do?code=12",
			//	type : "POST",
				
			//	dataType : "json",
			//	success : function(result) {
			//		getFromAndroid("APP00012", result.msg, "");
			//	}
			//});
			//web e
		}
	});
	
	//
	function hideDiv(className){
		$('.'+className).hide();
	}
			
	//验证用户名
	$('#username').blur(function(){
		var username = $('#username').val();
		if(username != null && username != ""){
			$('.DFLprompt').hide();
		}else{
			$('.DFLprompt').show();
			$('.DFLprompt').text('请输入账号');
		}
	})
	
	//验证密码
	$('#password').blur(function(){
		var password = $('#password').val();
		if(password == null || password == ""){
			$('.DFLprompt').show();
			$('.DFLprompt').text('请输入密码');
		} else if(!passwordRE.test(password)){
			$('.DFLprompt').show();
			$('.DFLprompt').text('密码输入不正确');
		} else if(passwordRE.test(password)){
			$('.DFLprompt').hide();
		} else{
			$('.DFLprompt').show();
			$('.DFLprompt').text('密码格式不正确,请输入正确的密码');
		}
	})
}) 
//andr 返回数据 apicode api码, content 返回内容 status 返回状态
	function getAndroidData(apiCode, content, status) {
		var objjson = JSON.parse(content);
		var obj = objjson.body;
		if(apiCode == "APP00012" && obj) {
			//登陆返回数据
			if(obj.isSuccessful){
					if( obj.resultData) {
						var resultData = obj.resultData.isLogined;
						if(resultData) {//注册成功，跳转页面
							$('.DFLprompt').show();
							$('.DFLprompt').text('登录成功');
							var username = $('#username').val();
							var password = $('#password').val();
							sessionStorage.loginname=username;  
                            sessionStorage.password=password; 							
                            sessionStorage.isLogined=true;  			
							CallToMobil("{\"apiCode\":\"APP00006\",\"apiData\":[{\"sptype\":4,\"spname\":\"user_name\",\"spvalue\":\"" + username + "\",\"spclass\":\"\"},{\"sptype\":4,\"spname\":\"user_password\",\"spvalue\":\"" + password + "\",\"spclass\":\"\"},{\"sptype\":4,\"spname\":\"isLogined\",\"spvalue\":\"true\",\"spclass\":\"\"}]}");    
							CallToMobil("{\"apiCode\":\"APP00006\",\"apiData\":[{\"sptype\":0,\"spname\":\"user_name\",\"spvalue\":\"" + username + "\",\"spclass\":\"\"},{\"sptype\":0,\"spname\":\"user_password\",\"spvalue\":\"" + password + "\",\"spclass\":\"\"},{\"sptype\":0,\"spname\":\"isLogined\",\"spvalue\":\"true\",\"spclass\":\"\"}]}");    
							//if(sessionStorage.JpushId==""||sessionStorage.JpushId==null){
							 // CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":6}}");   
						   // }
							window.location.href = 'DFhomePage.html';
							//andr二次开发,这里需要带数据到另一个页面
						} else{
							$('.DFLprompt').show();
							$('.DFLprompt').text('登陆失败');
						} 
				    }
			}else{
				CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + obj.errorMsg + "\"}}");    			
				//$('.DFLprompt').show();
				//$('.DFLprompt').text(obj.errorMsg);
			}
			
		}
	} 