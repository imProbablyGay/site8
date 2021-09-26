window.addEventListener('load' , lazyLoadOnload);
window.addEventListener('scroll' , lazyLoad);

let lazyItem = document.querySelectorAll('.lazy-load');//get all lazyload elem 
let i = 0;

function lazyLoad() {

	if (i >= lazyItem.length) {
		window.removeEventListener('scroll' , lazyLoad);
		return false;
	}

	if (window.pageYOffset > lazyItem[i].offsetTop - window.innerHeight / 1.5) {
		// delay
		let data = lazyItem[i].dataset.delay;
		if (data) {
			// check widnow size
			if (window.innerWidth > data.split(' ')[1]) {
				lazyItem[i].style.transitionDelay = data.split(' ')[0];
			}
		}

		lazyItem[i].classList.add('lazy-load_active');
		lazyItem[i].classList.remove('lazy-load');

		i++;
	}


	if (lazyItem.length == 0) {
		window.removeEventListener('scroll' , lazyLoad);
	}
};

function lazyLoadOnload() {
	if (lazyItem[i].classList.contains('lazy-load_onload')) {
		lazyItem[i].classList.add('lazy-load_active');
		lazyItem[i].classList.remove('lazy-load');

		i++;
		window.removeEventListener('scroll' , lazyLoad);
		setTimeout(() => {
			window.addEventListener('scroll' , lazyLoad)
		}, 100);
	}
}