const express = require("express");
const moment = require("moment");

let app = new express();

app.use(express.static(__dirname + "/public"));

app.get("/",(req, res) => {
    const hello = "Hello World";
    console.log(hello);
    res.send("yo");
})



app.get("/getUsers",(req, res) => {

    const briannaDict = {
        name: "Brianna",
        bio: "if you like pinacoladaaaaas ....",
        age: 20,
        pic: "briannaPic.jpg"
    };

    const yuriDict = {
        name: "Yuri",
        bio: "はじめましてゆりです、イケメンがほしい。",
        age: 18,
        pic: "yuriPic.jpg"
    };

    const tyroneDict = {
        name: "Tyrone",
        bio: "former heavyweight boxer so I can easily beat you in a fight",
        age: 29,
        pic: "tyronePic.jpg"
    };

    const moeDict = {
        name: "Moe",
        bio: "結婚しろ、速く、速く、速く！",
        age: 33,
        pic: "moePic.jpeg"
    };

    const usersArray = [briannaDict, yuriDict, tyroneDict, moeDict];
    console.log(usersArray);
    res.send(usersArray);


})




app.listen(3000)