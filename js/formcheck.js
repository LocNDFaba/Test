
var error_name = true;
var error_age = true;
var error_email = true;
var error_message = true;

console.log("connect form check !!");

function check_email() {
	//console.log("Checking email");
	var emailAddress = $("#contact-email").val();
	console.log("Input email: " + emailAddress);
	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	let notice = '';

	let feedback = $('#feedback-email');

	if(emailAddress.length === 0){
		notice = '<p class="text-danger">You must submit with an email !!</p>';
		feedback.append(notice);
		error_email = true;
		return;
	}

	if(pattern.test(emailAddress)) {
			notice = '<p class="text-success">Email valid</p>';
			error_email = false;
		} else {
			notice = '<p class="text-danger">Email Invalid !!</p>';
			error_email = true;
		}	
	feedback.html(notice);
	return;
}

function check_name(){
	var pattern = /^[a-zA-Z ]+$/;
	var name = $("#contact-name").val();
	let notice = '';

	let feedback = $('#feedback-name');

	if(name.length === 0){
		notice = '<p class="text-danger">You must submit your name !!</p>';
		feedback.html(notice);
		error_name = true;
		return;
	}

	if(pattern.test(name)) {
			notice = '<p class="text-success">Name valid !!</p>';
			error_name = false;
		} else {
			notice = '<p class="text-danger">Your name must have at least 5 characters and can not contain number or special characters !!</p>';
			error_name = true;
		}	
	feedback.html(notice);
	return;
}

function check_age(){
	var age = $("#contact-age").val();

	let notice = '';

	let feedback = $('#feedback-age');

	if(age.length === 0){
		notice = '<p class="text-danger">You must submit your age !!</p>';
		feedback.html(notice);
		error_name = true;
		return;
	}

	if(age > 16 && age < 110){
		notice = '<p class="text-success">Age valid !!</p>';
		feedback.html(notice);
		error_age = false;
		return;
	}
	else
		if(age < 16){
			notice = '<p class="text-danger">Your age must higher than 16 !!</p>';
			error_age = true;
		}
		else{
			notice = '<p class="text-danger">Your age are Invalid (too big)!!</p>';
			error_age = true;
		}
	feedback.html(notice);
	return;
}

function check_message(){
	var message = $('#contact-message').val();

	let notice = '';

	let feedback = $('#feedback-message');

	if(message.length === 0){
		notice = '<p class="text-danger">You must submit your message !!</p>';
		feedback.html(notice);
		error_message = true;
		return;
	}
	else if(message.length < 30)
	{
		notice = '<p class="text-danger">Your message must have at least 30 characters !!</p>';
		feedback.html(notice);
		error_message = true;
		return;
	}
	else{
		notice = '<p class="text-success">Message valid !!</p>';
		feedback.html(notice);
		error_message = false;
		return;
	}
}

$("#contact-email").focusout(function() {
	check_email();
})

$("#contact-name").focusout(function() {
	check_name();
})

$("#contact-age").focusout(function() {
	check_age();
})

$("#contact-message").focusout(function() {
	check_message();
})

$("#sm-btn").click(function(e) {
	if(error_name === true || error_age === true || error_email === true || error_message ===true )
	{
		e.preventDefault();
	}
})

