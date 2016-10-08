$(function(){
//	获取验证码
	var DFMNmobile =/^1[3|4|5|7|8]\d{9}$/; //验证手机号正则
	var $DFgetCodeInterval;
	var i=51;
	$('#DFgetCode').click(function(){
		var DFMNmobileVal = $('#DFMNmobile').val();
		if (DFMNmobile.test(DFMNmobileVal) == true) {
			$('.DFMNprompt').hide();
			DFGetCode();
			$DFgetCodeInterval = setInterval(DFGetCode, 1000);
		} else {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的手机号');
		}
	});
	function DFGetCode(){
		var mobile = $("#DFMNmobile").val();
		// app b "1：注册；2：找回密码；3：绑定，必须"
		var params = "{\"apiCode\":\"46\",\"apiData\":{\"username\":\"\",\"companyCode\":\"DFXK\",\"mobile\": \"" + mobile + "\",\"type\":\"2\"}}";
		//alert(params);
		//window.splash_injs.runOnAndroidJavaScript(params);
		// app e
		// web b
		$.ajax({
			url : "../../../newenergyAccessoriesController/dfxkhtmlH5.do?code=46",
			type : "POST",
			
			dataType : "json",
			success : function(result) {
				getFromAndroid("46", result.msg, "");
			}
		});
		// web e
	}
	
	// andr 返回数据 apicode api码, content 返回内容 status 返回状态
	function getFromAndroid(apiCode, content, status) {
		var objjson = JSON.parse(content);
		var obj = objjson.content.body;
		if(apiCode == "46") {
			if(obj && obj.resultData && obj.resultData.length > 0) {
				var returnStatus = obj.resultData[0].result;
				if(returnStatus == 1) {
					clearInterval($DFgetCodeInterval);
					$('#DFgetCode').val('验证码已发送,请注意查收');
					$("#codeResult").val(obj.resultData[0].number);
				} else {
					$('#DFgetCode').val('短信发送失败，请稍后再试');
				}
			}
			else {
				$('#DFgetCode').val('短信发送失败，请稍后再试');
			}
		}
	} 
	
	//验证手机号
	$('#DFMNmobile').blur(function(){
		var DFMNmobileVal = $('#DFMNmobile').val();
		if (DFMNmobile.test(DFMNmobileVal)) {
			$('.DFMNprompt').hide();
		} else {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的手机号');
		}
	})
	//验证验证码
	var DFcode =/^\d{4}$/; 
	$('#DFyanzhengcode').blur(function(){
		var DFyanzhengcode = $('#DFyanzhengcode').val();
		var codeResult = $("#codeResult").val();
		if (DFcode.test(DFyanzhengcode)) {
			$('.DFMNprompt').hide();
		} else if (!DFcode.test(DFyanzhengcode)) {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的验证码');
		} else if(codeResult != DFyanzhengcode){
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('验证码不正确,请输入正确的验证码');
		} else {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的验证码');
		}
	})
//提交验证
	$('#DFMNsubmit').click(function(e){
		var DFMNmobileVal = $('#DFMNmobile').val();
		var DFyanzhengcode = $('#DFyanzhengcode').val();
		var codeResult = $("#codeResult").val();
		if (!DFMNmobile.test(DFMNmobileVal)) {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('手机号格式不正确请重新输入');
		} else if (!DFcode.test(DFyanzhengcode)) {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的验证码');
		} else if(codeResult != DFyanzhengcode){
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('验证码不正确,请输入正确的验证码');
		} else {//验证码验证成功，下一步 ——> 重置密码
			$('.DFMNprompt').hide();
			alert("手机号更换成功");
		}
	})
	
})
