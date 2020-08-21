const newUser=()=>{
    let name = $("#user-name").val();
    let email = $("#user-email").val();
    let age = $("#user-age").val();
    let gender = $("#user-gender").val();
    console.log(name)
    console.log(email)

    let data = {name:name, email:email, age:age, gender:gender}
    console.log("data:    " +data)
    $.ajax({
        url: '/createUser',
        contentType: 'application/json',
        data: JSON.stringify(data), // access in body
        type: 'POST',
        success: function (result) {
            console.log(data)
            console.log(result)
            document.cookie = ("email=" + email);

            console.log(x);
            window.location.replace("Profile.html");
        }
    })
}

$(document).ready(function () {

    $('select').formSelect();

    $("#submit-button").click(function () {
        newUser();


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