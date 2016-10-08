$(function(){
	var homeJumpPImg = $('#homeJump a img').attr('src');
	if(homeJumpPImg=='img/HPicon_01.png'){
		$('#homeJump').unbind('click');
	}else{
		$('#homeJump').bind('click',function(e){
			e.stopPropagation();
			window.location.href = 'DFhomePage.html';
		})
	};
	var messageJumpImg = $('#messageJump a img').attr('src');
	if(messageJumpImg=='img/HPicon_07.png'){
		$('#messageJump').unbind('click');
	}else{
		$('#messageJump').bind('click',function(e){
			e.stopPropagation();
			window.location.href = 'DFInformation.html';
		})
	};
	var serviceJumpImg = $('#serviceJump a img').attr('src');
	if(serviceJumpImg=='img/HPicon_05.png'){
		$('#serviceJump').unbind('click');
	}else{
		$('#serviceJump').bind('click',function(e){
			e.stopPropagation();
			window.location.href = 'DFServiceNetwork.html';
		})
	};
	var userCenterJumpImg = $('#userCenterJump a img').attr('src');
	if(userCenterJumpImg=='img/HPicon_08.png'){
		$('#userCenterJump').unbind('click');
	}else{
		$('#userCenterJump').bind('click',function(e){
			e.stopPropagation();
			window.location.href = 'DFUserCenter.html';
		})
	};
	
	
	var DFHPmyCayImg = $('#DFHPmyCay a img').attr('src');
	if(DFHPmyCayImg=='img/myCar.png'){
		$('#DFHPmyCay').unbind('click');
	}else{
		$('#DFHPmyCay').bind('click',function(e){
			e.stopPropagation();
			window.location.href = 'DFmyCar.html';
		})
	};
	
	
})


function GetPageParamsaaa(name) {
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null) {
    	 return  unescape(r[2]);  
     } else {
    	 return null; 
     }
}
function GetPageParams(name) {
	 var urlstr = window.location;
	 urlstr = decodeURI(urlstr);
	 var b = urlstr.indexOf("html?")*1+5;
	 var e = urlstr.length;
	 urlstr = urlstr.substring(b, e);
	 var arr = urlstr.split("&");
	 var v = "";
	 for(var i= 0; i < arr.length; i++){
		 var va = arr[i];
		 var urlkey = va.split("=")[0];
		 var urlvalue = va.split("=")[1];
		 if(urlkey == name) {
			 v = urlvalue;
		 }
	 }
     if(v != null) {
    	 return  v;
     } else {
    	 return null; 
     }
}
var companyCode = "dongfengxiaokang";
var session = new Map();
function loadServerSession(){
	if(sessionStorage.loginname!=""&&sessionStorage.loginname!=null) {
		//alert('已有session');
		 sessionForui();
	} else {
		//alert('查询session');
		CallToMobil("{\"apiCode\":\"APP00006\",\"apiData\":[{\"sptype\":3,\"spname\":\"user_name\",\"spvalue\":\"001\",\"spclass\":\"String\"},{\"sptype\":3,\"spname\":\"user_password\",\"spvalue\":\"001\",\"spclass\":\"String\"},{\"sptype\":3,\"spname\":\"isLogined\",\"spvalue\":\"\",\"spclass\":\"boolean\"},{\"sptype\":3,\"spname\":\"jpushId\",\"spvalue\":\"001\",\"spclass\":\"String\"}]}");    
	}
	
}
function lightingAndroid(){
	loadWritemm();
}

