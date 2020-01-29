$('.owl-carousel').owlCarousel({
    rtl: true,
    loop: true,
    margin: 10,
    items: 1,
    responsiveClass: true,
    nav: true,
    dots:true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        320: {
            items:1 
        },
        481: {
            items: 3
        },
        991: {
            items: 3
        },
        1025: {
            items: 4
        }
    }
});
$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100){
            $('.backTop').addClass ('visible');
            
			
        }else if (scrollTop < 100){
            $('.backTop').removeClass ('visible');
            
           
        };
        
    });
	$('.backTop').click (function(){
		$('body , html').animate({
			scrollTop:0
		},800);
	});
});
$('#chooseFile').bind('change', function () {
    var filename = $("#chooseFile").val();
    if (/^\s*$/.test(filename)) {
      $(".file-upload").removeClass('active');
      $("#noFile").text("No file chosen..."); 
    }
    else {
      $(".file-upload").addClass('active');
      $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
    }
  });

  $(document).ready(function(){
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });
  





