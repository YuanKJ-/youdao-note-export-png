
var t;
var max_time = 100; //限制循环判断最大次数
var already_check = 0; //循环判断次数
$(document).ready(function(){
	t = setInterval("checkSaveBtn()", 100);

	$(document).on("click", "#save-to-note",
		function(){
			var body = document.body;
			var frame = $("iframe")[0];
			console.log(frame);
			//判断iframe src包含/md/preview做markdown全屏处理,iframe宽高改为100%,定位article标签markdown-body class，去除min max width和padding
			//从iframe到article每个标签都增加height 100%处理，使文章可滚动,done
			if(frame.src.indexOf("md/preview") >= 0){
				//全屏markdown预览
				body.appendChild(frame);
				document.getElementById("root").remove();
				$(frame).addClass("max-height");
				$(frame).on("load", function() {    
                	//iframe加载完成后你需要进行的操作
                	var frameDoc = $(this).contents()
                	frameDoc.find("html").addClass("max-height");
					frameDoc.find("html body").addClass("max-height");
					frameDoc.find("article").addClass("max-height add-scroll");
            	});

			} else if(frame.src.indexOf("mindmap") >= 0){
				//判断iframe src包含mindmap做思维导图全屏处理
				body.appendChild(frame);
				document.getElementById("root").remove();
			}
		});
});

function checkSaveBtn() {
	if(already_check > max_time) {
    	clearInterval(t);
    	return;
	}
	already_check++;
	if($('#save-to-note').length > 0) {
    	//页面中含有这个元素，执行的代码
		$('#save-to-note').html("全屏");
    	clearInterval(t);
	}
}