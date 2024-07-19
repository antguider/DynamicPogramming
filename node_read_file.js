const fs = require('fs');

const readFileandPrint = (fileName) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if(err) {
            console.log('err', err);
            return;
        }
        console.log(data);
        fs.writeFile("output.txt", data, (err, data) => {
            if(err) {
                console.log('err', err);
                return;
            }
            console.log(data);
        });
    });

   
}

readFileandPrint("data.txt");