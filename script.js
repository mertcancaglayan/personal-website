var projects = [
	{
		featured: true,
		img: "assets/project-preview/Pawdoors/pawdoorsHome.png",
		alt: "Pawdoors industrial and hangar door systems official website home page.",
		name: "Pawdoors",
		kind: "Corporate website",
		desc: "Official global corporate website for an industrial door manufacturer serving 40+ countries. Engineered with Next.js, featuring comprehensive product catalogs for high-speed, hangar, and sectional door systems, detailed technical specifications, and interactive quote inquiry workflows.",
		stack: ["Next.js", "TypeScript", "CSS"],
		demo: "https://pawdoors.com",
	},
	{
		featured: true,
		img: "assets/project-preview/VocabVaultV2/VocabVault (1).png",
		alt: "Vocab Vault V2 home screen with Quiz, Flash Cards and Word Matching modes above category cards.",
		name: "Vocab Vault V2",
		kind: "Full-stack app",
		desc: "A MERN stack language learning app that helps users grow their vocabulary using word lists, categories and translations. It offers three game modes: Quiz, Flashcards and Word Matching.",
		stack: ["MongoDB", "TypeScript", "React", "Node.js", "Express.js", "MERN"],
		demo: "https://vocabvault-v2-frontend.onrender.com",
		repo: "https://github.com/mertcancaglayan/VocabVault-V2",
	},
	{
		featured: true,
		img: "assets/project-preview/UICrate/uicratePreview (1).png",
		alt: "UICrate component library showing slider and loader components.",
		name: "UICrate",
		kind: "Open-source UI library",
		desc: "A growing collection of UI components such as sliders, loaders, footers and testimonials, with light and dark mode, a live code editor and responsive design.",
		stack: ["JavaScript", "CSS"],
		demo: "https://mertcancaglayan.github.io/uicrate/",
		repo: "https://github.com/mertcancaglayan/uicrate",
	},

	{
		featured: true,
		img: "assets/project-preview/GameDl/game-dl.netlify.app_codecracker.png",
		alt: "GameDl Code Cracker: a cipher puzzle with letter input tiles and a guess counter.",
		name: "GameDl",
		kind: "Games",
		desc: "A collection of mind games built with TypeScript. Code Cracker is a cipher game, Word Context asks you to find the correct word in a sentence, and Scramble asks you to unscramble letters.",
		stack: ["TypeScript", "React"],
		demo: "https://game-dl.netlify.app",
		repo: "https://github.com/mertcancaglayan/Gamedl",
	},
	{
		featured: true,
		img: "assets/project-preview/LabourPulse/LabourPulse.png",
		alt: "Labour Pulse dashboard showing labor market charts.",
		name: "Labour Pulse",
		kind: "Data visualization",
		desc: "A website for visualizing country-specific labor market, inflation and similar macroeconomic data, drawn with Chart.js.",
		stack: ["TypeScript", "React", "Chart.js"],
		demo: "https://labourpulse.netlify.app",
		repo: "https://github.com/mertcancaglayan/labour-pulse",
	},

	{
		featured: true,
		img: "assets/project-preview/WebCrate/webcrate preview (1).png",
		alt: "WebCrate template gallery with responsive website previews.",
		name: "WebCrate",
		kind: "Open-source templates",
		desc: "A growing collection of fully responsive website templates for building modern sites quickly, for beginners and experienced developers alike.",
		stack: ["JavaScript", "CSS"],
		demo: "https://mertcancaglayan.github.io/web-templates/",
		repo: "https://github.com/mertcancaglayan/web-templates",
	},
	{
		featured: true,
		img: "assets/project-preview/angularMovie/Home-page.png",
		alt: "Movie Website home page with banner and categorized galleries.",
		name: "Movie Website",
		kind: "Angular app",
		desc: "Search movies and TV series, browse banners and categorized galleries, view details, save favorites and filter by genre.",
		stack: ["Angular", "TypeScript", "CSS"],
		demo: "https://angular-movie-app-amber.vercel.app",
		repo: "https://github.com/mertcancaglayan/angular-movie-app",
	},
	{
		featured: false,
		name: "Angular Bakery Website",
		desc: "A modern bakery website with a product catalog and responsive design.",
		stack: ["Angular", "TypeScript", "SCSS"],
		demo: "https://mybakery-angular.netlify.app",
		repo: "https://github.com/mertcancaglayan/Bakery",
	},
	{
		featured: false,
		name: "News Website",
		desc: "Responsive news site with keyword search, category browsing, pagination and detailed article views.",
		stack: ["Angular", "TypeScript", "SCSS"],
		demo: "",
		repo: "https://github.com/mertcancaglayan/angular-newspaper",
	},
	{
		featured: false,
		name: "React Movies App",
		desc: "Search titles, browse banners and galleries, watch trailers in the detail view, save favorites and filter by genre.",
		stack: ["React", "JavaScript", "CSS"],
		demo: "https://moviereactwebsite.netlify.app",
		repo: "https://github.com/mertcancaglayan/react-movie-website",
	},
	{
		featured: false,
		name: "React Health Website",
		desc: "A health and sports themed main page.",
		stack: ["React", "JavaScript", "CSS"],
		demo: "https://reacthealthwebsite.netlify.app",
		repo: "https://github.com/mertcancaglayan/react-health-website",
	},
	{
		featured: false,
		name: "Compound Interest App",
		desc: "A compound interest calculator that visualizes the results with Chart.js.",
		stack: ["JavaScript", "CSS"],
		demo: "https://mertcancaglayan.github.io/compoundInterestCalc/",
		repo: "https://github.com/mertcancaglayan/compoundInterestCalc",
	},
	{
		featured: false,
		name: "Math Quiz Application",
		desc: "A web-based math quiz with five categories to choose from.",
		stack: ["JavaScript", "CSS"],
		demo: "https://mertcancaglayan.github.io/webquiz.github.io/",
		repo: "https://github.com/mertcancaglayan/webquiz.github.io",
	},
	{
		featured: false,
		name: "Memory Card Matching Game",
		desc: "A memory card matching game with two categories to choose from.",
		stack: ["JavaScript", "CSS"],
		demo: "https://mertcancaglayan.github.io/Memory-Game/",
		repo: "https://github.com/mertcancaglayan/Memory-Game",
	},
];

