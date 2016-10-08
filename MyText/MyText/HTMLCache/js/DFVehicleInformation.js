$(function(){
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
	$('.DFVIhelp').click(function(e){
		e.stopPropagation();
		$('.DFVImengban').show();
	});
	$('.DFVImengban').not($('.DFVImengbanImg')).click(function(e){
		e.stopPropagation();
		$('.DFVImengban').hide();
	});
	$('.DFVImengbanImg').click(function(e){e.stopPropagation();});
	//车牌号验证
	var DFVILicensePlateNumberRE=/^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
	$('#DFVILicensePlateNumber').blur(function(){
		var DFVILicensePlateNumber = $('#DFVILicensePlateNumber').val();
		if(!(DFVILicensePlateNumberRE.test(DFVILicensePlateNumber))){
			$('.DFVIprompt').show();
			$('.DFVIprompt').text('车牌号不正确');
		}else{
			$('.DFVIprompt').hide();
		}
	})
	//车架号验证
	var DFVIFrameNumberRE=/^[a-zA-Z0-9]{17}$/;
	$('#DFVIFrameNumber').blur(function(){
		var DFVIFrameNumber = $('#DFVIFrameNumber').val();
		if(DFVIFrameNumberRE.test(DFVIFrameNumber)==true){
			$('.DFVIprompt').hide();
		}else{
			$('.DFVIprompt').show();
			$('.DFVIprompt').text('车架号不正确');
		}
	})
	//发动机号验证
	var DFVIengineRE = /^[a-zA-Z0-9]{8}$/;
	$('#DFVIengine').blur(function(){
		var DFVIengine = $('#DFVIengine').val();
		if(DFVIengineRE.test(DFVIengine)==true){
			$('.DFVIprompt').hide();
		}else{
			$('.DFVIprompt').show();
			$('.DFVIprompt').text('发动机号不正确');
		}
	})
	//保存验证
	$('#DFVIbtn').click(function(){
		var DFcarType = $('#DFcarType').val();//车辆类型 必填
		var DFVILicensePlateNumber = $('#DFVILicensePlateNumber').val();//车牌号 必填
		var DFVIFrameNumber = $('#DFVIFrameNumber').val();//车架号 必填
		var DFVIengine = $('#DFVIengine').val();//发动机号 必填
		var bxgsdm = $('#DFInsuranceCompany').val();//保险公司 可空
		var DFInsuranceCompany = $('#bxgs').text();//保险公司 可空
		if(DFInsuranceCompany=='请选择保险公司'){
			DFInsuranceCompany="";
		}		
		var DFMIbtnDate = $("#DFMIbtnDate").html();//保险日期 可空
		if(DFMIbtnDate=='请选择保险日期'){
			DFMIbtnDate="";
		}
		//var username = $("#username").val();//用户名
		//var password = $("#password").val();//密码
		//var mobile = $("#mobile").val()//手机号
		//if(DFcarType == null || DFcarType == "") {
			//$('.DFVIprompt').show();
			//$('.DFVIprompt').text('车辆类型不正确');
		//} else 
		if(DFVILicensePlateNumber == null || DFVILicensePlateNumber == "") {
			$('.DFVIprompt').show();
			$('.DFVIprompt').text('车牌号不正确');
		} else if(DFVIFrameNumber == null || DFVIFrameNumber == "") {
			$('.DFVIprompt').show();
			$('.DFVIprompt').text('车架号不正确');
		} else if(DFVIengine == null || DFVIengine == "") {
			$('.DFVIprompt').show();
			$('.DFVIprompt').text('发动机号不正确');
		//} //else if(!(DFVILicensePlateNumberRE.test(DFVILicensePlateNumber)) || !(DFVIengineRE.test(DFVIengine)) || !(DFVIFrameNumberRE.test(DFVIFrameNumber))){
			//$('.DFVIprompt').show();
			//$('.DFVIprompt').text('请输入正确信息');
		}else if(DFInsuranceCompany !="" && DFMIbtnDate =="") {
			$('.DFVIprompt').show();
		    $('.DFVIprompt').text('请选择保险日期');
		}else{
			$('.DFVIprompt').hide();
			// app b "1：注册；2：找回密码；3：绑定，必须"
			//提交注册
			// app b
			//var zcmobile = GetPageParams("zcmobile");
			//var zccode = GetPageParams("zccode");
			//var zcpassword = GetPageParams("zcpassword");
			if(zcmobile == null || zcmobile == ""){
				var params = "{\"apiCode\":\"APP00035\",\"apiData\":{\"header\":{\"code\":\"APP00035\"},\"body\":{\"username\":\"" + sessionStorage.loginname + "\",\"companyCode\":\""+companyCode+"\""
				+ ",\"name\":\"\",\"typeId\":\""
				+ modelId + "\",\"carModelTypeId\":\""+DFcarType+"\",\"carNo\":\"" + DFVILicensePlateNumber + "\",\"vin\":\"" 
				+ DFVIFrameNumber + "\",\"engine\":\"" + DFVIengine + "\",\"insuranceCompanyId\":\"" 
			    + bxgsdm + "\",\"insuranceDate\":\"" + DFMIbtnDate + "\"}}}";
			}else{
				var params = "{\"apiCode\":\"APP00039\",\"apiData\":{\"header\":{\"code\":\"APP00039\"},\"body\":{\"username\":\"" + zcmobile + "\",\"companyCode\":\""+companyCode+"\",\"mobile\": \""
				+ zcmobile + "\",\"code\":\"" + zccode + "\",\"password\":\"" + zcpassword + "\",\"name\":\"\",\"carTypeId\":\""
				+ modelId + "\",\"carModelTypeId\":\""+DFcarType+"\",\"lpn\":\"" + DFVILicensePlateNumber + "\",\"vin\":\"" 
				+ DFVIFrameNumber + "\",\"engine\":\"" + DFVIengine + "\",\"insuranceCompanyId\":\"" 
			    + bxgsdm + "\",\"insuranceDate\":\"" + DFMIbtnDate + "\"}}}";
			}	
			//alert(params);
			CallToMobil(params);
			
		}
		
	})
	
})

	//andr 返回数据 apicode api码, content 返回内容 status 返回状态
	function getAndroidData(apiCode, content, status) {
		var objjson = JSON.parse(content);
		var obj = objjson.body;
		if(apiCode == "APP00032") {
			if(obj && obj.resultData) {
				var typeName = obj.resultData.carModelType;
                var carNo = obj.resultData.carNo;
                var vin = obj.resultData.vin;
                var engine = obj.resultData.engine;
                var insuranceCompanyId = obj.resultData.insuranceCompanyId;
				var insurerName = obj.resultData.insurerName;	
                var insuranceDate = obj.resultData.insuranceDate;  
				var carTypeId = obj.resultData.carModelId;
				$('#DFcarType').val(carTypeId);
				$('#clxh').text(typeName);
				$('#DFVILicensePlateNumber').val(carNo);
				$('#DFVIFrameNumber').val(vin);
				$('#DFVIengine').val(engine);	
                $('#DFInsuranceCompany').val(insuranceCompanyId);				
				if(insurerName==""||insurerName==null){
					$('#bxgs').text("请选择保险公司");
				}else{
					if(insurerName.length>9){
						$('#bxgs').text(insurerName.substring(0,9)+'...');    
					}else{
						$('#bxgs').text(insurerName);
					} 		
				}	
				if(insuranceDate==""||insuranceDate==null){
					$('#DFMIbtnDate').html("请选择保险日期");
				}else{
					$('#DFMIbtnDate').html(insuranceDate);
				}				
				//initdata();
				
			}
		}else if(apiCode == "APP00039"){
			if(obj && obj.resultData ) {
				var resultData = obj.resultData;
				if(resultData == "1") {//注册成功，跳转页面
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('注册成功');
					window.location.href = 'DFlogin.html';
				} else if(resultData == "2") {
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('用户名已存在');
				} else if(resultData == "3") {
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('该手机号已注册');
				} else if(resultData == "4") {
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('验证码错误');
				} else if(resultData == "5") {
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('该手机号未验证');
				} else if(resultData == "6") {
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('车牌号已存在');
				} else if(resultData == "7") {
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('车架号已存在');
				} else{
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('注册失败');
				}
			}
		}else if(apiCode == "APP00035"){
			if(obj && obj.resultData ) {
				var resultData = obj.resultData;
				if(resultData == "1") {
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('修改成功');
					sessionStorage.vin = "";
					sessionStorage.vinBd = "";
					//window.location.href = 'DFUserCenter.html';
				} else if(resultData == "2"){
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('车牌号已存在');
				}else if(resultData == "3"){
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('车架号已存在');
				}else {
					$('.DFVIprompt').show();
					$('.DFVIprompt').text('修改失败');
				}
			}
		}
	} 






