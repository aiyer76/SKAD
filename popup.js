/*
let changeColor = document.getElementById('changeColor');
let findWord = document.getElementById('findWord');

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
=======

// function to find a word and turn it red
findWord.onclick = function(element) {
  var list = document.getElementsByTagName("body");
  var search_word = "impossible";
  var contents = [];

  for(var i = 0; i < list.length; i++){
    var contents = list[i].textContext.split(search_word);
    list[i].textContext = contents.join('<span class="highlight"\">'
      + search_word + '</span>');
  }
}
>>>>>>> kimberly
