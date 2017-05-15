// 1. Set up a document ready function so that nothing happens too early.

$(document).ready(function() {
	// Same as adding event listener 
	$('.sign-up-form').submit(function(event){
		event.preventDefault();
		console.log("User submitted the form!");
		$('input').each(function() {
			var currentInputTagClass = $(this).attr('class');
			console.log(currentInputTagClass);
			// Target the corresponding error div for this input.
			var errorDivClassName = '.' + currentInputTagClass + '-error';
			console.log(errorDivClassName);
			// Input tags have .val(), whereas everything else has inner HTML, or .html()
			if($(this).val() == '') {
				// console.log("User did not enter enough information.");
				$(errorDivClassName).html('Field cannot be empty').css({'display': 'inline-block'});
			}
		});

		// If the target is not an input box, use the method .text or .html
		var password = $('.password').val();
		var password2 = $('.password2').val();
		if(password !== password2) {
			$('.password-error').html('Your passwords do not match.')
		}

		// Force user to include a number in the password.
		var numberFound = false;
		for(let i = 0; i < password.length; i++) {
			if(isNaN(Number(password[i]))) {
				// This is not a number. Don't do anything.
				continue;
			} else {
				// This is a number.
				numberFound = true;
			}
			if(!numberFound) {
				$('.password-error').html('Password must contain at least 1 number.')
			}
		}

	});
});