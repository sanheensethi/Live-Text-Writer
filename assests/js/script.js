		var t = document.getElementById("txt");
		var show = document.getElementById("show");
		
		function change(){
			var txt = t.value.replace(/\n/g,"<br>").replace(/ /g,"&nbsp;");
			show.innerHTML=txt;
		}
		
		function changemilli(){
			setInterval('change()',1/10);
		}