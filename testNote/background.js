
var t;
$(document).ready(function(){
	t = setInterval("checkSaveBtn()", 100);

	$(document).on("click", "#save-to-note",
		function(){
			//判断iframe src包含/md/preview做markdown全屏处理,iframe宽高改为100%,定位article标签markdown-body class，去除min max width和padding
			//从iframe到article每个标签都增加height 100%处理，使文章可滚动,done

			//判断iframe src包含mindmap做思维导图全屏处理
			var body = document.body;
			var frame = document.getElementsByTagName("iframe")[0];
			console.log(frame);
			body.appendChild(frame);
			document.getElementById("root").remove();
			// $('#mindmap-container').css("-webkit-scrollbardisplay", "none");
			document.styleSheets[0].addRule('#mindmap-container::-webkit-scrollbardisplay','display: none');
		});
});

function checkSaveBtn() {
	if($('#save-to-note').length > 0) {
    	//页面中含有这个元素，执行的代码
		$('#save-to-note').html("全屏");
    	clearInterval(t);
	}
}