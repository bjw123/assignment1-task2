console.log("login script loaded");

/*
function show_value(x)
{
    document.getElementById("slider_value").innerHTML=x;
}*/

$(document).ready(function () {

    $('select').formSelect();

    $("#submit-button").click(function () {
        let name = $("#user-name").val();
        let email = $("#user-email").val();
        let age = $("#user-age").val();
        let gender = $("#user-gender").val();

        let data = {name:name, email:email, age:age, gender:gender}
        $.ajax({
            url: '/createUser',
            contentType: 'application/json',
            data: JSON.stringify(data), // access in body
            type: 'POST',
            success: function(result) {
                console.log(result)
                window.location.replace("Profile.html");
            }
        });
    })








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