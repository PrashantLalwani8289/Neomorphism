const btns = document.querySelectorAll('.btn');

for (const btn of btns) {
	btn.addEventListener('click', () => {
		btn.classList.toggle('active');
	});
}
