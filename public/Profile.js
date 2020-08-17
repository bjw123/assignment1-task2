$(document).ready(function(){
    console.log("running script");
    $.get("/getUsers", function (res) {
        console.log(res);
        let users = res;
        let i = 0;
        let user = users[i];
        setProfile(user);

        $("#like-button").click(function () {
            i++;
            user = users[i];
            setProfile(user);
        })
        $("#dislike-button").click(function () {
            i= i+1;
            user = users[i];
            setProfile(user);
        })
    })
});






function setProfile(user) {

    $("#user-name").html(user["name"]);
    $("#user-age").html(user["age"]);
    $("#user-bio").html(user["bio"])
    //let filePath = $('#' +user["pic"]).val();
    //$("#user-pic").attr('src',filePath);
    $("#user-pic").attr('src', user["pic"]);
    //$("#user-pic").html(user["pic"]);
}