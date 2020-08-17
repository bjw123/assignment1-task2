let users
$.get("/validateUser", function (res) {
    console.log(res);
    users = res;
})


//assumes email is unique in db although no measures to make it unique atm
$(document).ready(function(){
    $("#submit-button").click(function () {
            let i;
            for (i = 0; i < users.length; i++) {
                if (users[i].email == $("#user-email").val()){
                    console.log(users[i]);
                    window.location.replace("Profile.html");
                }
            }


    })
});






