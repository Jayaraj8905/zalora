$(document).ready(function() {

	// boolean indicated whether select menu open from button click
	var isButtonTriggered = false;

	$('#selectSizeType').selectmenu();
	$('#selectSize').selectmenu({
		change: function(event, ui) {

			var val = $(this).val();

			// if value is not selected remove the add to card option
			if (!val) {
				$('#addCart').removeClass('added success');
				updateCartCount();
			}
			// if the button is triggered and the value is selected do the add to card
			if (isButtonTriggered && val) {
				$('#addCart').trigger('click');
			}

			isButtonTriggered = false;
		}
	});

	$('#addCart').click(function(event) {
		// if value is not select open the size select box
		if (!$('#selectSize').val()) {
			$( "#selectSize" ).selectmenu("open");
			isButtonTriggered = true;
			event.preventDefault();
			return;
		} else {
			// else add it to the cart bag
			$(this).toggleClass('added');
			$(this).toggleClass('success');	
		}
		updateCartCount();		
	})

	function updateCartCount() {

		if ($('#addCart').hasClass('added')) {
			$('#cartCount').addClass('show');
		} else {
			$('#cartCount').removeClass('show');
		}
		
	}

})