const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.links');
const content = document.querySelector('.text');


hamburger.addEventListener('click', ()=> {
    navLinks.classList.toggle('open')
    links.forEach(link =>{
        link.classList.toggle('fade');
    })
    content.classList.toggle('erase')
})

/* Toggle dark mode button */

const btnSwitch = document.querySelector('#switch');
const landingBg = document.querySelector('.landing');

const chisato = document.getElementById('chisato');
const takina = document.getElementById('takina');

const world = document.querySelector('.world');
const btn = document.querySelector('.btn');
const navbar = document.querySelector('.nav-main');

const tabContent = document.querySelector('.tab-content');
const tabs = document.querySelector('.tabs');


const button = document.querySelector('.button');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');

const footer = document.querySelector('.footer');
const footerIcon = document.querySelector('.link-footer')

btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active');
    landingBg.classList.toggle('dark');
    chisato.classList.toggle('show');
    takina.classList.toggle('show');
    world.classList.toggle('dark');
    btn.classList.toggle('dark');
    navbar.classList.toggle('dark');
    navLinks.classList.toggle('dark');
    tabContent.classList.toggle('dark');
    button.classList.toggle('dark')
    button2.classList.toggle('dark')
    button3.classList.toggle('dark')
    tabs.classList.toggle('dark')
    footer.classList.toggle('dark')
    footerIcon.classList.toggle('dark')

})

/* TRIPLE TAB SECTION */

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
    removeBorder();
    removeShow();

    this.classList.add('tab-border');

    const tabContentItem = document.querySelector(`#${this.id}-content`)

    tabContentItem.classList.add('show-tab');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show-tab'));
}

tabItems.forEach(item => item.addEventListener('click', selectItem));



