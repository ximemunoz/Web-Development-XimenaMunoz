const fs = require("fs");

fs.readFile("file1.txt", (err, data) => {

    if (!err) {

        console.log('data: ' + data);

    } else {

        console.log(err);

    }

});