'use strict';
function submitHandler () {
	$('.js-submit').click(function() {
		var textBlock = $('.js-textInput').val();
		console.log(textBlock);
		var wordArray = textBlock.toLowerCase().split(/[ ,.?!:;-"]+/).filter(Boolean).sort();
		console.log(wordArray);
		var charCount;
		for (var i = 1; i < wordArray.length ; i++) {
			charCount = charCount + wordArray[i-1].length;
			if ( i = 1 ) { 
			var uniqueWords = 1;
			}else if (wordArray[i-1] != wordArray[i-2]) {
				uniqueWords ++
			}
		}
		$('.text-report').removeClass('hidden');
		$('.js-wordCount').text(wordArray.length);	
		$('.js-uniqueCount').text(uniqueWords);	
		$('.js-acgLength').text(charCount/wordArray.length + ' characters');

	});
}











$(function () {
	submitHandler();
});