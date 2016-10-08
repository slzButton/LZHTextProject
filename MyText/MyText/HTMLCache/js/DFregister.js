$(function(){
//	获取验证码
	var DFMNmobile =/^1[3|4|5|7|8]\d{9}$/; //验证手机号正则
	var $DFgetCodeInterval;
	var i=60;
	var type = GetPageParams("type");
	if(type!=""&&type!=null){
		var url = window.location.href;
		url = url.replace("DFregister.html", "DFlogin.html");
	}else{
		var url = window.location.href;
	    url = url.replace("DFregister.html", "DFUserCenter.html");
	}
	CallToMobil("{\"apiCode\":\"APP00009\",\"apiData\":\""+ url +"\"}");
	$('#DFgetCode').click(function(){
		if($('#DFgetCode').val()=='获取验证码'){
			var DFMNmobileVal = $('#DFMNmobile').val();
			if(DFMNmobile.test(DFMNmobileVal)==true){
				$('.DFMNprompt').hide();
				GetCode();
				$DFgetCodeInterval = setInterval(DFGetCode, 1000);
			}else{
				$('.DFMNprompt').show();
				$('.DFMNprompt').text('请输入正确的手机号');
			}	
		}
	});
	function GetCode(){
		var mobile = $("#DFMNmobile").val();
		// app
		var params = "{\"apiCode\":\"APP00046\",\"apiData\":{\"header\":{\"code\":\"APP00046\"},\"body\":{\"companyCode\":\""+companyCode+"\",\"mobile\": \"" + mobile + "\",\"type\":\"1\"}}}";
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
	
	
	
	//验证手机号
	$('#DFMNmobile').blur(function(){
		var DFMNmobileVal = $('#DFMNmobile').val();
		if(DFMNmobile.test(DFMNmobileVal)==true){
			$('.DFMNprompt').hide();
		}else{
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的手机号');
		}
	})
	//验证验证码
	var DFcode =/^\d{6}$/; 
	$('#DFyanzhengcode').blur(function(){
		var DFyanzhengcode = $('#DFyanzhengcode').val();
		if(DFcode.test(DFyanzhengcode)==true){
			$('.DFMNprompt').hide();
			var DFMNmobileVal = $('#DFMNmobile').val();
			var DFyanzhengcode = $('#DFyanzhengcode').val();
			var params = "{\"apiCode\":\"APP00013\",\"apiData\":{\"header\":{\"code\":\"APP00013\"},\"body\":{\"companyCode\":\""+companyCode+"\",\"mobilePhone\": \"" + DFMNmobileVal + "\",\"smsValidCode\":\""+DFyanzhengcode+"\"}}}";
			CallToMobil(params);
		}else{
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的验证码');
		}
	})

	//验证密码
	var DFPRIpasswordRE =/^[0-9a-zA-Z]{6,18}$/; 
	$('#DFPRIpassword').blur(function(){
		var DFPRIpassword = $('#DFPRIpassword').val();
		if(DFPRIpassword==null || DFPRIpassword == ""){
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入密码');
		}else if(DFPRIpasswordRE.test(DFPRIpassword)==true){
			$('.DFMNprompt').hide();
		}else{
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('密码格式不正确');
		}
	})
	//确认验证密码 
	$('#DFPRIpassConfirm').blur(function(){
		var DFPRIpassword = $('#DFPRIpassword').val();
		var DFPRIpassConfirm = $('#DFPRIpassConfirm').val();
		if(DFPRIpassword==DFPRIpassConfirm){
			$('.DFMNprompt').hide();
		}else{
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('密码输入不一致');
		}
	})
	//注册验证
	$('#DFMNsubmit').click(function(e){
		var DFMNmobileVal = $('#DFMNmobile').val();
		var DFyanzhengcode = $('#DFyanzhengcode').val();
		var codeResult = $("#codeResult").val();
		var DFPRIpassword = $('#DFPRIpassword').val();
		var DFPRIpassConfirm = $('#DFPRIpassConfirm').val();
		if(DFMNmobileVal==null || DFMNmobileVal == ""){
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入正确的手机号');
		} else if(codeResult!="0"){
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('验证码输入不正确');
		} else if(DFPRIpassword==null || DFPRIpassword == ""){
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('请输入密码');
		} else if(!DFPRIpasswordRE.test(DFPRIpassword)){
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('密码格式不正确');
		} else if(DFPRIpassword != DFPRIpassConfirm){
			$('.DFMNprompt').show();
			$('.DFMNprompt').text('两次密码不一致');
		}  else{
			$('.DFMNprompt').hide();
			var DFMNmobileVal = $('#DFMNmobile').val();
			var DFyanzhengcode = $('#DFyanzhengcode').val();
			var DFPRIpassword = $('#DFPRIpassword').val();
			var url = 'DFVehicleInformation.html?zcmobile=' + DFMNmobileVal+'&zccode='+DFyanzhengcode+'&zcpassword='+DFPRIpassword;
			url = encodeURI(url);
			window.location.href = url;
			//提交注册
			// app
			//var params = "{\"apiCode\":\"APP00013\",\"apiData\":{\"header\":{\"code\":\"APP00013\"},\"body\":{\"companyCode\":\""+companyCode+"\",\"mobilePhone\": \"" + DFMNmobileVal + "\",\"smsValidCode\":\""+DFyanzhengcode+"\"}}}";
		    //CallToMobil(params);
		
			//var params = "{\"apiCode\":\"APP00039\",\"apiData\":{\"username\":\"\",\"companyCode\":\"DFXK\",\"mobile\": \"" + DFMNmobileVal + "\",\"code\":\"" + DFyanzhengcode + "\",\"password\":\"" + DFPRIpassword + "\",\"name\":\"\"}}";
			//CallToMobil(params);
			
		}
	})
})
