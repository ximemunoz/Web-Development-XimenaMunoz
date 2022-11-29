const express = require("express");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.router("/")
    .get((req, res) => {
        res.sendFile(__dirname + "/signup.html");
    })
    .post("/", (req, res) => {
        const fName = req.body.fName;
        const lName = req.body.lName;
        const email = req.body.email;

        var data = {
            members: [
                {
                    email_address: email,
                    status: "subscribed",
                    merge_fields: {
                        FNAME: fName,
                        LNAME: lName
                    }
                }
            ]
        }
        var jsonData = JSON.stringify(data);
        //console.log(JSON.parse(jsonData));
        const listId = "1556e62296";
        const apiKey = "7e8d9289fb8874caa49351151f5a376d-us2";
        const url = "https://us2.api.mailchimp.com/3.0/lists/" + listId;
        const options = {
            method: "POST",
            auth: "gcastillo56:" + apiKey
        }
        const name = "<li>item 1</li><li>item 2</li>";
        var mailRequest = https.request(url, options, (response) => {
            if(response.statusCode === 200) {
                response.on("data", (data) => {
                    var jsonResp = JSON.parse(data);
                    //console.log(jsonResp);
                    if(jsonResp["error_count"] === 0) {
                        //res.sendFile(__dirname +"/success.html");
                        res.render(__dirname + "/failure.html", {name:name});
                    } else {
                        res.render(__dirname + "/failure.html", {name:name});
                        //console.log(JSON.stringify(jsonResp.errors[0]));
                        console.log(jsonResp.errors[0]["error_code"]);
                        console.log(jsonResp.errors[0]["error"]);
                    }
                }).on("error", (e) => {
                    res.render(__dirname + "/failure.html", {name:name});
                });
            } else {
                res.render(__dirname + "/failure.html", {name:name});
            }
        });
        mailRequest.write(jsonData);
        mailRequest.end();
    });

app.get("/failure", (req, res) => {
    res.redirect("/");
});

app.get("/success", (req, res) => {
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});






