const form = document.querySelector('form');
const message = document.querySelector('.chosen-rating');
const ratings = document.querySelectorAll('input');

const formSection = document.querySelector('section[class="form"]');
const thankyouSection = document.querySelector('section[class="thankyou"]');

let chosenRating = 0;

form.addEventListener('submit', (event) => {
	event.preventDefault();

	if (chosenRating) {
		message.innerHTML = `${chosenRating}`;
		formSection.style.display = 'none';
		thankyouSection.style.display = 'flex';
		form.reset();
	}
});

ratings.forEach((rating) => {
	rating.addEventListener('click', () => {
		chosenRating = rating.value;
	});
});
