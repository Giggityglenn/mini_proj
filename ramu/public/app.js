const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended : false}));

app.get("/",(req,res) => {
    res.status(200).send("hello");
})
const arr1 = [];
app.post("/send-image",(req,res) => {
    for(let img in req.body){
        arr1.push(img);
    }
    console.log(arr1[0]);
    arr1.forEach(element => {
        // console.log(`public/images/${element}`);
        let sent = fs.readFileSync(`public/images/${element}`);
        fs.writeFileSync(`public/selected-img/${element}`,sent);
    });
    res.send("Hi")
})


// let sent = fs.readFileSync(`public/images/img2.png`);
// fs.writeFileSync(`public/selected-img/img2.png`,sent);

app.listen(5000,() => {
    console.log("server running");
})