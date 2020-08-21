function setProfile(user) {

    $("#user-name").html(user["name"]);
    $("#user-age").html(user["age"]);
    $("#user-bio").html(user["bio"])
    $("#user-pic").attr('src', user["pic"]);

}

function sendEmail(user){
    let name = user["name"];
    let email = getCookie("email");
    console.log(email);

    let data = {name:name, email:email}
    console.log("data:    " +data);
    $.ajax({
        url: '/sendEmail',
        contentType: 'application/json',
        data: JSON.stringify(data), // access in body
        type: 'POST',
        success: function (result) {
            console.log(data)
            console.log(result)
        }
    })
}

function getCookie(name)    //https://www.the-art-of-web.com/javascript/getcookie/
{
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}





// I could retrieve the data out of load for more efficiency
$(document).ready(function(){
    document.getElementById("dialog").style.visibility = "hidden";
    console.log(getCookie("email"));
    console.log(getCookie("pic"));
    if(getCookie("pic").length !== 0) {
        $("#your-img").attr('src', getCookie("pic"));
    }
    $.get("/getUsers", function (res) {
        console.log(res);
        let users = res;
        let i = 0;
        let user = users[i];
        setProfile(user);

        let end = users.length;
        const eof = {name: "no more users", pic:"https://ncjamieson.com/static/42192ca0cf015fd255a43c143de83e7d/5fd6b/title.jpg", bio:"please try again later", age:"null"}
        $("#like-button").click(function () {
            //functions could be used for the 2 buttons
            if(user["like"] == "true"){
                $("#match-img").attr('src', user["pic"]);
                $( function() {
                    document.getElementById("dialog").style.visibility = "visible";
                    $( "#dialog" ).dialog();
                } );
                sendEmail(user)
                /////////////////////////////////////////////////////////
            }


            if(i >= (end-1))
            {
                setProfile(eof);
            }
            else {
                i++;
                user = users[i];
                setProfile(user);
            }

        })
        $("#dislike-button").click(function () {
            if(i >= (end-1))
            {
                setProfile(eof);
            }
            else {
                i++;
                user = users[i];
                setProfile(user);
            }
        })
    })
});






