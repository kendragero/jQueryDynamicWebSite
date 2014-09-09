/**
 * @author Kendra Geromi
 * Date: Augest 13, 2014
 * Assignment: Final Project 4510, Summer 2014
 * Description:  This program uses jQuery URLive library
 * to retrieve and display information on the websites
 * used in the portfolio page when the page loads.
 */


//all code is surrounded by the ready method
$(document).ready(function(){  
/*---------------------------------------
      jQuery form URLive code
-----------------------------------------*/
   $(".anchor").urlive({
       imageSize: "auto"
   }).load(function(){
            $(this).urlive("open");
        },
        
        function(){
        $(this).urlive("close");
});

    
 }); //end the ready method 