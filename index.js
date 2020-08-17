const express = require("express");
const moment = require("moment");
const  MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0.5cdt0.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

let app = new express();

app.use(express.static(__dirname + "/public"));

//test ignore
app.get("/",(req, res) => {
    const hello = "Hello World";
    console.log(hello);
    res.send("yo");
})



//working, maybe client connect is not necessary however I kept getting 404 errors so I am using it
app.get("/getUsers",(req, res) => {
    client.connect((err,db) => {
        let result = client.db("tinderUsers").collection("users");
        if(!err){
            console.log('Database Connected')
            var dbo = db.db("tinderUsers");
            dbo.collection("users").find({}).toArray(function(err, result){
                console.log(result);
                res.send(result);
            })

        }
    })

})


//needs testing
app.post("createUser",(req,res)=>{
    console.log('body',req.body)
    let user=req.body;
    client.connect((err,db) => {
        let result = client.db("tinderUsers").collection("realUsers");
        if(!err){
            console.log('Database Connected')
            var dbo = db.db("tinderUsers");
            dbo.collection("realUsers").insert(user, (err, result) =>{
                console.log('Journal Inserted',result)
                res.send({result:200})
            })

        }
    })
})





app.listen(3000)