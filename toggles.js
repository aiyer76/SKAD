const aws = require('aws-sdk')
const cheerio = require('cheerio')

document.getElementById('customSwitch1').addEventListener("change", function() {
        var toggled = document.getElementById('customSwitch1').checked;
        if(toggled) {
            console.log("off");
        } else {
            const title = cheerio.load('h1');
            console.log(title);
            //text = "Amber Rudd quits government over Johnson's Brexit stance"
        }
    });
