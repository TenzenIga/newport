import style from "./static/_scss/main.scss";
import mixitup from 'mixitup';
import 'particles.js';

import { pathToFileURL } from "url";
const url = pathToFileURL
particlesJS.load('particles-js', 'src/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});


const icons = document.querySelectorAll('.icons i');
const aboutHeading = document.querySelector('.about .heading');
const aboutBody = document.querySelector('.about-body')
const worksHeading = document.querySelector('.works .heading');
const projects = document.querySelector('.projects');
const menu = document.querySelector('.menu');
const floatMenu = document.querySelector('.float-menu');
const pages = document.querySelectorAll('.page-link');
const navMenu = document.querySelector('.pages')

floatMenu.style.width = menu.children[0].offsetWidth + 'px'
floatMenu.style.left = menu.children[0].offsetLeft + 'px';
floatMenu.children[0].style.left = `-${menu.children[0].offsetLeft}px`;
window.onscroll = handleScroll

burger.onclick = function(){
  navbar.children[0].classList.toggle('show');
}
function handleScroll(){
  if(pageYOffset > 500){
    aboutHeading.classList.add('animated', 'slideInLeft')
    pages.forEach(page => page.classList.remove('active'))
    pages[1].classList.add('active')
  }else{
    pages.forEach(page => page.classList.remove('active'))
    pages[0].classList.add('active')
  }
  if(pageYOffset > 550){
    aboutBody.classList.add('animated', 'slideInLeft')
  }
  if(pageYOffset > 720){
    [...icons].forEach(icon => icon.classList.add('animated','flipInY'));
    navbar.classList.add('fixed')
  }else{
    navbar.classList.remove('fixed')
  }
  if(pageYOffset > 1100){
    worksHeading.classList.add('animated', 'slideInLeft')
    menu.parentElement.classList.add('animated', 'fadeIn')
    pages.forEach(page => page.classList.remove('active'))
    pages[2].classList.add('active')
  }
  if(pageYOffset > 1300){
    projects.classList.add('animated', 'fadeInUp')
  }
}
menu.addEventListener('click', function(e){    
    if(e.target.classList.contains('menu-item')){
    floatMenu.style.width = e.target.offsetWidth + 'px';
    floatMenu.style.left = e.target.offsetLeft + 'px';
    floatMenu.children[0].style.left = `-${e.target.offsetLeft}px`;
    }
    return;
});

viewBtn.onclick = scrollToSection;

navMenu.addEventListener('click', function(e){
  const el = document.getElementById(e.target.dataset.name)
  el.scrollIntoView({behavior:'smooth'})
})

function scrollToSection(){
  about.scrollIntoView({behavior:'smooth'});
}
var mixer = mixitup(projects);  

 
/*
how to push to gh pages
git subtree push --prefix dist origin gh-pages
*/