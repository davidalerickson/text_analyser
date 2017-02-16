$(function(){
    //set focus on textarea
    $("#user-text").focus();

  $("#js-text-form").on("submit", function(event){
    event.preventDefault();
    var textBlock = $("#user-text").val();
    var wordArray = getTokens(textBlock);

    $(".text-report").removeClass("hidden");
    $(".js-word-count").text(numOfWords(wordArray));
    $(".js-unique-count").text(countUniqueWords(wordArray));
    $(".js-average-length").text(avgWordLength(wordArray));

  });

  function numOfWords(wordArray){
    numWords = wordArray.length;
    return numWords;
  }

  function countUniqueWords(wordArray) {
    var n = [wordArray[0]];
    for(i = 0; i < wordArray.length; i++){
      if(n.indexOf(wordArray[i]) == -1) n.push(wordArray[i]);
    }
    return n.length;
  }

  function avgWordLength(wordArray){
    var charCount = 0;
    var avgWord;
    for(i = 0; i < wordArray.length; i++){
      charCount += String(wordArray[i]).length;
    }
    avgWord = charCount/wordArray.length;
    return avgWord;
  }

  function getTokens(rawString) {
    // NB: `.filter(Boolean)` removes any falsy items from an array
    return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
  }

});//Jquery Function
