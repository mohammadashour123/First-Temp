$(document).ready(function(){
    
   $(".abo").click(function(){
       
       
       $("html , body").animate({
           scrollTop:$("#about-container").offset().top  
       },1000);
       
       
   })
    $('.head-bar').click(function () {
        
       $('.navbar').toggle(); 
    }); 
});