const form = document.querySelector('form');
const input = document.querySelector('input');
const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (input.value.trim().length === 0) {
		invalidEmail('Whoops! It looks like you forgot to add your email');
		return;
	}

	if (!expression.test(input.value)) {
		invalidEmail('Please provide a valid email address');
		return;
	}

	form.submit();
});

function invalidEmail(message) {
	input.nextElementSibling.classList.add('invalid');
	input.nextElementSibling.innerHTML = `${message}`;
}
