const express = require("express");
const moment = require("moment");
const  MongoClient = require("mongodb").MongoClient;
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.5cdt0.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
const nodemailer = require('nodemailer');

let app = new express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//test ignore
app.get("/",(req, res) => {
    const hello = "Hello World";
    console.log(hello);
    res.send("yo");
})



//working, maybe client connect is not necessary however I kept getting 404 errors so I am using it
app.get("/getUsers",(req, res) => {

            fUsersCollection.find().toArray(function (err,result) {
                if (err) throw err;
                res.send(result)
            })

})

// searching for the user in the server is more secure but this is a prototype build so its done this way
app.get("/validateUser",(req, res) => {

    rUsersCollection.find().toArray(function (err,result) {
        if (err) throw err;
        res.send(result)
    })

})


//needs testing
app.post("/createUser",(req,res)=>{
    console.log('body',req.body)
    let user=req.body;
    rUsersCollection.insert(user, (err,result) => {
        console.log("User created", result);
        res.send({result: 200});
    })

})
let rUsersCollection
const openConnectionRealUsers = (message) => {
    client.connect((err,db) => {
        rUsersCollection = client.db("tinderUsers").collection("realUsers");
        if(!err){
            console.log('rUsers Database Connected')
        }
    });
}
let fUsersCollection
const openConnectionFakeUsers = (message) => {
    client.connect((err, db) => {
        fUsersCollection = client.db("tinderUsers").collection("users");
        if (!err) {
            console.log('fUsers Database Connected')
        }
    });
}


openConnectionRealUsers();
openConnectionFakeUsers();
app.listen(3000)