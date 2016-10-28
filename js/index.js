$(function(){
	var arr=['#CC74E1','#61D937','#1AAAF8','#F7CB00','#9F815B','#FF2A6A','#FF7E00'];
	$('.color-lists').on('click','.color-list',function(){
		$('.color-list').removeClass('a');
		$(this).addClass('a');
		var num=$(this).index();
		$('.xuan-box').find('input').css({color:arr[num]})

	})

})