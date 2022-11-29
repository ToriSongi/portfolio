$(document).ready(function(){
	
	
	//상단메뉴 배경색 조절
	//휴대폰에서는 배경색 보임
	if($(window).width()<=600){
		$("nav").addClass('act');	}
	//휴대폰보다 큰 화면일때는 스크롤 높이에 따라 배경색을 조절함
	else{$(window).scroll(function(){	
		const change=$("#top").height()-100;
		if($(window).scrollTop()>=change){$("nav").addClass('act');	}
		else{$("nav").removeClass('act');}
	});
	}
	
	//타자치는 효과
	const $typing="안녕하세요.\n홍길동의 포트폴리오입니다.";
	//console.log($typing[7]);
	const tyLen=$typing.length;
	console.log(tyLen);
	let i=0;
	let txt="";
	function type(){
		if(i<tyLen){txt +=$typing[i];
		//$("#typing").text(txt);
		document.querySelector("#typing").innerText=txt;
		i++;
		setTimeout(type,200);
		}	
	}
	type();
	
	
	
	//콘텐츠의 top값을 절대값으로 얻어온다.
	//절대값은 기준이 윈도우 / 상대값은 
	const aboutTop=$("#about").offset().top;
	const port1Top=$("#port1").offset().top-400;
	const port2Top=$("#port2").offset().top-400;
	const port3Top=$("#port3").offset().top-400;
	
	const port1Top1=$("#port1").offset().top-600;
	const port2Top2=$("#port2").offset().top-600;
	const port3Top3=$("#port3").offset().top-600;
	
  //프로그레스 슬라이드 애니메이션
	$(window).scroll(function(){	
		st=$(window).scrollTop();
		if(st>=aboutTop){
			//About에서 오른쪽 "skill" bar 애니메이션
			$("#photo progress").animate({value : 90});
			$("#html progress").delay(100).animate({value : 80});
			$("#jquery progress").delay(200).animate({value : 70});
			$("#oven progress").delay(300).animate({value : 80});			
		}	
		if(st>=port1Top){
			$("#port1").addClass("act");
		}
		if(st>=port2Top){
			$("#port2").addClass("act");
		}
		
		if(st>=port3Top){
			$("#port3").addClass("act");
		}
		
		if(st>=port1Top1){
			$("#port1").addClass("active");
		}
		if(st>=port2Top2){
			$("#port2").addClass("active");
		}
		
		if(st>=port3Top3){
			$("#port3").addClass("active");
		}
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
	
	
});/////////////////////////end