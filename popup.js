/*
let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });

  changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
          // here is where we'll want to inject a div to highlight text
    });
  };
<<<<<<< HEAD
*/
import AWS.Comprehend;

var comprehendTest = new AWS.Comprehend();
var params = {
  LanguageCode: en | es | fr | de | it | pt, /* required */
  Text: document.getElementsByTagName("body").toString() /* required */
};

let findWord = document.getElementById('findWord');
// function to find a word and turn it red
findWord.onclick = function(element) {
  var list = document.getElementsByTagName("body");
  var search_words = comprehendTest.detectSentiment(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
  var contents = [];

  for(var i = 0; i < list.length; i++){
    var contents = list[i].textContext.split(search_word);
    list[i].textContext = contents.join('<span class="highlight"\">'
      + search_word + '</span>');
  }
}
