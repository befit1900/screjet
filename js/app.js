$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');	
		$('body').toggleClass('lock');
	});// конец клика по бургеру
	$('.search-button').click(function(event) {
		$('.search-wrapper').toggleClass('active');
	});
});