function createElement(tag, cls, text) {
	var node = document.createElement(tag);
	if (cls) node.className = cls;
	if (text) node.textContent = text;
	return node;
}

function createExternalLink(href, label, projectName) {
	var anchor = createElement("a", "", label);
	anchor.href = href;
	anchor.target = "_blank";
	anchor.rel = "noopener";
	anchor.setAttribute("aria-label", label + ": " + projectName);
	return anchor;
}

var TECH_ICONS = {
	React: "fa-brands fa-react",
	Angular: "fa-brands fa-angular",
	"Next.js": "fa-solid fa-bolt",
	TypeScript: "fa-solid fa-code",
	JavaScript: "fa-brands fa-js",
	HTML5: "fa-brands fa-html5",
	HTML: "fa-brands fa-html5",
	CSS3: "fa-brands fa-css3-alt",
	CSS: "fa-brands fa-css3-alt",
	SCSS: "fa-brands fa-sass",
	Sass: "fa-brands fa-sass",
	"Node.js": "fa-brands fa-node-js",
	"Express.js": "fa-solid fa-server",
	Express: "fa-solid fa-server",
	MongoDB: "fa-solid fa-leaf",
	MySQL: "fa-solid fa-database",
	PostgreSQL: "fa-solid fa-database",
	NoSQL: "fa-solid fa-cubes",
	Python: "fa-brands fa-python",
	Git: "fa-brands fa-git-alt",
	GitHub: "fa-brands fa-github",
	"Chart.js": "fa-solid fa-chart-line",
};

function buildProjectActions(project) {
	var wrapper = createElement("div", "actions");
	if (project.demo) {
		var demoLink = createExternalLink(project.demo, "", project.name);
		demoLink.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i> Live demo';
		wrapper.appendChild(demoLink);
	}
	if (project.repo) {
		var repoLink = createExternalLink(project.repo, "", project.name);
		repoLink.innerHTML = '<i class="fa-brands fa-github"></i> Repository';
		wrapper.appendChild(repoLink);
	}
	return wrapper;
}

