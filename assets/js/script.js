const mobile = document.querySelector(".mobile");
mobile.addEventListener('click', () => {
	alert("maaf belum tersedia :(")
});

const home = document.querySelector(".scroll-home");
home.addEventListener('click', function (e){
		e.preventDefault();
	document.querySelector("body").scrollIntoView({behavior: 'smooth'});
});

const contact = document.querySelector(".scroll-contact");
contact.addEventListener('click', function (e){
		e.preventDefault();
	document.querySelector("#contact").scrollIntoView({behavior: 'smooth'});
});

const about = document.querySelector(".scroll-about");
about.addEventListener('click', function (e){
		e.preventDefault();
	document.querySelector("#offer").scrollIntoView({behavior: 'smooth'});
});

const btnLogin = document.querySelector(".login");
btnLogin.addEventListener('click', function(){
	alert('Maaf menu belum tersedia');
})
