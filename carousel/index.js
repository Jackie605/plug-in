


var index = 0

show(index)
$('.next').on('click',function(){
    index++
	Next()
	
	if(index == 4){
			index = 0
		}
	console.log('现在的index是'+index)
	show(index)
	
	
})

$('.back').on('click',function(){
	index--
	Back()
	if(index == -1){
		index = 3
	}
	console.log('现在的index是'+index)
	show(index)

})

function Next(){
	
	$('.img-ct').animate({
		'left': '-=' + 320 +'px'
		
	},function(){
		if($('.img-ct').css('left') === '-1600px'){
		$('.img-ct').css({'left':'-320px'});
		}
		
	})
}

function Back(){
	$('.img-ct').animate({
		'left': '+=' + 320 +'px'
	},function(){
		if($('.img-ct').css('left') === '0px'){
		$('.img-ct').css({'left':'-1280px'})
		}

	})
}

function show(index){
	$('.selectors li').eq(index).addClass('active').siblings().removeClass('active')
}


var autoplay = setInterval(function(){
	index++
	Next()
	
	if(index == 4){
			index = 0
		}
	console.log('现在的index是'+index)
	show(index)
},3000)

$('.img-ct li').mouseover(function(){
	console.log('mouseover')
	clearInterval(autoplay)
	
})
$('.img-ct li').mouseout(function(){
	console.log('mouseout')
	autoplay = setInterval(function(){
	index++
	Next()
	
	if(index == 4){
			index = 0
		}
	console.log('现在的index是'+index)
	show(index)
},3000)
})


$('.selectors li').on('click',function(){
		show($(this).index())
		console.log($(this).index())
		$('.img-ct').animate({

			'left':-320 * ($(this).index()+1) +'px'
		})	
		console.log(33)
})








