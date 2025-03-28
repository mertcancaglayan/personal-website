document.addEventListener("DOMContentLoaded", () => {
	const sliders = document.querySelectorAll(".project-slider");

	sliders.forEach((slider) => {
		const slides = slider.querySelectorAll(".slide-image");
		const thumbnails = slider.closest(".project-card")?.querySelectorAll(".thumbnail") || [];
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

		if (thumbnails.length > 0) {
			thumbnails.forEach((thumbnail, index) => {
				thumbnail.addEventListener("click", () => {
					slideTo(index);
				});
			});
		}

		if (prevBtn) {
			prevBtn.addEventListener("click", () => {
				slideTo(currentSlide - 1);
			});
		}

		if (nextBtn) {
			nextBtn.addEventListener("click", () => {
				slideTo(currentSlide + 1);
			});
		}
	});
});

const cursor = document.querySelector(".blob");

document.addEventListener("mousemove", function (e) {
	const x = e.clientX;
	const y = e.clientY;
	cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
});

const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
	tab.addEventListener("click", function () {
		const targetContent = document.getElementById(this.dataset.target);

		tabs.forEach((tab) => tab.classList.remove("active"));
		this.classList.add("active");

		const offset = 80;
		const targetPosition = targetContent.getBoundingClientRect().top + window.scrollY - offset;

		window.scrollTo({
			top: targetPosition,
			behavior: "smooth",
		});
	});
});

document.addEventListener("keydown", (e) => {
	const activeTab = document.querySelector(".tab-button.active");
	const tabsArray = Array.from(tabs);
	const currentIndex = tabsArray.indexOf(activeTab);

	if (e.key === "ArrowRight" || e.key === "ArrowDown") {
		const nextTab = tabsArray[(currentIndex + 1) % tabsArray.length];
		nextTab.click();
	} else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
		const prevTab = tabsArray[(currentIndex - 1 + tabsArray.length) % tabsArray.length];
		prevTab.click();
	}
});
