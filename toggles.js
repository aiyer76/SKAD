const aws = require('aws-sdk');
const cheerio = require('cheerio');

document.getElementById('customSwitch1').addEventListener("change", function() {
        var toggled = document.getElementById('customSwitch1').checked;
        if(toggled) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: 'document.getElementsByTagName("h1")[0].style.backgroundColor = "yellow";'});
              });
            /*
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {scrape: true}, function(response) {
                    console.log(response);
                });
            });
            */
            /*
            var title = document.getElementsByTagName('title');
            console.log(title);
            */
        } else {
            console.log("off");
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.executeScript(
                    tabs[0].id,
                    {code: 'document.getElementsByTagName("h1")[0].style.backgroundColor = "white";'});
              });
        }
    });