const newUser=()=>{
    let name = $("#user-name").val();
    let email = $("#user-email").val();
    let age = $("#user-age").val();
    let gender = $("#user-gender").val();
    let pic =  $("#user-pic").val();

    let data = {name:name, email:email, age:age, gender:gender, pic:pic}
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
            document.cookie = ("pic=" + pic);
            window.location.replace("Profile.html");
        }
    })
}

$(document).ready(function () {

    $('select').formSelect();

    $("#submit-button").click(function () {
        newUser();


    })
})