/*$(document).ready(function(){
   $(".main").append("<div id='overlay'></div>");

	$(".text").focus(function(){        
		var txt_value =  $(this).val();  
		if(txt_value==this.defaultValue){  
        	$(this).val("").css("color","#313131");              
		} 
	});
})*/

function fjcHeight(){
	$(".proportion").each(function(i,n){
	        var FjcHeight=$(this).attr("F");
			var nowWidth=$(this).width();
			var thisHeight=nowWidth*parseFloat(FjcHeight);
	        $(this).css("height",thisHeight+"px");
	});     
}
function fontSizeHack(){
        var viewportW=$(".main").width();
		var fz=(viewportW/320)*0.625;
		$(".index-banner").css("font-size",(fz*100)+"%");
}

$(window).resize(function(){
	fjcHeight();
	fontSizeHack();
})

$(document).ready(function(){
	$('#cart').click(function(){
	    //如果隐藏层是不显示的，点击时则是展现出来。	
	   if($("#MyDiv").css("display")=="none" && $("#fade").css("display")=="none") {
	   		$("#fade").show();
	   		$("#MyDiv").show();

			$("body").height($(window).height()).css({  	//禁止触摸滑动，滚动条
			  "overflow-y": "hidden"  						  
			});
			$('#fade').bind("touchmove",function(e){		//禁止遮罩滑动
			   e.preventDefault();
			});
/*			$('#MyDiv').bind("touchmove",function(e){		//禁止弹出层滑动
			   e.preventDefault();
			});*/
			var bgdiv = document.getElementById('fade');
			bgdiv.style.width = document.body.scrollWidth;
			// bgdiv.style.height = $(document).height();
			$("#fade").height($(document).height());
		}else{
		//关闭弹出层
			$("#MyDiv").hide();
			$("#fade").hide();

			$("body").height($(window).height()).css({  	//恢复滑动以及滚动条
			  "overflow-y": "scroll"  						
			});
		}
	});
	//除了点击叉叉，点击遮罩层也是可以关闭的
	$('#fade').click(function(){
		if($("#fade").css("display")!="none") {
		  $("#MyDiv").hide();
		  $("#fade").hide();

		  $("body").height($(window).height()).css({  	//恢复滑动以及滚动条
			  "overflow-y": "scroll"  						
		  });
		}
	});

	$('#go_buy').click(function(){    //主页——点击“立即购买”就跳转到购物车页面
		window.open('pages/cart.html');
	});
	$('#go_buy1').click(function(){    //红包页——点击“立即购买”就跳转到购物车页面
		window.open('cart.html');
	});
	/*=============图标旋转特效============= */

	$('#quan').click(function(){                                  //购物车页面，点击“优惠券”特效
		if ($('#right1').css("transform")=="none") {
			$("#right1").css({
  				  "transform":"rotate(90deg)",                   //transform:旋转
				  "-webkit-transform":"rotate(90deg)",
				  "-moz-transform":"rotate(90deg)",
				  "-ms-transform":"rotate(90deg)",
				  "-o-transform":"rotate(90deg)",
				  "transition":"All 0.3s ease-in-out",			 //transition:旋转特效
				  "-webkit-transition":"All 0.3s ease-in-out",
				  "-moz-transition":"All 0.3s ease-in-out",
				  "-o-transition":"All 0.3s ease-in-out"
  			});
  			$("#hiden_quan").animate({height:'show'},500);		//点击显示 优惠券隐藏层 下拉效果 0.5秒
		}else{
			$("#right1").css({
				  "transform":"none",							//transform:旋转
				  "-webkit-transform":"none",
				  "-moz-transform":"none",
				  "-ms-transform":"none",
				  "-o-transform":"none",
				  "transition":"All 0.3s ease-in-out",			 //transition:旋转特效
				  "-webkit-transition":"All 0.3s ease-in-out",
				  "-moz-transition":"All 0.3s ease-in-out",
				  "-o-transition":"All 0.3s ease-in-out"	
			});
			$("#hiden_quan").animate({height:'hide'},500);	   //再点击隐藏 优惠券隐藏层 下拉效果 0.5秒
		}
	});

	$('#hongbao').click(function(){								 //购物车页面，点击“红包”特效
		if ($('#right2').css("transform")=="none") {
			$("#right2").css({
  				  "transform":"rotate(90deg)",					 //transform:旋转
				  "-webkit-transform":"rotate(90deg)",
				  "-moz-transform":"rotate(90deg)",
				  "-ms-transform":"rotate(90deg)",
				  "-o-transform":"rotate(90deg)",
				  "transition":"All 0.3s ease-in-out",			 //transition:旋转特效
				  "-webkit-transition":"All 0.3s ease-in-out",
				  "-moz-transition":"All 0.3s ease-in-out",
				  "-o-transition":"All 0.3s ease-in-out"
  			});
  			$("#hiden_hongbao").animate({height:'show'},500);	 //点击显示 红包隐藏层 下拉效果 0.5秒
		}else{
			$("#right2").css({
				  "transform":"none",							//transform:旋转
				  "-webkit-transform":"none",
				  "-moz-transform":"none",
				  "-ms-transform":"none",
				  "-o-transform":"none",
				  "transition":"All 0.3s ease-in-out",			 //transition:旋转特效
				  "-webkit-transition":"All 0.3s ease-in-out",
				  "-moz-transition":"All 0.3s ease-in-out",
				  "-o-transition":"All 0.3s ease-in-out"	
			});
			$("#hiden_hongbao").animate({height:'hide'},500);	 //再点击隐藏 红包隐藏层 下拉效果 0.5秒
		}
	});
	/*=============图标旋转特效 end============= */

	/*=============商品数量 加减============= */
	$.fn.iVaryVal=function(iSet,CallBack){
	/*
	 * Minus:点击元素--减小
	 * Add:点击元素--增加
	 * Input:表单元素
	 * Min:表单的最小值，非负整数
	 * Max:表单的最大值，正整数
	 */
	iSet=$.extend({Minus:$('.J_minus'),Add:$('.J_add'),Input:$('.J_input'),Min:0,Max:30},iSet);
	var C=null,O=null;
	//插件返回值
	var $CB={};
	//增加
	iSet.Add.each(function(i){
		$(this).click(function(){
			O=parseInt(iSet.Input.eq(i).val());
			(O+1<=iSet.Max) || (iSet.Max==null) ? iSet.Input.eq(i).val(O+1) : iSet.Input.eq(i).val(iSet.Max);
			//输出当前改变后的值
			$CB.val=iSet.Input.eq(i).val();
			$CB.index=i;
			//回调函数
			if (typeof CallBack == 'function') {
                CallBack($CB.val,$CB.index);
            }
		});
	});
	//减少
	iSet.Minus.each(function(i){
		$(this).click(function(){
			O=parseInt(iSet.Input.eq(i).val());
			O-1<iSet.Min ? iSet.Input.eq(i).val(iSet.Min) : iSet.Input.eq(i).val(O-1);
			$CB.val=iSet.Input.eq(i).val();
			$CB.index=i;
			//回调函数
			if (typeof CallBack == 'function') {
				CallBack($CB.val,$CB.index);
		  	}
		});
	});
	//手动
	iSet.Input.bind({
		'click':function(){
			O=parseInt($(this).val());
			$(this).select();
		},
		'keyup':function(e){
			if($(this).val()!=''){
				C=parseInt($(this).val());
				//非负整数判断
				if(/^[1-9]\d*|0$/.test(C)){
					$(this).val(C);
					O=C;
				}else{
					$(this).val(O);
				}
			}
			//键盘控制：上右--加，下左--减
/*			if(e.keyCode==38 || e.keyCode==39){
				iSet.Add.eq(iSet.Input.index(this)).click();
			}
			if(e.keyCode==37 || e.keyCode==40){
				iSet.Minus.eq(iSet.Input.index(this)).click();
			}*/
			//输出当前改变后的值
			$CB.val=$(this).val();
			$CB.index=iSet.Input.index(this);
			//回调函数
			if (typeof CallBack == 'function') {
                CallBack($CB.val,$CB.index);
            }
		},
		'blur':function(){
			$(this).trigger('keyup');
			if($(this).val()==''){
				$(this).val(O);
			}
			//判断输入值是否超出最大最小值
			if(iSet.Max){
				if(O>iSet.Max){
					$(this).val(iSet.Max);
				}
			}
			if(O<iSet.Min){
				$(this).val(iSet.Min);
			}
			//输出当前改变后的值
			$CB.val=$(this).val();
			$CB.index=iSet.Input.index(this);
			//回调函数
			if (typeof CallBack == 'function') {
                CallBack($CB.val,$CB.index);
            }
		}
	});
}
/*=============商品数量 加减 end============= */

});