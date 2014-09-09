/**
 * @author Kendra Geromi
 * Date: Augest 9, 2014
 * Assignment: Final Project 4510, Summer 2014
 * Description:  This program uses jQuery to validate
 * a form for the contact page.  The data is sent with the Ajax  
 * function to process.php which returns a JSON response that is 
 * parsed and used to display the thank you message to the user.
 */

//all code is surrounded by the ready method
$(document).ready(function(){  
/*---------------------------------------
      jQuery form validation code
-----------------------------------------*/
    /*ajax function to send the data to php script and receive response*/
    var ajaxFunction = function () {
		
		var settingsObject = {
			type: "POST",
			url: "process.php",
			data: $("#form1").serialize(),
			dataType: "json",
			success: function(response) {
				display(response);
			} // end success function
		} //end php Object
		
		//call the ajax function and pass it the object
		$.ajax(settingsObject);
		
	}; //end ajaxFunction 

    /*validation function to apply the rules and call the ajax()*/
   $("#form1").validate({
        rules: {
            email: {
                required: true,
                email: true },
            name: {
                required: true },
            phone: {
                required: "#contact:checked", //phone is required if preferred
                phoneUS: true },
            message: {
                required: true }
        }, //end the rules
       //change default email and phone invalid messages to make them shorter
       //so they fit in the box better
       messages: {
           email: {
               email: " Invalid email."
           },
           phone: {
               phoneUS: " Invalid phone."
           }
       }, //end messages
       submitHandler: function(form) {
            ajaxFunction();
        } //end the submitHandler    
    });//end the validate method
    
    /*display anonymous function to display the success message for form*/
    var display = function (response) {
		var message = $("#response"); //variable linked to the HTML message div
        message.empty(); //empty the message div of previous HTML
		$("#form1").hide(); // hide the form once submitted
		  
        var returnData = []; //empty array to hold the returned data
        returnData.length = 0; //empty the array after each submit
        
        //parse the JSON and save data to an array
        $.each(response, function (key, value) {
            returnData[returnData.length] = value;
		}); //end each method 
        
        //thank user by first name and note method of contact
        message.append("<p>Thank you " + returnData[0] + ".  We will be in touch via " + returnData[4] + " shortly.</p>");
    }; //end the display function 
}); //end the ready method and parameter