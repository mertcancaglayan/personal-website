const sliders = document.querySelectorAll(".project-slider");

sliders.forEach((slider) => {
	const slides = slider.querySelectorAll(".slide-image");
	const thumbnails = slider.closest(".project-card").querySelectorAll(".thumbnail");
	const prevBtn = slider.querySelector(".prev");
	const nextBtn = slider.querySelector(".next");

	let currentSlide = 0;

	function slideTo(index) {
		const totalSlides = slides.length;

		if (index < 0) {
			currentSlide = totalSlides - 1;
		} else if (index >= totalSlides) {
			currentSlide = 0;
		} else {
			currentSlide = index;
		}

		slides.forEach((slide, i) => {
			slide.style.transform = `translateX(-${currentSlide * 100}%)`;
		});

		thumbnails.forEach((thumbnail, i) => {
			thumbnail.classList.toggle("active", i === currentSlide);
		});
	}

	thumbnails.forEach((thumbnail, index) => {
		thumbnail.addEventListener("click", () => {
			slideTo(index);
		});
	});

	prevBtn.addEventListener("click", () => {
		slideTo(currentSlide - 1);
	});

	nextBtn.addEventListener("click", () => {
		slideTo(currentSlide + 1);
	});
});
