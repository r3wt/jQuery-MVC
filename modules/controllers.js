$.jqMVC
.ctrl('index',{
})
.ctrl('docs',{
})
.ctrl('chat',{
	resizeChat: function(){
		$('#chat-frame').height( $(window).height() - 141 );
	}
});