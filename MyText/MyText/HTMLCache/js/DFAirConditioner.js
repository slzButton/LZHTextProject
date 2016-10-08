$(function(){
	document.getElementById("mySwitch").addEventListener("toggle",function(event){
		if(event.detail.isActive){
			sessionStorage.isAirOn = true;
			//var params = "{\"apiCode\":\"APP00051\",\"apiData\":{\"header\":{\"code\":\"APP00051\"},\"body\":{\"vin\":\"cjh001\",\"did\":\""+sessionStorage.JpushId+"\",\"temp\":\"" + $("#DFACrange").val() + "\",\"onoff\":\"true\",\"mode\":\"\"}}}";
            //CallToMobil(params);
		    $('.DFACMtemperatureTopCenter').css('color','#3db4ff');
		    $('#DFACrange').removeAttr('disabled');
		    $('#DFACradio1').removeAttr('disabled');
		    $('#DFACradio2').removeAttr('disabled');
			//$('#airCond').removeAttr('disabled');	
			$('#DFACrange').addClass('change');
		}else{
			sessionStorage.isAirOn = false;			
			//var params = "{\"apiCode\":\"APP00051\",\"apiData\":{\"header\":{\"code\":\"APP00051\"},\"body\":{\"vin\":\"cjh001\",\"did\":\""+sessionStorage.JpushId+"\",\"temp\":\"" + $("#DFACrange").val() + "\",\"onoff\":\"false\",\"mode\":\"\"}}}";
            //CallToMobil(params);
		    $('.DFACMtemperatureTopCenter').css('color','#333');
		    $('#DFACrange').attr('disabled','disabled');
		    $('#DFACradio1').attr('disabled','disabled');
		    $('#DFACradio2').attr('disabled','disabled');
			//$('#airCond').attr('disabled','disabled');		
			$('#DFACrange').removeClass('change');
		}
	});
	$('.DFACMtemperatureTopCenter').css('color','#3db4ff');
	$('#DFACrange').addClass('change');
	$('#DFACrange').css('background','#ff0')
	$('#DFACrange').change(function(){
		var DFACrangeVal = $('#DFACrange').val();
		$('#DFACMtemperatureTopVal').text(DFACrangeVal)
	})

})