var featuredGrid = document.getElementById("featured");
var moreList = document.getElementById("more");

projects.forEach(function (project) {
	if (project.featured) {
		var card = createElement("article", "card");

		if (project.img) {
			var shotContainer = createElement("div", "shot");
			var image = createElement("img");
			image.src = project.img;
			image.alt = project.alt || project.name;
			image.loading = "lazy";
			shotContainer.appendChild(image);
			card.appendChild(shotContainer);
		}

		card.appendChild(createElement("span", "kind", project.kind));
		card.appendChild(createElement("h3", "", project.name));
		card.appendChild(createElement("p", "", project.desc));

		var chipList = createElement("ul", "chips");
		project.stack.forEach(function (tech) {
			var chip = createElement("li");
			var iconClass = TECH_ICONS[tech];
			if (iconClass) {
				var icon = createElement("i", iconClass);
				chip.appendChild(icon);
				chip.appendChild(document.createTextNode(" " + tech));
			} else {
				chip.textContent = tech;
			}
			chipList.appendChild(chip);
		});
		card.appendChild(chipList);

		card.appendChild(buildProjectActions(project));
		featuredGrid.appendChild(card);
	} else {
		var row = createElement("li", "row");
		row.appendChild(createElement("h4", "", project.name));

		var detailBox = createElement("div");
		detailBox.appendChild(createElement("p", "", project.desc));
		detailBox.appendChild(createElement("span", "stack", project.stack.join(" · ")));
		row.appendChild(detailBox);

		row.appendChild(buildProjectActions(project));
		moreList.appendChild(row);
	}
});

try {
	localStorage.removeItem("mc-theme");
	document.documentElement.removeAttribute("data-theme");
} catch (err) {
}

var menuButton = document.getElementById("menu");
var siteLinksNav = document.getElementById("site-links");

function setMenuState(isOpen) {
	siteLinksNav.classList.toggle("open", isOpen);
	menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
	menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

menuButton.addEventListener("click", function () {
	setMenuState(!siteLinksNav.classList.contains("open"));
});
siteLinksNav.addEventListener("click", function (event) {
	if (event.target.closest("a")) setMenuState(false);
});

document.addEventListener("click", function (event) {
	if (!siteLinksNav.contains(event.target) && !menuButton.contains(event.target)) {
		setMenuState(false);
	}
});

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") setMenuState(false);
});

var copyButton = document.getElementById("copy");

copyButton.addEventListener("click", function () {
	var emailText = document.getElementById("email").textContent;

	function onCopySuccess() {
		copyButton.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
		setTimeout(function () {
			copyButton.innerHTML = '<i class="fa-regular fa-copy"></i> Copy email';
		}, 1800);
	}

	function onCopyFallback() {
		var range = document.createRange();
		range.selectNodeContents(document.getElementById("email"));
		var selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
		copyButton.innerHTML = '<i class="fa-regular fa-copy"></i> Press Ctrl+C';
		setTimeout(function () {
			copyButton.innerHTML = '<i class="fa-regular fa-copy"></i> Copy email';
		}, 2500);
	}

	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard.writeText(emailText).then(onCopySuccess, onCopyFallback);
	} else {
		onCopyFallback();
	}
});

var navLinks = document.querySelectorAll(".links a");

if ("IntersectionObserver" in window) {
	var sectionObserver = new IntersectionObserver(
		function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					navLinks.forEach(function (link) {
						link.removeAttribute("aria-current");
					});
					var matchingLink = document.querySelector(
						'.links a[data-s="' + entry.target.id + '"]',
					);
					if (matchingLink) matchingLink.setAttribute("aria-current", "true");
				}
			});
		},
		{ rootMargin: "-40% 0px -55% 0px" },
	);

	document.querySelectorAll("main section").forEach(function (section) {
		sectionObserver.observe(section);
	});
}
