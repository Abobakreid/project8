$(function () {
    var x= 0;
    var y= 0;
    var z= 0;
    var el1= document.getElementById('counter1'); 
    var el2= document.getElementById('counter2');
    var el3= document.getElementById('counter3');
   
    // start the nav
    $(".navbar .nav .tabs i").on("click",function(){
          $('.navbar .nav .links').slideToggle();
    });
    $('.links > ul > li.blog > a').on('click',function(){
        $(this).next().slideToggle();
     });
    $('.links > ul > li.pages > a').on('click',function(){
       $(this).next().slideToggle();
    });
    // end the nav
    // to top
    $('.top').on('click',function(){
        $('html,body').animate({
            scrollTop: 0,
        },1500)
     });
       //our projects
     $('.Our_Projects .links li > a ').on('click',function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
     });     
     // on scroll
    $(window).on('scroll',function(){
       if($(window).scrollTop() >= 200){
           $('.navbar').css({
               backgroundColor: "#191a33",
           });
            //conatct
           $('.navbar .contact').css({
            display: 'none',
        });  
        //top
        $('.top').css({
            display: 'block',
        });                   
       }else{
        $('.navbar').css({
            backgroundColor: "#00000099",
        });

        //conatct

        $('.navbar .contact').css({
            display: 'block',
        });  
        //top
        $('.top').css({
            display: 'none',
        });          
       }
        // conatct
       if($(window).width() <= 985){
        $('.navbar .contact').css({
            display: 'none',
        });        
       }
      if($(window).scrollTop() >= $('.chat .overlo .tools').offset().top - 500){
    
        var st1 = setInterval(function(){
            "use strict"
            if(x >= 35){
               clearInterval(st1);
            }else{
                el1.textContent = x; 
                x=x+1;
            }
        },150);

        var st2 = setInterval(function(){
            "use strict"
            if(y >= 77){
                clearInterval(st2);
            }else{
                el2.textContent = y;
                y=y+1;
            }
        },150);

        var st3 = setInterval(function(){
            "use strict"
            if(z >= 9){
                clearInterval(st3);
            }else{
                el3.textContent = z;
                z=z+1;
            }
        },150); 
      }

    });
    // testimonial
    $('.testimonial .testimonials .right').on('click',function (){
       if($('.testimonial .testimonials .testi:last-of-type').hasClass('active')){ 
        $('.testimonial .testimonials .right').css({
            cursor: 'no-drop',
        });
       }else{
            $('.testimonial .testimonials .right').css({
                cursor: 'pointer',
            });
            $('.testimonial .testimonials .testi.active').animate({
                    left: '1200px',
                    display:'none'
            },function(){
                $(this).removeClass('active').next().addClass('active');
            });

            $('.testimonial .testimonials .testi.active').next().animate({
                display: 'block',
                left: 0,
            });
      }

    });
    $('.testimonial .testimonials .left').on('click',function (){
        if($('.testimonial .testimonials .testi:first-of-type').hasClass('active')){
            $('.testimonial .testimonials .left').css({
                cursor: 'no-drop',
            });
        }else{
            $('.testimonial .testimonials .right').css({
                cursor: 'pointer',
            });
            $('.testimonial .testimonials .testi.active').animate({
                left: '-1200px',
                display:'none'
            },function(){
                $(this).removeClass('active').prev().addClass('active');
            });
    
            $('.testimonial .testimonials .testi.active').prev().animate({
                display: 'block',
                left: '0',
            });
       }
 
     });    

});
