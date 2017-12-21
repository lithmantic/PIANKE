 function over(){
	    var div = document.getElementById('focus-picture');//获取大div对象
	    var text = document.getElementById('focus-bg');//获取文字div对象
	    text.style.display="block";
	}//鼠标进入显示文字
	function out(){
	    var div = document.getElementById('focus-picture');
	    var text = document.getElementById('focus-bg');
	    text.style.display="none";
	}//鼠标退出不显示文字