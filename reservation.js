"use strict";

$(document).ready( () => {
	const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const nightsPattern = /^{0-9}+$/;
	document.getElementById("arrival_date").focus();
	document.getElementById("reservation_form").addEventListener('submit', function(e){
		let arrivalDate = document.getElementById("arrival_date");
		if(arrivalDate.value == ''){
			arrivalDate.value = arrivalDate.value.trim();
			let span = arrivalDate.nextElementSibling;
			span.innerText = "* This field is required!";
			e.preventDefault();
		}
		let nights = document.getElementById("nights");
		if( nights == '' || !nightsPattern.test(nights.value)){
			nights.value = nights.value.trim();
			let span = nights.nextElementSibling;
			span.innerText = "* Must be a number!";
			e.preventDefault();
		}
		let email = document.getElementById("email");
		if(!emailPattern.test(email.value)){
			email.value = email.value.trim();
			let span = email.nextElementSibling;
			span.innerText = "* Must be a valid email address!";
			e.preventDefault();
		}
		let name = document.getElementById("name");
		if(name.value == ''){
			name.value = name.value.trim();
			let span = name.nextElementSibling;
			span.innerText = "* This field is required!";
			e.preventDefault();
		}
		let phone = document.getElementById("phone");
		if(phone.value == ''){
			phone.value = phone.value.trim();
			let span = phone.nextElementSibling;
			span.innerText = "* This field is required!";
			e.preventDefault();
		}
	});
}); // end ready