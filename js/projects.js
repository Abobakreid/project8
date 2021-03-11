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

    });
});
