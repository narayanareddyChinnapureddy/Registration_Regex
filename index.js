var form = document.getElementById('form');
var mobile = document.getElementById('mobile');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var span = document.getElementsByTagName('span');

form.addEventListener('submit', function (e) {
	// prevent page submission
	e.preventDefault();

	//validate the form
	if (validateForm()) {
		alert('Form submitted successfully');
	}
});

let validateForm = () => {
	return (
		checkEmail() && checkMobile() && checkPassword() && checkConfirmPassword()
	);
};

let makeValid = (inputEl, inputFeedback) => {
	inputEl.classList.add('is-form-valid');
	inputEl.classList.remove('is-form-invalid');
	inputFeedback.innerText = `your ${inputEl.placeholder} is valid`;
	inputFeedback.classList.add('text-success');
	inputFeedback.classList.remove('text-danger');
};

let makeInValid = (inputEl, inputFeedback) => {
	inputEl.classList.add('is-form-invalid');
	inputEl.classList.remove('is-form-valid');
	inputFeedback.innerText = `please enter proper ${inputEl.placeholder}`;
	inputFeedback.classList.remove('text-success');
	inputFeedback.classList.add('text-danger');
};
// email validation
let checkEmail = () => {
	let inputEl = document.querySelector('#email');
	let inputFeedback = document.querySelector('#emailFeedback');

	const regex = /^([a-z0-9\.-]+)@(neosoftmail|neosofttech).([a-z]{2,10})$/;

	if (regex.test(inputEl.value)) {
		makeValid(inputEl, inputFeedback);
		return true;
	} else {
		makeInValid(inputEl, inputFeedback);
		return false;
	}
};

// mobile number validation
let checkMobile = () => {
	let inputEl = document.querySelector('#mobile');
	let inputFeedback = document.querySelector('#mobileFeedback');
	const regex = /^[6 - 9]\d{9}$/;

	if (regex.test(inputEl.value)) {
		makeValid(inputEl, inputFeedback);
		return true;
	} else {
		makeInValid(inputEl, inputFeedback);
		return false;
	}
};

// password validation
let checkPassword = () => {
	let inputEl = document.querySelector('#password');
	let inputFeedback = document.querySelector('#passwordFeedback');

	const regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

	if (regex.test(inputEl.value)) {
		makeValid(inputEl, inputFeedback);
		return true;
	} else {
		makeInValid(inputEl, inputFeedback);
		return false;
	}
};

// check confirm password
let checkConfirmPassword = () => {
	let inputEl = document.querySelector('#confirmPassword');
	let inputFeedback = document.querySelector('#confirmPasswordFeedback');
	let passwordEl = document.querySelector('#password');
	const regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

	if (regex.test(inputEl.value) && inputEl.value === passwordEl.value) {
		makeValid(inputEl, inputFeedback);
		return true;
	} else {
		makeInValid(inputEl, inputFeedback);
		return false;
	}
};

// keyup events
let emailEl = document.querySelector('#email');
emailEl.addEventListener('keyup', function () {
	checkEmail();
});

let mobileEl = document.querySelector('#mobile');
mobileEl.addEventListener('keyup', function () {
	checkMobile();
});

let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', function () {
	checkPassword();
});

let confirmPasswordEl = document.querySelector('#confirmPassword');
confirmPasswordEl.addEventListener('keyup', function () {
	checkConfirmPassword();
});
