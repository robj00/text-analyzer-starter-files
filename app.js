'use strict';
function submitHandler () {
	$('.js-submit').click(function(event) {
		event.preventDefault();
		var textBlock = $('.js-textInput').val();
		var wordArray = textBlock.toLowerCase().split(/[ -,.?!:;"]+/).filter(Boolean).sort();
		var charCount = 0;
		for (var i = 1; i <= wordArray.length ; i++) {
			charCount = charCount + wordArray[i-1].length;
			if ( i == 1 ) { 
			var uniqueWords = 1;
			}else if (wordArray[i-1] != wordArray[i-2]) {
				uniqueWords ++
			}
		}

		var avgLength = charCount/wordArray.length
		$('.text-report').removeClass('hidden');
		$('.js-wordCount').text(wordArray.length);	
		$('.js-uniqueCount').text(uniqueWords);	
		$('.js-avgLength').text(avgLength + ' characters');

	});
}











$(function () {
	submitHandler();
});