$(function(){
	var oBodyHeight = $('body').height();
	var oFooterHeight = $('.DFstarUPfooter').height();
	var oDFSUheaderHeight  = oBodyHeight-oFooterHeight;
	$('.DFSUheader').css('height',oDFSUheaderHeight);
	
	var i=4;
	DFSUCountdownTime();
	var $countDown = setInterval(DFSUCountdownTime,1000);
	function DFSUCountdownTime(){	
		i--;
		if(i==0){
			clearInterval($countDown);
			window.location.href = 'DFhomePage.html'
		}
		$('.DFSUCountdownTime').text(i);
	}

})
