var $DFgetCodeInterval;
$(function() {
	// 获取验证码	
	var i = 60;
	var DFMNmobile = /^1[3|4|5|7|8]\d{9}$/; // 手机号正则
	$('#DFgetCode').click(function() {
		if($('#DFgetCode').val()=='获取验证码'){
			var DFMNmobileVal = $('#DFMNmobile').val();
			if (DFMNmobile.test(DFMNmobileVal) == true) {
				$('.DFMNprompt').hide();
				GetCode();
				DFGetCode();
				$DFgetCodeInterval = setInterval(DFGetCode, 1000);
			} else {
				$('.DFMNprompt').show();
				$('.DFMNprompt').text('请输入正确的手机号');
			}
        }
	});
	function GetCode() {
		var mobile = $("#DFMNmobile").val();
		// app b "1：注册；2：找回密码；3：绑定，必须"
		if(type!=""&&type!=null){
		    var params = "{\"apiCode\":\"APP00046\",\"apiData\":{\"header\":{\"code\":\"APP00046\"},\"body\":{\"username\":\"" + sessionStorage.loginname + "\",\"companyCode\":\""+companyCode+"\",\"mobile\": \"" + mobile + "\",\"type\":\"3\"}}}";
		}else{
		    var params = "{\"apiCode\":\"APP00046\",\"apiData\":{\"header\":{\"code\":\"APP00046\"},\"body\":{\"companyCode\":\""+companyCode+"\",\"mobile\": \"" + mobile + "\",\"type\":\"2\"}}}";
		}
		CallToMobil(params);
		
	}
	function DFGetCode(){
		i--;
		if(i==0){
			clearInterval($DFgetCodeInterval);
			$('#DFgetCode').val('获取验证码');
			i=60;
		}else{
			$('#DFgetCode').val(i+'s');
		}	
	}
	// 验证手机号
	$('#DFMNmobile').blur(function() {
		var DFMNmobileVal = $('#DFMNmobile').val();
		if (DFMNmobile.test(DFMNmobileVal)) {
			$('.DFMNprompt').hide();
		} else {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的手机号');
		}
	})
	// 验证验证码
	var DFcode = /^\d{6}$/;
	$('#DFyanzhengcode').blur(function() {
		var DFyanzhengcode = $('#DFyanzhengcode').val();
		if (DFcode.test(DFyanzhengcode)) {
			$('.DFMNprompt').hide();
		} else if (!DFcode.test(DFyanzhengcode)) {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的验证码');
		}  else {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的验证码');
		}
	})
	// 提交验证
	$('#DFMNsubmit').click(function(e) {
		var DFMNmobileVal = $('#DFMNmobile').val();
		var DFyanzhengcode = $('#DFyanzhengcode').val();
		if (!DFMNmobile.test(DFMNmobileVal)) {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('手机号格式不正确请重新输入');
		} else if (!DFcode.test(DFyanzhengcode)) {
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的验证码');
		} else {//验证码验证成功，下一步 ——> 重置密码
			$('.DFMNprompt').hide();
			if(type!=""&&type!=null){
				 var params = "{\"apiCode\":\"APP00014\",\"apiData\":{\"header\":{\"code\":\"APP00014\"},\"body\":{\"username\":\"" + sessionStorage.loginname + "\",\"companyCode\":\""+companyCode+"\",\"mobilePhone\": \"" + DFMNmobileVal + "\",\"smsValidCode\": \"" + DFyanzhengcode + "\",\"password\":\""+sessionStorage.password+"\"}}}";
				 CallToMobil(params);
			}else{
				var params = "{\"apiCode\":\"APP00013\",\"apiData\":{\"header\":{\"code\":\"APP00013\"},\"body\":{\"companyCode\":\""+companyCode+"\",\"mobilePhone\": \"" + DFMNmobileVal + "\",\"smsValidCode\":\""+DFyanzhengcode+"\"}}}";
			    CallToMobil(params);
		    }
		}
	})

	
})
// andr 返回数据 apicode api码, content 返回内容 status 返回状态
	function getAndroidData(apiCode, content, status) {
		var objjson = JSON.parse(content);
		var obj = objjson.body;	
			if(obj.isSuccessful){
				if(apiCode == "APP00046") {
					if(obj && obj.resultData) {
						var returnStatus = obj.resultData;
						if(returnStatus == "1") {
							//clearInterval($DFgetCodeInterval);
							$('.DFMNprompt').show();
							$('.DFMNprompt').text('验证码已发送,请注意查收');
							//$('#codeResult').val(obj.resultData.number);
						} else if(returnStatus == "2"){
							$('.DFMNprompt').show();
							$('.DFMNprompt').text('该手机号未注册');
						} else if(returnStatus == "3"){
							$('.DFMNprompt').show();
							$('.DFMNprompt').text('用户名和手机号不匹配');
						} else if(returnStatus == "4"){
							$('.DFMNprompt').show();
							$('.DFMNprompt').text('手机号已注册');
						} else if(returnStatus == "5"){
							$('.DFMNprompt').show();
							$('.DFMNprompt').text('手机号未绑定');
						} else {
							$('.DFMNprompt').show();
							$('.DFMNprompt').text('短信发送失败，请稍后再试');
						}
					}else {
						$('.DFMNprompt').show();
						$('.DFMNprompt').text('短信发送失败，请稍后再试');
					}
				}
				if(apiCode == "APP00014") {
					  if(obj.resultData) {			
								CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + "更换成功" + "\"}}");    
								var DFMNmobileVal = $('#DFMNmobile').val();
						        CallToMobil("{\"apiCode\":\"APP00006\",\"apiData\":[{\"sptype\":0,\"spname\":\"username\",\"spvalue\":\""+DFMNmobileVal+"\",\"spclass\":\"\"}]}");    
								sessionStorage.loginname=DFMNmobileVal;   
								var username = GetPageParams("username");
								var usersex = GetPageParams("usersex");
								var userphone = GetPageParams("userphone");
								var DFMIbtnDate = GetPageParams("DFMIbtnDate");
								var usercity = GetPageParams("usercity");
								var citycode = GetPageParams("citycode");
								var url = 'DFmodifyInformation.html?username='+username+'&usersex='+usersex+'&userphone='+DFMNmobileVal+'&DFMIbtnDate='+DFMIbtnDate+'&usercity='+usercity+'&citycode='+citycode;
								url = encodeURI(url);
								window.location.href = url;
							} else {
								CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + "更换失败" + "\"}}");    			
							}					
				}
				if(apiCode == "APP00013") {
					if(obj.resultData){
						var DFMNmobileVal = $('#DFMNmobile').val();
	                	var DFyanzhengcode = $('#DFyanzhengcode').val();
						var url = 'DFPasswordResetIndex.html?DFMNmobileVal=' + DFMNmobileVal+'&DFyanzhengcode='+DFyanzhengcode;
						url = encodeURI(url);
						window.location.href = url;
					}
			    }
		     }else{
				   CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + obj.errorMsg + "\"}}");    			
			 }
	} 
