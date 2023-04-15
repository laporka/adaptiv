const nav = document.querySelector('#nav');/*id="nav" */
const btnNav = document.querySelector('#btn_nav');/*id="btn_nav"*/
const navImg = document.querySelector('#nav_img');/**/

btnNav.onclick = () => {
    if (nav.classList.toggle('open')) {
        navImg.src = "./NAV CLOSE.svg";/*змінитися на хрестик*/
    } else {
        navImg.src = './NAV.svg';
    }
}

AOS.init();