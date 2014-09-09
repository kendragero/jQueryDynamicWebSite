/**
 * @author Kendra Geromi
 * Date: Augest 9, 2014
 * Assignment: Final Project 4510, Summer 2014
 * Description:  This program uses jQuery to implement 
 * the Flickr API, and implements the HTML 5 local storage API.
 */

//all code is surrounded by the ready method
$(document).ready(function(){  
    



/*---------------------------------------
     HTML5 localstorage API code
-----------------------------------------*/
    /*set local storage data on load*/
     if (Modernizr.localstorage) { //localStorage supported
           localStorage.setItem("last", "Geromi");
           localStorage.setItem("first", "Kendra");
           localStorage.setItem("course", "ICT 4510 Advanced Website Design and Management");
        }
        else { // no native support for HTML5 storage
            var compatible = false;
        }
    /*retrieve the local storage data on click*/
    $("#getInfo").click(function () {
        var info = $("#info"); //variable linked to the HTML info div
        info.empty(); //empty the info div of previous HTML
        //check if browser is compatible
        if (compatible == false) { //not supported message
            info.append("<p>Sorry, your browser does not support this feature.</p>");        
        }
        else { //supported
            info.append("<p>Project created by: " + localStorage.getItem("first") + " " + localStorage.getItem("last") + "</p><p>Course: " + localStorage.getItem("course") + "</p>");
        }
    });//end click function
    
    
/*---------------------------------------
    Flickr API code
-----------------------------------------*/
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=las+vegas+strip&format=json&jsoncallback=?";
    
    /*AJAX function to get the pictures*/
    $.ajax({
        url: url,
        type: "GET",
        dataType: "jsonp",
        jsonp: "jsoncallback",
        success: function(data) {
            displayImages(data);
        }
    });
    
    /*parse the returned JSON and display the images*/
    var displayImages = function (data) {
        var pictures = $("#flickr"); //div for pictures
        pictures.empty(); //empty the div 
        
        $.each(data.items, function(i, item){
            pictures.append("<img src=" + item.media.m + "></img>");
            if ( i == 9 ) return false; //use first 10 pictures only
        });
    };//end the displayImages function
        
}); //end the ready method and parameter
    


