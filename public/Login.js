console.log("login script loaded");


function show_value(x)
{
    document.getElementById("slider_value").innerHTML=x;
}

$(document).ready(function () {

    $('select').formSelect();




    console.log("document ready");

    $.get( "/getUsers", function(data) {
        console.log(data);

    });






    /*$.get("/createAccount", function (data) {  //change address
        //function
        //alert("data: " + data);
        //$("#result").val(data);
        console.log(data);


    })*/



    /*$("#submitButton").click(function (){
        alert( "Handler for .click() called." );

    })*/

})