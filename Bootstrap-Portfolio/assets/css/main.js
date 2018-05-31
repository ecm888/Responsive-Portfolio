var MSize = document.querySelector('.MSize');
var mobileNav = document.querySelector('.Bar');

function openBar() {
    mobileNav.classList.add('open');
}

function closeBar() {
    mobileNav.classList.remove('open');
}

MSize.addEventListener('click', openBar);
MSize.addeventLisenter('click',closeBar);

