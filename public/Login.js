console.log("login script loaded");

/*
function show_value(x)
{
    document.getElementById("slider_value").innerHTML=x;
}*/

$(document).ready(function () {

    $('select').formSelect();

    $("#submit-button").click(function () {
        let thisName = $("#user-name").val();
        let thisEmail = $("#user-email").val();
        let thisAge = $("#user-age").val();
        let thisGender = $("#user-gender").val();
        let thisUser = {name:thisName, email:thisEmail, age:thisAge, gender:thisGender}
        $.ajax({
            url: "/createUser",
            contentType: 'application/json',
            data: JSON.stringify(thisUser), // access in body
            type: 'PUT',
            success: function(result) {
                console.log(result)
            }
        })
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