function getFromAndroid(code, content, status){     
     //alert(code+content+status);	
     if(status=="100"){	
			 if(code=="APP00006"){
				 var sessionArray = JSON.parse(content);	
				 if(sessionArray.length==4){
					 if(sessionArray[0].sptype=='3'||sessionArray[1].sptype=='3'){
						if(sessionArray[0].content!='null'&&sessionArray[1].content!='null'&&sessionArray[0].content!=''&&sessionArray[1].content!=''){
							//  setValue(sessionArray[0].content, sessionArray[1].content);					
							 if(sessionArray[2].content=="true"){
								sessionStorage.isLogined=true;
								sessionStorage.loginname=sessionArray[0].content;   
								sessionStorage.password=sessionArray[1].content; 						
								sessionStorage.JpushId=sessionArray[3].content; 
                                   //alert(sessionStorage.JpushId);								
							 }else{
								sessionStorage.isLogined=false; 
							 }
								//if(session != null)
								//{   
								//	session.put('username',sessionArray[0].content);
								//	session.put('isLogined',sessionArray[2].content);
									
								//}
						 }else{
							//CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + "会话已失效，请重新登录" + "\"}}");  
						 } 
						 sessionForui(session);
					 }			 
				 }else{
					  getAndroidData(code, content, status);
				 }	 
			 }if(code=="APP00042"||code=="APP00007"||code=="APP00008"){			 
				   getAndroidData(code, content, status);					 
			 }else{
					 var objjson = JSON.parse(content);
					 var obj = objjson.body;
					 if(obj.isSuccessful){
					      getAndroidData(code, content, status);
					 }else{
					      CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + obj.errorMsg + "\"}}");    		
				     }
			 }
		   
	 }else{
			CallToMobil("{\"apiCode\":\"APP00008\",\"apiData\":{\"hwType\":5,\"hwContent\":\"" + content + "\"}}");    			
	 }
	    	
}
//function setValue(username, login)
//{    
//	 sessionStorage.loginname=username;   
  //   sessionStorage.isLogined=true; 
//	if(session != null)
	//{   
	//	session.put('username',username);
	//	session.put('isLogined',login);
		
//	}
	
//}
function Map() {     
    /** 存放键的数组(遍历用到) */    
    this.keys = new Array();     
    /** 存放数据 */    
    this.data = new Object();     
         
    /**   
     * 放入一个键值对   
     * @param {String} key   
     * @param {Object} value   
     */    
    this.put = function(key, value) {     
        if(this.data[key] == null){     
            this.keys.push(key);     
        }     
        this.data[key] = value;     
    };     
         
    /**   
     * 获取某键对应的值   
     * @param {String} key   
     * @return {Object} value   
     */    
    this.get = function(key) {     
        return this.data[key];     
    };     
         
    /**   
     * 删除一个键值对   
     * @param {String} key   
     */    
    this.remove = function(key) {     
        this.keys.remove(key);     
        this.data[key] = null;     
    };     
         
    /**   
     * 遍历Map,执行处理函数   
     *    
     * @param {Function} 回调函数 function(key,value,index){..}   
     */    
    this.each = function(fn){     
        if(typeof fn != 'function'){     
            return;     
        }     
        var len = this.keys.length;     
        for(var i=0;i<len;i++){     
            var k = this.keys[i];     
            fn(k,this.data[k],i);     
        }     
    };     
         
    /**   
     * 获取键值数组(类似<a href="http://lib.csdn.net/base/17" class='replace_word' title="Java EE知识库" target='_blank' style='color:#df3434; font-weight:bold;'>Java</a>的entrySet())   
     * @return 键值对象{key,value}的数组   
     */    
    this.entrys = function() {     
        var len = this.keys.length;     
        var entrys = new Array(len);     
        for (var i = 0; i < len; i++) {     
            entrys[i] = {     
                key : this.keys[i],     
                value : this.data[i]     
            };     
        }     
        return entrys;     
    };     
         
    /**   
     * 判断Map是否为空   
     */    
    this.isEmpty = function() {     
        return this.keys.length == 0;     
    };     
         
    /**   
     * 获取键值对数量   
     */    
    this.size = function(){     
        return this.keys.length;     
    };     
         
    /**   
     * 重写toString    
     */    
    this.toString = function(){     
        var s = "{";     
        for(var i=0;i<this.keys.length;i++,s+=','){     
            var k = this.keys[i];     
            s += k+"="+this.data[k];     
        }     
        s+="}";     
        return s;     
    };     
}     



var browser={
    versions:function() {
        var u=navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
}


function CallToMobil(params){
   if(browser.versions.ios || browser.versions.iPhone || browser.versions.iPad){
                        window.webkit.messageHandlers.Native.postMessage(params);
        }
   else if (browser.versions.android){
                        window.dfxk_injs.runOnAndroidJavaScript(params);
   }
}
