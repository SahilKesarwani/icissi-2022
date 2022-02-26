var timeOnSlide = 3,
	timeBetweenSlides = 1,
	animationstring = "animation",
	animation = false,
	keyframeprefix = "",
	domPrefixes = "Webkit Moz O Khtml".split(" "),
	pfx = "",
	slidy = document.getElementById("slidy");
if (slidy.style.animationName !== undefined) {
	animation = true;
}

if (animation === false) {
	for (var i = 0; i < domPrefixes.length; i++) {
		if (slidy.style[domPrefixes[i] + "AnimationName"] !== undefined) {
			pfx = domPrefixes[i];
			animationstring = pfx + "Animation";
			keyframeprefix = "-" + pfx.toLowerCase() + "-";
			animation = true;
			break;
		}
	}
}

if (animation === false) {
} else {
	var images = slidy.getElementsByTagName("img"),
		firstImg = images[0],
		imgWrap = firstImg.cloneNode(false);
	slidy.appendChild(imgWrap);
	var imgCount = images.length,
		totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1),
		slideRatio = (timeOnSlide / totalTime) * 100,
		moveRatio = (timeBetweenSlides / totalTime) * 100,
		basePercentage = 100 / imgCount,
		position = 0,
		css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + imgCount * 100 + "%;  }\n";
	css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
	css.innerHTML += "@" + keyframeprefix + "keyframes slidy {\n";
	for (i = 0; i < imgCount - 1; i++) {
		//
		position += slideRatio;
		css.innerHTML += position + "% { left: -" + i * 100 + "%; }\n";
		position += moveRatio;
		css.innerHTML += position + "% { left: -" + (i + 1) * 100 + "%; }\n";
	}
	css.innerHTML += "}\n";
	css.innerHTML += "#slidy { left: 0%; " + keyframeprefix + "transform: translate3d(0,0,0); " + keyframeprefix + "animation: " + totalTime + "s slidy infinite; }\n"; // call on the completed keyframe animation sequence
	document.body.appendChild(css);
}

let slider = document.getElementById("slidy-container");
console.log(window.innerWidth);
if (window.innerWidth >= 600) {
	slider.style = `height:60vh;background-size:600px;`;
}
let deadline = document.getElementById("deadline");

const blink = () => {
	if (deadline.style.visibility === "hidden") {
		deadline.style.visibility = "visible";
	} else {
		deadline.style.visibility = "hidden";
	}
};

setInterval(blink, 500);

var scrollEventHandler = function () {
	window.scroll(0, window.pageYOffset);
};
window.addEventListener(scroll, scrollEventHandler, false);

// const isInViewport = elem => {
//     const distance = elem.getBoundingClientRect();
//     console.log(distance.top, distance.bottom)
//     return (
//         distance.top >= 0 &&
//         distance.left >= 0 &&
//         distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         distance.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// };

// if (isInViewport(document.getElementById("prakatam"))) {
//     console.log("YES");
//     prakatam.classList.add("animate__animated")
//     prakatam.classList.add("animate__fadeInLeft")
// }

// document.addEventListener("scroll", () => {
//     let prakatam = document.getElementById("prakatam")
//     // console.log("YES")
//     if (isInViewport(prakatam)) {
//         console.log("YES");
//         prakatam.classList.add("animate__animated")
//         prakatam.classList.add("animate__fadeInLeft")
//     }
// })

// var $window = $(window);
// var $elem = $(".animation")

// function isScrolledIntoView($elem, $window) {
//     var docViewTop = $window.scrollTop();
//     var docViewBottom = docViewTop + $window.height();

//     var elemTop = $elem.offset().top;
//     var elemBottom = elemTop + $elem.height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }
// $(document).on("scroll", function () {
//     if (isScrolledIntoView($elem, $window)) {
//         $elem.addClass("animate")
//     }
// });
